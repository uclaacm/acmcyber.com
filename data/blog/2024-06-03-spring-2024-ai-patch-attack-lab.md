---
title: AI Patch Attack Lab Spring 2024
authors: [Asmi, Saiya, Pranav, Jason]
category: Projects
tags: [spring-2024, cyber-lab]
description: Creating a patch attack for a stop sign
---

# 🛑 ACM Cyber x AI: Patch Attacks 🛑
**By Asmi, Saiya, Pranav, and Jason**

Artificial Intelligence (AI) has revolutionized various sectors by leveraging sophisticated algorithms to make accurate predictions. Central to this capability is the concept of gradient descent, where an AI model refines its predictions by descending towards a local minimum on a loss landscape. Here, lower loss signifies better accuracy, as the model's predictions align more closely with the actual outcomes. However, a novel approach known as the Fast Gradient Sign Method (FGSM) flips this paradigm, moving in the opposite direction to increase the loss and thereby induce inaccuracies in the model's predictions.

## Understanding FGSM: A Noise-Based Attack
FGSM is a technique designed to deceive AI models by deliberately perturbing inputs to increase the model's prediction error. By moving against the gradient of the loss landscape, FGSM increases the loss value, leading to a higher likelihood of erroneous predictions. In essence, while traditional training aims to minimize loss (good), FGSM aims to maximize it (bad).

![fastlr](https://hackmd.io/_uploads/ByuYfvrVC.png)


## The Evolution to Patch Attacks
Building upon the FGSM framework, the concept of a Patch Attack introduces a more sophisticated method to exploit AI vulnerabilities. This process can be broken down into a series of strategic steps:

**Step 0: FGSM to Patch Attack**
Patch Attacks extend the FGSM methodology by focusing on specific areas within an image rather than perturbing the entire input. This localized approach allows for more targeted and efficient adversarial attacks.

**Step 1: Random Initialization of the Patch**
The first step involves the random initialization of a patch. This patch is a small region within the image that will be manipulated to deceive the AI model.

**Step 2: Random Placement of the Patch**
Next, the initialized patch is randomly placed on the image or sign. This randomness ensures that the attack is not easily predictable or detectable by simple defenses.

**Step 3: Training the Patch to Maximize Loss**
In this critical phase, the patch is trained to maximize the loss of the AI model. By optimizing the patch's characteristics (such as color, intensity, and position), the goal is to increase the prediction error of the model significantly.

**Step 4: Continuous Application on New Batches**
The trained patch is then applied to different regions of new image batches continuously. This iterative process ensures that the patch remains effective across various inputs, enhancing its robustness and reliability in causing prediction errors.

**Step 5: Applying the Patch**
Finally, the optimized patch is applied to images, effectively deceiving the AI model and causing it to make inaccurate predictions. This application demonstrates the practical impact of Patch Attacks, highlighting the need for improved defenses against such adversarial strategies.

Example patch generated: Patch trained so that sign will be read as a ‘Road Work’ sign

**Sample code:**

<br/>

![Screenshot 2024-05-29 at 6.47.43 PM](https://hackmd.io/_uploads/B1exfDBVA.png)

**Implications and Future Directions**
Patch Attacks, powered by the Fast Gradient Sign Method, underscore a significant challenge in the field of AI: ensuring robustness and accuracy in the face of adversarial manipulations. As AI systems become more integrated into critical applications, from autonomous driving to healthcare diagnostics, understanding and mitigating these vulnerabilities becomes paramount.

Researchers and practitioners must continue to innovate defensive mechanisms to counteract these sophisticated attack methods. By developing more resilient models and enhancing the detection of adversarial patches, the AI community can safeguard the integrity and reliability of AI-driven decisions.

In conclusion, the evolution from FGSM to Patch Attacks represents a fascinating and critical area of study within AI. By delving into these adversarial techniques, we not only uncover potential vulnerabilities but also pave the way for more robust and secure AI systems in the future.
