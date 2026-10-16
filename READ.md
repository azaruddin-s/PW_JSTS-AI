# PW JSTS + AI

This repository contains study notes and examples for JavaScript fundamentals, prompt engineering, and QA test planning.

## Repository contents

### `00_Chapters_PromptEngineering`

Prompt-engineering notes and QA planning resources, including:

- The RICE-POT prompt framework and a reusable QA prompt template.
- Guidance on reducing hallucinations and using Guide Mode or Direct Mode.
- An Amazon Web Portal test plan and its related planning materials.

### `01_Chapters_JS_Basics`

Numbered, standalone JavaScript examples covering topics such as:

- Variables, identifiers, comments, and primitive values.
- `typeof`, BigInt, Infinity, and NaN.
- Operators, equality, string concatenation, and nullish coalescing.

The scripts are organized in learning order. Open a lesson in this folder to review its examples and explanations.

### `02_Chapters+JS_Conditions_Loops`

Examples for JavaScript conditional logic, including `if`/`else`, nested conditions, and `switch` statements.

### `03_Chapters_JS_User Inputs`

Examples of getting input with the browser's `prompt`, Node.js `readline`, and the `prompt-sync` package. The folder also includes a note about running commands in Windows PowerShell.

## Running a JavaScript lesson

Install [Node.js](https://nodejs.org/) and run a lesson from the repository root. Examples that use `prompt-sync` require the project dependencies; install them once with:

```powershell
npm install
```

Then run a lesson in PowerShell:

```powershell
node "01_Chapters_JS_Basics\008_Infinity_NaN_Literals.js"
node "02_Chapters+JS_Conditions_Loops\001_If.js"
node "03_Chapters_JS_User Inputs\03_Prompt-sync.js"
```

Each lesson is intended to run independently. Replace the filename with the lesson you want to try. Browser `prompt` examples need to be run in a browser; Node.js examples can be run with `node`.
