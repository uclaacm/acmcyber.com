---
title: LLMs for Binary Analysis
authors: [Srishti Ganu, Rathul Anand, John Li, Savannah Alanis, Joshua Zhu, Jackson Kohls, Minh Trinh, Gregor MacDonald, Leon Lenk, Benson Liu]
category: Projects
tags: [winter-2024, cyber-lab]
description: Vulnerability detection using LLMs
---

# LLMs for Binary Analysis
## Introduction
Large Language Models (LLMs) have proven to be one of the most exciting areas of research and development in artificial intelligence over the past year. With such broad applications from generic question answering to code generation, we decided to explore their applications to the field of binary analysis.

Our work focused on testing the efficacy of LLMs on correctly detecting vulnerabilities in LLVM-IR, an abstract representation of code that is closer to machine code. We tested several public out-of-the-box LLMs, such as ChatGPT-3.5/4, Phi 2, and StableCode-3B. Results were promising at this stage, but we quickly realized there was a flaw, namely that the function names in the code gave away what vulnerability was associated with them. Thus, the LLMs were likely relying on the naming of a function to determine possible security issues present in the code. After making appropriate changes to the dataset, the performance of the LLMs dramatically worsened.

Following this, we moved towards fine-tuning our own model, as well as performing additional preprocessing on the data, which led to our member’s work in the following areas.

## What is LLVM IR?
As part of compiler construction, many multi-pass compilers implement an intermediate representation (IR) language which acts as an interface between the compiler frontend and backend. This is to modularize parts of developing a compiler. Decompilers such as Binary Ninja and Ghidra also take ideas from compiler construction by modularizing parts of the decompilation process with an IR as well. One of the motivations behind this project was to use an intermediate representation language from a decompiler as an interface to Large Language Models to take advantage of Natural Language Processing for binary analysis.

LLVM is a popular compiler framework which is used in many modern programming languages such as Rust, Swift, and C/C++ (used by Clang). It has a rich intermediate representation language called LLVM IR which can be used for program analysis. One of the benefits of LLVM IR we found was the large amount of support and tooling. The LLVM project has support inside the Clang compiler for C/C++, which allows for easy generation of LLVM IR from vulnerable code samples. Most of our work focused on proving how LLVM IR can be used for binary analysis. An example of generated LLVM IR is shown below.
```
; Function Attrs: noinline nounwind optnone ssp uwtable(sync)
define void @CWE416_Use_After_Free__malloc_fre_char_02_bad() #0 {
  %1 = alloca ptr, align 8
  store ptw null, ptr %1, align 8
  %2 = call ptr @malloc(i64 noundef 100) #6
  store ptw %2, ptr %1, align 8
  %3 = load ptr, ptr %1, align 8
  %4 = icmp eq ptr %3, null
  br i1 %4, label %5, label %6
}
```

## Initial Tests with ChatGPT
Initially, we wanted to determine if out-of-the-box LLMs were capable of identifying various vulnerabilities of LLVM IR without further guidance. We used the Juliet Test Suite for C/C++, a publicly available dataset of vulnerable code, labeled by the vulnerability’s CWE number. After generating LLVM IR from the Juliet dataset, we tested how well ChatGPT and Bard could understand the code, identify vulnerabilities, and suggest reasonable fixes. There was relative success with ChatGPT - it was accurate in identifying the vulnerability, and it could pick up on many technical details for simple examples.

The main problem was due to LLVM IR preserving function names (that often themselves explicitly revealed vulnerabilities). Thus, these LLMs likely relied on the function names to make predictions. For both models, especially Bard, removing these function names significantly hindered the performance of these models in identifying the CWE or security issues of the code. The effect was more pronounced against longer code and more complex CWEs. These results told us that the out-of-the-box LLMs could not identify issues in code without extreme assistance.

## Juliet and Preprocessing, Function Renaming
To preprocess the code, we compiled each of these files with clang, configured to emit LLVM IR on their respective platforms. A challenge we noticed with our initial trials with out-of-the-box LLMs was that clang preserves the names (e.g. CWE416_Use_After_Free__malloc_free_char_01_bad) of the Juliet dataset. This gave the LLMs unrealistic hints. We fixed this by searching for all function and symbol definitions in the LLVM IR not present in the C standard library and renamed them to random strings. We also removed metadata at the start and end of the LLVM IR that would represent other information regarding the program, such as program names and descriptions (which also explicitly stated the vulnerability present in these files). Since our dataset also included some Windows-specific vulnerabilities, and to account for differences in the clang compiler between platforms, we included both in our preprocessing to generate our final dataset.

Shown below is function renaming code we wrote:

```python
# Rename programmer-defined functions (outside cstdlib)
defined_funcs = {}
for line in lines:
   funcs = re.findall(r"define.*?@(?!main\b)(.*?)\(", line)
   for i in funcs:
       if not i in defined_funcs:
           defined_funcs[i] = f"f{secrets.randbits(32)}"

   for old, new in defined_funcs.items():
       data = data.replace(old, new)

# Strip metadata and write
with open(join(wd, f), "w") as ir:
   data = "\n".join(data.split("\n")[5:-8])

   # Write changes
   ir.seek(0)
   ir.write(data)
```

## Tokenization  
To explore fine-tuning our own LLM for the task, we began with tokenization. The tokenizers of existing LLMs are not built to work with LLVM IR and using a tokenizer for natural language doesn’t transfer too well for machine languages. Therefore, we attempted to make our own. We made use of byte pair encoding and existing compilers’ tokenizers, but after setting up a tokenizer, we ran into a few issues. In deep learning NLP, models process text by first tokenizing it, and then turning the tokens into embeddings, vector representations of the tokens. This is done through an embedding layer, which has a dictionary that is tied to the tokenizer. Therefore, if the tokenizer is changed and gives tokens that are not in the dictionary to the original embedding layer, the embedding layer can’t properly parse the tokens.
This brought us to our next question: what if we made our own embedding layer as well? To do so, we would switch out the embedding layer with a new one, using randomly initialized embeddings. However, this would be problematic because all the layers after the embeddings layer were meant to be used with the old embeddings. As a result, fine-tuning the model would require first getting the new embedding layer trained, which is computationally expensive.

## Fine-tuning
Unfortunately, we did not get too far with fine-tuning the LLM model. We found a great resource on how to fine-tune an LLM for binary classification, and modified the code to train on our dataset correctly. However, training could not proceed without a tokenizer, and due to limitations in our schedule, there was not much time left after the tokenizer was ready. Perhaps with more time, we would be able to experiment with fine tuning the model and seeing whether the results would be serviceable or not. The direction we would pursue uses QLoRA to reduce the computation necessary by quantizing the model (into 4bit) and representing the weights as the product of smaller matrices. We would also train a new embedding layer for the tokenizer.

## Conclusion
LLMs were not the best choice for this problem. First, they are very difficult and computationally expensive to train. Second, they are not designed for this type of problem - they are meant to operate on natural languages, not abstract representations of low-level code. Third, LLMs are such an active area of research that strides are being made weekly, and it's difficult to keep up with new research. Finally, most models don’t have an input size sufficient for the intake of an entire LLVM IR program at once.
For an NLP approach to work, we would need to train our own tokenizer and embeddings, something that is perhaps beyond our computational power at the moment. Should we continue to tackle this problem, it would be prudent to explore other existing approaches to code analysis, perhaps even outside of NLP.
