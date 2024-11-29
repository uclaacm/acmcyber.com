---
title: Fuzzing Lab
authors: [Alex Zhang, Benson Liu, Enzo Saracen, Isaac Khabra, Alex Acosta-You, Nikhil Jadav, Alyssa Wong, Katie Min, Maya Zuo-Yu, Nathan Cheng, Kevin Wong, Hanson Zhao, Melissa Guo, Yashica Prasad, Kyle Pak, Justin Lui, Ki Riley]
category: Projects
tags: [fall-2024, cyber-lab, fuzzing]
description: Secure sqlite library for developers to use
---

# Target: jsonxx
![image](/images/blog/2024-12-03-fall-2024-fuzzing-lab/BJvmOXnfke.png)
**Members:** Isaac Khabra, Alex Acosta-You, Nikhil Jadav

## Background
[jsonxx](https://github.com/hjiang/jsonxx) is a library that parses JSON and XML. It's contained in just two files (one header and one C++ file), so we didn't have any issues building it; the build process was extremely simple (just had to call `make`). Initially, we used a really basic seed corpus with just one file as a proof of concept, but we used examples from Adobe and produced by [ChatGPT](https://chat.openai.com) to build a bigger seed corpus when we were actually seriously looking for crashes. We targeted the `Object::parse()` function initially, and later switched to functinos that called a lot of other functions in the library. The harness was extremely simple to write because it's easy to just create `jsonxx::` objects and call the various functions on them. 

## Results
No crashes were found after executing millions of iterations. We decided to target different functions that were not being called at all after looking at the coverage reports, but these functions also did not crash after millions of iterations. For example, we switched to the xml functions, the .json function for some of the different classes (like Object, Array, and Value), and also output operations. Testing every function at the same time led to each iteration timing out, so we had to split them across different tests, which explains why there are so many commented out calls.


```cpp
#include <cstdint>
#include <string>
#include <iostream>
#include "jsonxx.h"

extern "C" int LLVMFuzzerTestOneInput(const std::uint8_t *data, const std::size_t size)
{
    std::string str((const char*)data, size);
    
    jsonxx::Array a;
    jsonxx:: Value v(str);
    jsonxx::Object o(str, v);
    //jsonxx::Value v;
    o.parse(str);
    a.parse(str);
    //v.parse(str);
    //std::cout << o.json();
    //std::cout << a.json();
    std::cout << o;
    std::cout << a;
    std::cout << v;
    //jsonxx::reformat(str);
    o.xml();
    a.xml();
    //jsonxx::escape_string(str);
    //jsonxx::stream_string(std::cout, str);
    //jsonxx::anon::json::tag();

    return 0;
}
```

```json
// Example of seed corpus file
{
  "a": {
    "b": {
      "c": {
        "d": {
          "e": {
            "f": {
              "g": {
                "h": {
                  "i": {
                    "j": {
                      "k": {}
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```



# Project: TinyXML-2
*Alyssa Wong, Katie Min, Maya Zuo-Yu*
[TinyXML-2](https://github.com/leethomason/tinyxml2) is a lightweight, open source parser for XML. We fuzzed the specific function [`Parse()`](https://leethomason.github.io/tinyxml2/_example_2.html), which parses an XML for a character pointer and checks for an error. We chose `Parse()` because it's supposed to take input, making it a starting point for fuzzing. 
![Screenshot 2024-11-20 191129](/images/blog/2024-12-03-fall-2024-fuzzing-lab/BkCeSQnG1x.png)
There were some issues with building it, but they were fixed by editing the prefix in the Makefile from /usr/local to /projects/ctoml/install. (We'd originally decided to fuzz ctoml, a parser for Tom's Obvious, Minimal Language, but ran into unresolvable build issues, leading us to switch to TinyXML-2.) The seed corpus was built with XML files randomly selected from [an online corpus](https://github.com/strongcourage/fuzzing-corpus). 

![](/images/blog/2024-12-03-fall-2024-fuzzing-lab/BJe_rX2fke.png)

Example of a XML file in our seed corpus 
We performed coverage-guided fuzzing via writing a harness with Honggfuzz.

```cpp
#include <cstdint>
#include <string>
#include <tinyxml2.h>

extern "C" int LLVMFuzzerTestOneInput(const std::uint8_t *data, std::size_t size) {
   std::string str((const char *)data, size);
   static const char* p = str.c_str();
   tinyxml2::XMLDocument doc;
   doc.Parse( p );
   return 0;
}
```
Coverage analysis was done based off the previous projects in the lab, with a notable exception being the need to switch between C and C++ as our harness was written in C++ but the executor was in C. `-x c` was used to set the language to C for the executor, and `-x c++` was used to return to C++ to execute the source file tinyxml2.cpp. While we did not find any crashes, we were able to increase our coverage to 14%, with a few timeouts.



# Project: PoDoFo
**Members:** Nathan Cheng, Kevin Wong, <strike>Emilia Yuja</strike>

## About PoDoFo
[PoDoFo](https://github.com/podofo/podofo) is an open-source C++17 library to manipulate PDF files. It allows PDF files to be edited, read from, and signed.

![PoDoFo](/images/blog/2024-12-03-fall-2024-fuzzing-lab/Sy6U1NnM1e.png)

We fuzzed a set of functions from the library, including `LoadFromBuffer()`, `ExtractTextTo()`, and a variety of `Get*()` functions (for getting the properties and contents of a PDF file). 

## Methodology
We decided to do coverage-driven fuzzing with Honggfuzz on functions that perform parsing, data extraction and manipulation on PDF files. Honggfuzz is invoked as `honggfuzz -i seed -o corpus -w pdf.dict -t 5 -P -T -- ./harness`. This sets the timeout to 5 seconds and treats any timeout as a crash.

Our seed is composed of 11 PDF files, including a catalog, an essay, and an invoice, among other things. These files were selected from a web search for example PDFs, and we made sure to include PDF files with different kinds of content (text, images, etc.).

We targeted certain functions by reading their header files and associated implementation. We did this because a lot of functions and classes in the library are poorly documented, as described in the next section.

We used a shell script to compile the harness, which accelerated harness development. We used 2 compilers to compile the library itself: `hfuzz-clang++` for fuzzing and `clang++` for coverage analysis. The harness itself is written in C++ and statically linked with the PoDoFo library.

Among the fuzzed functions, `ExtractTextTo()` is particularly interesting because it does a lot of parsing and manipulation on the PDF structure to extract the text from a page, much like the `pdftotext` command-line utility.

## Problems
PoDoFo has a [Doxygen documentation page](https://podofo.github.io/podofo/documentation/). Unfortunately, the auto-generated documentation was extremely un-detailed and often missing, so it was difficult to find interesting functions to fuzz. We resorted to examining header and source files in order to identify target functions of interest.

Our initial harness was also very incomplete, with its coverage plateauing at 4% (see image) before we improved the coverage to 20% by incorporating more function calls. We wanted to improve the coverage even more, but the complexity of the PDF format and the library meant that it was difficult to reach all available functions in the library.

![Output](/images/blog/2024-12-03-fall-2024-fuzzing-lab/H1-ehX2Mkx.jpg)

## ???
After a bit of fuzzing, we got a timeout from a test case that ran for longer than 5 seconds. While investigating the timeout, we reduced our harness code (ran with the executor instead of the fuzzer) to the following:

```cpp
extern "C" int LLVMFuzzerTestOneInput(uint8_t* data, size_t size)
{
    try {
        PdfMemDocument doc;
        doc.LoadFromBuffer(bufferview { reinterpret_cast<const char*>(data), size });

        for (auto* field : doc.GetFieldsIterator())
            printf("Field %p\n", field);

        auto p = doc.GetPages();
        printf("%u pages\n", p.GetCount());

        for (auto* page : doc.GetPages()) {
            printf("Extracting page %u\n", page->GetPageNumber());
            std::vector<PdfTextEntry> entries;
            page->ExtractTextTo(entries);
        }
        puts("Done");
    } catch (const PdfError& e) {
        printf("ERROR: %s\n", e.what());
    }

    return 0;
}
```

This code looks innocent, but we were surprised when we tried to run it against the test case.

```
1 pages
Extracting page 1
free(): double free detected in tcache 2
Aborted
```

Turns out that this "double free" occurs even if we run it on perfectly valid PDF files. Curiously, when we replaced this
```cpp
// (1)
auto p = doc.GetPages();
printf("%u pages\n", p.GetCount());
```
with this,
```cpp
// (2)
printf("%u pages\n", doc.GetPages().GetCount());
```
the program no longer aborts. When we removed this for loop,
```cpp
for (auto* field : doc.GetFieldsIterator())
    printf("Field %p\n", field);
```
the crash disappeared as well. In this case, we also noticed that no extraction actually occurs with `(1)` (the second for loop is never entered), but the extraction works correctly with `(2)`. So what is going on here?

Turns out that `PdfDocument::GetPages()` returns `PdfPageCollection&`, and by using `auto p` instead of `auto& p`, we accidentally created a **copy** of `PdfPageCollection`, which will have very interesting consequences.

But first, we need to learn more about how `PdfPageCollection` works. Every `PdfPageCollection` object starts off as "uninitialized", where its internal page list is empty. Functions such as `PdfDocument::GetFieldsIterator()` and `PdfPageCollection::GetCount()` initialize these objects, causing their page list to be populated. This explains why we could not iterate over the pages if we call `GetCount()` on `p`, because we are initializing our copy of `PdfPageCollection` instead of the one owned by `PdfDocument`. Looking into how `PdfDocument::GetPages()` is implemented, we noticed that it simply returns `*m_Pages`, which gets a reference out of a `std::unique_ptr<PdfPageCollection>`!

## Results
We did not encounter any crashes of interest, but there were a handful of timeouts. We are looking into them as of the writing of this report.

## Coverage
We reached a maximum coverage of 20% as of the writing of this sentence. This came after some improvements to the harness, which at one point stalled at 4% coverage.



# Target: libfyaml
**Members:** Hanson Zhao, Melissa Guo, Yashica Prasad

 At the moment, we are still working on implementing coverage analysis for our fuzzer, so We're just going to talk about what libfyaml is and what our harness does.


So...


![Screenshot_2024-11-20_at_6.51.43_PM](/images/blog/2024-12-03-fall-2024-fuzzing-lab/Hyix0mhzye.png)




From the library's README, we see that libfyaml is "a fancy 1.2 YAML and JSON parser/writer". One week into the project, we came to the unfortunate realization that we did not know what a yaml was. Some quick googling gave us "... data serialization language ... commonly used in configuration files". After deeper look at the example usages in the README and looking through the repository, we decided to fuzz the `fy_document_build_from_string` function.
We needed a seed corpus of yaml files to use as a seed corpus and used the [yaml-test-suite](https://github.com/yaml/yaml-test-suite) that we found on GitHub. A harness file is used to take inputs from the fuzzing tool and calls the specific functionality or module being tested using the prepared input. Our harness begins by allocating a buffer which the input bytes are copied into using strncpy, ensuring it is properly null-terminated. The function then attempts to parse the buffer as a YAML document using `fy_document_build_from_string` . If the parsing is successful, the resulting document is destroyed to free resources. Finally, the allocated buffer is freed, and the function returns 0, indicating successful execution. This setup allows the fuzzer to systematically test different input scenarios to identify potential vulnerabilities or bugs in the YAML parsing process. While fuzzing, we encountered an unusually large amount of timeouts, solved by allowing longer time limits.
We have not found any crashes so far, but hopefully we can improve coverage analysis in next few days.

![Screenshot_2024-11-20_at_7.00.57_PM](/images/blog/2024-12-03-fall-2024-fuzzing-lab/rk4R67hz1e.png)



# Project: LibRaw
By Kyle Pak

## About LibRaw
[LibRaw](https://www.libraw.org/) is a library that extracts data from RAW files generated by digital cameras. It has multiple parsers which makes it perfect to fuzz. 

## The Methodology 
One of the parsers of LibRaw is a CR3 parser. CR3 is a RAW file format used by Canon Cameras. parseCR3 was fuzzed with a Honggfuzz harness. 

![LibRawparseCR3](/images/blog/2024-12-03-fall-2024-fuzzing-lab/HJuiJVnzkl.png)

## Results
The result was a stack buffer overflow. It was eventually patched. 

![LibRaw 0.21.3 changes](/images/blog/2024-12-03-fall-2024-fuzzing-lab/rJ0aJ4nfyl.png)

# Project: yaml-cpp
**Members :** Justin Lui, Ki Riley

### A Quick Note
A quick disclaimer about yaml-cpp: despite being released in 2018 and being older than the latest release by two versions, yaml-cpp 0.6.0 is still the top link underneath 'Recent Releases' on the yaml-cpp GitHub page. Our group did not realize this until later; the following documentation will therefore discuss the results of fuzzing both yaml-cpp 0.6.0 and the latest release, yaml-cpp 0.8.0.

![Screenshot 2024-11-20 215548](/images/blog/2024-12-03-fall-2024-fuzzing-lab/rkBqjr3z1x.png)

## YAML Parser — Fuzzing Target
Written in C++, yaml-cpp is a YAML (1.2) parser and emitter. We chose to fuzz the `YAML::Load()` function which took a string as input for parsing rather than the outdated parsing method of using `YAML::Parser`. For the corpus, we created our own set of YAML files and also used the [yaml-test-suite](https://github.com/yaml/yaml-test-suite). 

## Harness(es)
We used two different harnesses during fuzzing since we worked independently on this section of the project. Both of them are detailed below:
```cpp
#include <cstdint>
#include <string>
#include <cstdlib>
#include <fstream>
#include <yaml-cpp/yaml.h>

extern "C" int LLVMFuzzerTestOneInput(const std::uint8_t *data, std::size_t size)
{
    std::string str((const char *)data, size);
    try
    {
        YAML::Node node = YAML::Load(str);
    }
    catch(const YAML::ParserException& e) {}

    return 0;
}
```

```cpp
#include <yaml-cpp/yaml.h>
#include <string>
#include <iostream>

extern "C" int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {
    // Reject inputs that are too large
    if (size > 8192) return -1;

    try {
        // Convert input to string
        std::string yaml_input(reinterpret_cast<const char *>(data), size);

        // Parse YAML
        YAML::Node node = YAML::Load(yaml_input);

        // Traverse YAML to test deeper paths
        auto traverseNode = [](const YAML::Node &n) {
            if (n.IsMap()) {
                for (auto it = n.begin(); it != n.end(); ++it) {
                    // Recurse into values
                    it->second;
                }
            } else if (n.IsSequence()) {
                for (auto it = n.begin(); it != n.end(); ++it) {
                    // Recurse into items
                    *it;
                }
            } else if (n.IsScalar()) {
                // Access scalar value
                std::string value = n.as<std::string>();
            }
        };
        traverseNode(node);

        // Emit YAML back to a string
        YAML::Emitter emitter;
        emitter << node;

    } catch (const YAML::Exception &e) {
    } catch (...) {
    }

    return 0;
}
```

## Difficulties
The `YAML::Load` function throws a `ParserException` which we had to catch in our harness; prior to this, we were getting a large amount of supposed "bugs." Analyzing the SIGABRT files, we were able to triangulate the cause and remedy this by catching the exception.

## Results

In our original testing, we found a potential bug in yaml-cpp-0.6.0; this would've been fixed in yaml-cpp-0.8.0 considering how fuzzing yielded no crashes on the most recent release.
