---
title: Secure SQLite Lab 2024
authors: [Alex Zhang, Ronak Badhe, Simon Koski, Ryan Chang, Renuka Bhusari]
category: Projects
tags: [winter-2024, cyber-lab]
description: Secure library for developers to use
---

# Finding Vulnerabilities in Open-Source Software with Fuzzing

In this quarter's Fuzzing Lab workshop, our members learned to use the powerful technique of fuzzing to discover software vulnerabilities. We spent the first few weeks covering fundamental topics such as compiling targets, writing harnesses, and running [Honggfuzz](https://honggfuzz.dev/). To practice these skills, we fuzzed old versions of some software and rediscovered known vulnerabilities. After that, we moved on to finding new vulnerabilities in open-source projects, focusing on parsers for various file formats that haven't already been fuzzed. You can read about some of our results in the following sections written by our members.

## libwbxml

This library parses WBXML files, a binary representation of XML, and converts them back to XML. They are used to compact XML files and reduce bandwidth in mobile communications. For example, it is used to send settings, calendar information, address books, notes, and instant messages.

While the library runs tests by converting XML files to WBXML and then converting them back, I only fuzzed the wbxml2xml (WBXML => XML) portion. This made WBXML test files difficult to find, but Alex Zhang found some files to test from https://github.com/dalgleish/wbxml. The harness creates a new parser, and then runs `wbxml_parser_parse` on the data from the file.

Another issue we ran into was the harness being dynamically linked to libwbxml, but the linker not being configured to find the library in the non-standard directory. We solved this by adding additional flags to our build commands so that the library is linked statically.

In the end, we found two unique vulnerabilities that lead to crashes & cannot be disclosed yet since they haven't been fixed.

## NanoSVG

This library parses SVG (Scalable Vector Graphics) files and turns them into a list of cubic bezier shapes which then can be drawn.

Though the function usually takes in an `.svg` file to parse, I directly called the function (`nvsgParse`) which the function that takes in an `.svg` file calls. I then took the sample provided `.svg` files in the Github to then use as samples for the fuzzer to build data upon.

Due to the nature of the library being one single header file, there were no difficulties in running and compiling the fuzzer with the harness.

Through over 1 billion inputs and over 80% coverage of the inputs, there were no crashes detected, indicating that it is unlikely that there is a bug within the code (at least within the function that was tested).


## cxml

This library is an parser for XML written in C. We were not actually able to fuzz this library as it contained a couple of compiler errors.

The most notable of these errors was a use after free error in the code where a lexer was freed and then used by a function a couple of lines later in the code. There was also an unsigned char error which was easily fixed by explicitly casting the variable to signed. This might be due to differences in whether signed is the default on the server we used.

After fixing these two issues on our end, we still ran into unresolved linker errors when building.

I decided to contact the author of the library directly to ask a couple of questions about the errors we received, and he was actually unaware of the use after free error in his code. He also stated that our linker errors may be because of the server we used, however, we did try to compile the code on an x86 machine and ran into the same errors.
