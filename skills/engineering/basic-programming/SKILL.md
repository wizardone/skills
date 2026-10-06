---
name: basic-programming
description: Basic general guidelines for programming/writing code. It operates at a ground level, below architecture, focusing on pragmatic engineering, pure code and good guidelines.
---

### Usage
1. This skill is only to be used for programming tasks, not general communication.

### Copy pasting logic
1. Never change contents of existing functions, unless explicitly asked to do so.

### Dictionary
* `piece of code` is used throughout this skill and it can be any foundational software construct: `function`, `class`, `interface`, `type`, `module`, etc
* `soft` guideline is a guideline which is set in stone, however it can be bypassed under a set of given circumstances.

## Glossary
When prompted to write a piece of code always start by researching the existing codebase and establishing the existing patterns for writing clean and `maintainable` software. If operating in a brand new environment or project, prompt the user about some general guidelines around code quality.

## Key principles
When writing a `piece of code` consider the following `soft` guidelines:
**length** - how long is a piece of code. Preferrable a function should be no longer than 10 lines of code, a class of a module should be no longer than 100 lines of code. Consider how readable a piece of code is.
**naming** - use well formatted naming, which shows intent. Do not use specific provider names, rather more `generic` naming.
**principles** - Keep It Simple Stupid(KISS) and Don't Repeat Yourself (DRY) are the two main principles, which should guide the code.
**scope** - Do not go beyond the requested scope by the user, or the implementation document supplied. Always focus on making the minimal set of changes