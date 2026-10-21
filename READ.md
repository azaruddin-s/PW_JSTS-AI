# PW JSTS + AI

This repository contains study notes and runnable examples for JavaScript fundamentals, prompt engineering, and QA test planning.

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

### `02_Chapters+JS_Conditions_If and Switch Statement`

Examples for JavaScript conditional logic, including `if`/`else`, nested conditions, and `switch` statements.

### `03_Chapters_JS_User Inputs`

Examples of getting input with the browser's `prompt`, Node.js `readline`, the `prompt-sync` package, and `fs.readFileSync`. The root-level `Note for Windows PowerShell Users.md` includes guidance for PowerShell script execution policy issues.

### `04_Chapters_JS_for_while_do while`

Examples of `for`, `while`, and `do...while` loops, including conditional loops and `break`. One lesson demonstrates an intentionally infinite loop; avoid running it unless you are prepared to stop the process.

### `05_Coding_Practice`

Practice programs for FizzBuzz, grade calculation, and triangle classification.

### `06_Chapters_Arrays and Functions`

Examples covering array creation and destructuring, indexing, common array methods, searching, loops, and transforming arrays with `map`. The chapter also demonstrates sorting, combining arrays with `concat` and spread syntax, and the difference between assigning an array reference and making a shallow copy with spread or `slice()`.

## Running a JavaScript lesson

Install [Node.js](https://nodejs.org/) and run a lesson from the repository root. Examples that use `prompt-sync` require the project dependencies; install them once with:

```powershell
npm install
```

Then run a lesson in PowerShell from the repository root:

```powershell
node "01_Chapters_JS_Basics\008_Infinity_NaN_Literals.js"
node "02_Chapters+JS_Conditions_If and Switch Statement\001_If.js"
node "03_Chapters_JS_User Inputs\03_Prompt-sync.js"
node "04_Chapters_JS_for_while_do while\01_for loop.js"
node "05_Coding_Practice\01_FizzBuzz.js"
node "06_Chapters_Arrays and Functions\01_Arrays.js"
node "06_Chapters_Arrays and Functions\09_Array_Sorting.js"
node "06_Chapters_Arrays and Functions\10_Array_Concat_Spread.js"
node "06_Chapters_Arrays and Functions\11_Arrays_Mutable.js"
```

Each lesson is intended to run independently. Replace the filename with the lesson you want to try. Browser `prompt` examples need to be run in a browser; Node.js examples can be run with `node`. Input-based lessons may wait for you to enter input in the terminal.
