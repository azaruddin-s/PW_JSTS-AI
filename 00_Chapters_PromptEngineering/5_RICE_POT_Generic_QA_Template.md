# Generic RICE POT Template for QA

Use this prompt template for general QA tasks, test plans, test cases, and automation. Replace the editable fields, select one task profile, and keep the workflow that fits your request.

RICE POT means **Role, Instructions, Context, Example, Parameters, Output, and Tone**.

## 1. How to use this template

1. Choose a task: General QA Task, Test Plan, Test Cases, or Automation.
2. Copy the master prompt in Section 3.
3. Replace every `{{PLACEHOLDER}}` with your information. Use `Not provided` for missing inputs so the assistant can identify gaps.
4. Copy one profile from Section 4 into `{{TASK_SPECIFIC_INSTRUCTIONS}}` and `{{OUTPUT_SCHEMA}}`.
5. Supply requirements, acceptance criteria, screenshots, or relevant source excerpts under Context. A link identifies a source; it does not establish that the source has been read.
6. Use Guided mode to receive a plan, answer questions one at a time, approve the plan, and review each major step.
7. Review the final deliverable against Section 6 before using it.

The examples in Section 5 show how to fill the fields. They are prompt examples, not executed tests or verified application behavior.

## 2. What each section controls

| Section | Purpose | What to provide |
| --- | --- | --- |
| R — Role | Establish relevant expertise | QA role, experience, domain, and specialization |
| I — Instructions | Define the work and its rules | Task, scope, required practices, restrictions, and workflow |
| C — Context | Supply the facts needed to work | Application, requirements, environment, data, and known gaps |
| E — Example | Demonstrate the desired structure | A sample case, plan outline, bug report, or code pattern |
| P — Parameters | Set measurable boundaries | Counts, coverage, tools, versions, priorities, and review settings |
| O — Output | Specify the exact deliverable | Fields, files, format, ordering, and permitted explanations |
| T — Tone | Set the writing style | Technical, concise, precise, and suitable for the audience |

## 3. Copy-ready master prompt

```text
R — ROLE

You are a {{QA_ROLE}} with {{EXPERIENCE}} of experience in {{DOMAIN}}.
Your specialization is {{SPECIALIZATION}}.
Apply this expertise to {{TASK_TYPE}} for {{APPLICATION_NAME}}.
Produce work that is maintainable, reviewable, and appropriate to the supplied requirements.

I — INSTRUCTIONS

Objective:
{{TASK_OBJECTIVE}}

Task-specific instructions:
{{TASK_SPECIFIC_INSTRUCTIONS}}

Shared quality rules:
1. Follow the supplied requirements, acceptance criteria, scope, and output contract.
2. Separate confirmed facts, proposed assumptions, and unresolved questions.
3. Do not invent business rules, credentials, API behavior, UI locators, error messages, test results, or requirement IDs from an external system.
4. Reference supplied requirement IDs. If none exist, propose local IDs and identify them as locally assigned.
5. Include positive, negative, and edge scenarios where applicable and within the agreed scope. Respect exact counts; identify uncovered areas when a count limits coverage.
6. Make steps reproducible and expected results observable. Avoid vague checks such as "verify it works."
7. Use synthetic or approved test data. Represent secrets through environment variables or an approved secret mechanism.
8. Distinguish generated, reviewed, compiled, and executed work. Do not report a pass or production readiness without supporting verification.
9. Resolve conflicting requirements before generation. Explain the conflict and ask one focused question instead of silently choosing a different scope.
10. Keep unrelated features and unnecessary framework complexity outside scope.

Step-by-step workflow:
1. Understand: restate the goal, supplied facts, scope, missing inputs, and proposed assumptions.
2. Plan: show exactly what you will create, including sections or filenames, coverage, dependencies, and the checks you will perform.
3. Clarify: ask one focused question at a time when an answer materially affects correctness. If a required answer is unavailable, explain the affected part and ask whether to proceed with an explicitly stated assumption or placeholder.
4. Review: update the plan after clarification. When plan approval is Required, ask for explicit approval and wait before generating the deliverable. Reuse approval already given for an unchanged plan.
5. Create: complete the approved work in clear steps. Before each major step, briefly explain what you will do and why. Follow the selected checkpoint setting.
6. Verify: check requirement coverage, consistency, constraints, output structure, and any applicable code/build checks. Report only checks actually performed.
7. Deliver: return the requested artifact and accurately identify material unresolved items. Follow the final output contract.

Guided mode follows all seven steps. Direct mode proceeds using supplied inputs and labeled assumptions; do not guess facts needed for correctness. Use Direct mode only when I explicitly select it and set plan approval to Not required.

C — CONTEXT

Application or system: {{APPLICATION_NAME}}
Feature or module: {{FEATURE_NAME}}
Business domain: {{DOMAIN}}
Environment and URL: {{ENVIRONMENT_AND_URL}}
Users and roles: {{USER_ROLES}}

Requirements and acceptance criteria:
{{REQUIREMENTS_AND_ACCEPTANCE_CRITERIA}}

Available inputs, documents, screenshots, or source excerpts:
{{SOURCE_MATERIAL}}

Available test data and account prerequisites:
{{TEST_DATA_AND_PREREQUISITES}}

Known limitations, dependencies, and missing information:
{{KNOWN_GAPS_AND_DEPENDENCIES}}

E — EXAMPLE

Use this example to understand the expected structure and detail:
{{REFERENCE_EXAMPLE}}

Follow the example's format where appropriate. Confirm its business behavior against the supplied requirements; an example does not prove that the application behaves that way.

P — PARAMETERS

Task type: {{TASK_TYPE}}
In scope: {{IN_SCOPE}}
Out of scope: {{OUT_OF_SCOPE}}
Required coverage: {{COVERAGE}}
Exact counts or size limits: {{COUNTS_AND_LIMITS}}
Tools, language, framework, and versions: {{TECHNOLOGY_STACK}}
Browsers, devices, operating systems, or execution targets: {{TARGET_PLATFORMS}}
Quality or acceptance thresholds: {{QUALITY_CRITERIA}}
Mandatory practices: {{MANDATORY_PRACTICES}}
Prohibited practices: {{PROHIBITED_PRACTICES}}

Workflow mode: Guided
Plan approval: Required
Execution checkpoints: Each major step

At each checkpoint, show the completed part, explain the next step, and ask whether to continue. Wait for my answer. If I explicitly authorize continuous execution, continue under that authorization without asking again for unchanged work.

O — OUTPUT

Deliverables: {{DELIVERABLES}}
Format: {{OUTPUT_FORMAT}}
Required structure or fields:
{{OUTPUT_SCHEMA}}

Final explanation level: {{FINAL_EXPLANATION_LEVEL}}

Planning messages, clarification questions, and step updates occur before the final deliverable. If the final output must contain only code, tables, or files, keep those explanations outside the final artifact. Resolve blocking gaps before delivering under that restriction.

T — TONE

Technical, precise, concise, and professional.
Use consistent terminology and concrete wording for {{TARGET_AUDIENCE}}.
Explain decisions in plain language during the guided workflow.
Avoid unsupported claims such as "100% coverage," "zero defects," or "production ready" without evidence.
```

### Suggested starting values

| Field | Suggested value |
| --- | --- |
| QA role | Senior QA Engineer, Test Lead, or QA Automation Engineer |
| Experience | 15+ years |
| Workflow mode | Guided |
| Plan approval | Required |
| Execution checkpoints | Each major step |
| Final explanation level | Brief notes for documents; artifact only when required |
| Unavailable information | Not provided |

For faster work, explicitly select `Direct`, set plan approval to `Not required`, and set execution checkpoints to `None`. For a single review before execution, keep `Guided` and `Required`, then set execution checkpoints to `After plan only`.

## 4. Select one task profile

Paste the selected profile's Instructions into `{{TASK_SPECIFIC_INSTRUCTIONS}}` and its Output structure into `{{OUTPUT_SCHEMA}}`. Set the matching deliverables and parameters in the master prompt.

### Profile A — General QA task

**Use for:** requirement analysis, bug reports, QA reviews, root cause analysis, risk assessment, or another defined QA activity.

**Instructions**

```text
1. Identify the specific QA activity and the decision or artifact it should support.
2. Use only supplied or inspected evidence for factual findings.
3. Reference relevant requirements, logs, screenshots, or observations.
4. Identify missing evidence and actionable next steps.
5. For a bug report, keep expected behavior separate from observed behavior. If reproduction has not been performed, state that explicitly. Mark severity and priority as proposed unless confirmed.
6. For root cause analysis, separate confirmed causes from hypotheses and identify how to verify each hypothesis.
7. Follow the agreed schema for the selected activity. Ask for the schema if it materially affects delivery and has not been supplied.
```

**Output structure**

```text
Task title
Objective and scope
Source evidence or requirements
Findings or requested QA artifact
Risks and impact
Assumptions and unresolved questions
Recommended actions
Validation performed and remaining checks

For a bug report, use:
Bug ID | Title | Environment | Preconditions | Test Data |
Steps to Reproduce | Expected Result | Actual Result |
Evidence | Severity | Priority | Reproduction Status
```

### Profile B — Test plan

**Instructions**

```text
1. Create a test plan aligned with the supplied requirements and business risks.
2. Define objectives, scope, exclusions, approach, test levels, and applicable test types.
3. Cover functional, integration, regression, and nonfunctional testing only where relevant and supported by scope.
4. Define environment, test data, access, tooling, dependencies, and responsibilities. Mark unavailable inputs as Not provided or proposed.
5. Map requirements and risks to planned coverage.
6. Define measurable entry and exit criteria. Treat unspecified thresholds, timelines, workloads, and ownership as proposals requiring agreement.
7. Define defect reporting, triage, reporting cadence, suspension/resumption criteria, and deliverables.
8. Do not claim that planned tests have been executed.
```

**Output structure**

```text
1. Test Plan ID and Title
2. Objective and References
3. In Scope and Out of Scope
4. Requirements and Planned Coverage
5. Test Approach, Levels, and Types
6. Environment, Tools, Access, and Test Data
7. Entry and Exit Criteria
8. Roles, Responsibilities, Estimates, and Schedule
9. Defect Management and Reporting
10. Risks, Dependencies, Assumptions, and Open Questions
11. Suspension and Resumption Criteria
12. Test Deliverables and Approval
```

### Profile C — Test cases

**Instructions**

```text
1. Generate the requested number of test cases for the approved feature and scope.
2. Cover agreed happy paths, negative scenarios, boundary values, and edge cases without duplicate cases.
3. Give each case a unique local Test ID and link it to a supplied or explicitly assigned local requirement ID.
4. Specify relevant preconditions, concrete synthetic test data, numbered actions, and observable expected results.
5. Keep each case independently executable, or clearly document dependencies and reset requirements.
6. Use the requested priority convention; mark priorities as proposed when not supplied.
7. Do not invent exact error text or undocumented outcomes. Ask for blocking acceptance criteria; label agreed assumptions.
8. Set Actual Result to Not executed and Execution Status to Not Run unless execution evidence is supplied.
9. Use the requested Jira or test-management schema. Follow any supplied import specification exactly.
```

**Output structure**

```text
Test ID | Requirement ID | Title | Description | Scenario Type |
Priority | Preconditions | Test Data | Steps | Expected Result |
Actual Result | Execution Status

If a minimal Jira format is explicitly requested, use only:
Test ID | Description | Steps | Expected Result
```

### Profile D — Automation

**Instructions**

```text
1. Generate code for the selected stack, approved scenarios, and exact artifact counts.
2. Confirm selectors, expected outcomes, environment prerequisites, and dependency versions from supplied evidence or accessible primary sources. Identify anything unverified.
3. Use reusable page or component actions, meaningful assertions, clear naming, isolated tests, and deterministic setup/teardown.
4. Keep credentials and environment configuration outside source code. Provide placeholder configuration without secrets.
5. Use condition-based synchronization. Do not use fixed sleeps, mix implicit and explicit waits, or hide failures through unconditional retries.
6. Handle recoverable failures narrowly. Add useful context and propagate unrecoverable errors; never swallow exceptions, log secrets, or convert assertion failures into passing tests.
7. Include the minimum build, runner, lifecycle, and configuration files required by the requested project. Supporting files do not change the requested test or page-object count.
8. Review the code against the requested conventions and perform available build checks. Clearly identify prerequisites and unperformed execution checks.
```

**Output structure**

```text
Project structure
Each requested source file with its path
Required build and runner configuration
Non-secret configuration example
Run command and validation status, when permitted by the final output contract
```

**Optional Selenium + Java rules from the source prompt**

Apply these only when Selenium + Java is the selected stack:

- Use Maven and TestNG with versions selected for the target environment.
- Use Page Object Model with PageFactory, `@FindBy(xpath = "...")`, constructor initialization through `PageFactory.initElements`, and reusable page actions.
- Use XPath for element location. Do not add CSS locators or silently substitute another locator strategy.
- Use `WebDriverWait` for relevant conditions; do not use `Thread.sleep()`.
- Use `@Test` and appropriate lifecycle annotations. Where `@BeforeTest` is required, use it for configuration at the TestNG `<test>` level; use isolated setup/cleanup appropriate to each test, such as `@BeforeMethod` and `@AfterMethod(alwaysRun = true)`.
- Keep driver ownership clear and ensure cleanup runs after failures. Avoid shared mutable drivers when parallel execution is enabled.
- In page objects and test/support code, use targeted try–catch handling or explicit exception propagation as appropriate. Rethrow with context when catching; do not add catch-all blocks merely to satisfy a format rule.
- Omit source-code comments if requested. Use descriptive names and small methods to preserve readability.
- If exactly two tests are requested, restrict the coverage claim to those two selected scenarios. Record broader UI coverage as outside the generated scope.

## 5. Filled examples

These examples provide values for the master prompt. Keep its shared quality rules and guided workflow when applying them. The CRM Portal requirements below are illustrative teaching inputs.

### Example A — Login test plan

```text
R — ROLE
Senior QA Lead with 15+ years of experience in CRM applications and test strategy.

I — INSTRUCTIONS
Create a login test plan for CRM Portal using Profile B.
Show the plan first, ask one question at a time, obtain plan approval, and explain each major step.
Map coverage to the sample requirements. Propose measurable entry/exit criteria for review.

C — CONTEXT
Application: CRM Portal, a fictional training application.
Feature: Email/password authentication and logout.
Sample requirements:
REQ-01: An active account with valid credentials can sign in.
REQ-02: An incorrect password does not authenticate the user.
REQ-03: Empty required fields prevent authentication.
REQ-04: Logout ends the authenticated session and prevents access to protected content.
Environment, test accounts, browsers, performance targets, and exact error messages: Not provided.

E — EXAMPLE
Coverage row:
REQ-02 | Incorrect password | Negative functional testing |
User remains unauthenticated | Approved synthetic account

P — PARAMETERS
Task: Test Plan.
In scope: REQ-01 through REQ-04, functional login/logout testing and regression.
Out of scope: SSO, MFA, account registration, performance and penetration testing.
Deliverable count: One test plan.
Workflow: Guided; plan approval Required; checkpoints Each major step.

O — OUTPUT
One Markdown test plan using Profile B's sections, with a requirement coverage table.
Keep proposed thresholds and missing prerequisites explicit.

T — TONE
Technical, precise, readable by QA engineers, developers, and product owners.
```

### Example B — Five login test cases

```text
R — ROLE
Senior QA Engineer with 15+ years of experience in functional and negative testing.

I — INSTRUCTIONS
Create exactly five email/password login test cases using Profile C.
Show the plan first, ask one question at a time, obtain approval, and explain the steps.
Generate one case for each sample requirement below. Do not execute the cases.

C — CONTEXT
Application: CRM Portal, a fictional training application.
Sample requirements:
REQ-01: An active account with valid credentials can sign in.
REQ-02: A malformed email is rejected and no session is created.
REQ-03: An incorrect password is rejected and no session is created.
REQ-04: Submitting both fields empty does not authenticate the user.
REQ-05: SQL-like credential input does not bypass authentication.
Exact error messages, environment URL, and provisioned test credentials: Not provided.
Use synthetic input for negative cases. Request a provisioned account prerequisite for the valid case.

E — EXAMPLE
Test ID: TC-LOGIN-001
Description: Verify login with valid credentials for an active account.
Steps: Open login; enter provisioned credentials; submit; inspect authenticated state.
Expected Result: The account is authenticated and protected content is accessible.

P — PARAMETERS
Task: Test Cases.
Count: Exactly five.
Coverage: Valid login, malformed email, incorrect password, both fields empty, SQL-like input.
Scope: Test design only; SQL-like input is an authentication denial case, not proof of complete SQL injection protection.
Workflow: Guided; plan approval Required; checkpoints Each major step.

O — OUTPUT
One Markdown table in the requested minimal Jira format:
Test ID | Description | Steps | Expected Result.
Do not include fabricated execution results. Resolve blocking details before the final table.

T — TONE
Technical, concise, and reproducible.
```

### Example C — Selenium + Java login automation

```text
R — ROLE
QA Automation Engineer with 15+ years of experience in Java, Selenium, TestNG, Maven, and CRM applications.

I — INSTRUCTIONS
Generate a maintainable Maven project for two Salesforce login scenarios.
Use Profile D and its optional Selenium + Java rules.
Generate exactly one page object and two TestNG test scripts, with one @Test method per script.
Use PageFactory, @FindBy with XPath, constructor initialization, and reusable actions.
Include @BeforeTest for configuration at the TestNG <test> level and suitable per-test setup/teardown.
Apply targeted exception handling or explicit propagation in page and test/support code.
Do not add source-code comments, Thread.sleep(), CSS selectors, swallowed exceptions, or hardcoded credentials.
Show the project plan and filenames first. Ask one question at a time, obtain approval, and explain each major step before generation.

C — CONTEXT
Application: Salesforce CRM.
Requested login URL: https://login.salesforce.com/?locale=in
Reported controls: Username/email, password, login submit, and Remember Me.
Source prompt's example XPath values:
Username: //input[@id='username']
Password: //input[@id='password']
Login: //input[@id='Login']
These example locators have not been checked against the current DOM.
Approved test environment, test-account prerequisites, authenticated-state locator, invalid-password assertion, MFA/SSO behavior, and exact error message: Not provided.
Credentials must be supplied through environment variables in the eventual project.

E — EXAMPLE
LoginPage initializes fields with PageFactory.initElements(driver, this).
Its login action waits for required conditions, enters credentials, and submits.
The valid test verifies a confirmed authenticated-state condition.
The invalid test verifies a confirmed authentication failure and absence of an authenticated state.

P — PARAMETERS
Task: Automation code generation.
Stack: Selenium + Java + Maven + TestNG; target versions to be agreed or verified.
Browser and operating system: Not provided; ask before implementation.
In scope: One valid login and one login with an incorrect password.
Out of scope: Remember Me behavior, password reset, MFA/SSO, account registration, and additional UI cases.
Page objects: Exactly one, LoginPage.java.
Test scripts: Exactly two, ValidLoginTest.java and InvalidLoginTest.java.
Allowed support files: pom.xml, testng.xml, BaseTest.java, and non-secret configuration examples as needed.
Workflow: Guided; plan approval Required; checkpoints Each major step.

O — OUTPUT
Final deliverable: Maven project structure and the complete content of each approved file, labeled by path.
Include exactly one page object and two test scripts plus the agreed support files.
Final response contains only project structure and file contents.
Discuss missing inputs, run instructions, and performed/unperformed checks during the guided review before that final response.

T — TONE
Technical, precise, and focused on code quality and maintainability.
```

## 6. Final review checklist

- [ ] All placeholders are filled or explicitly marked Not provided.
- [ ] The selected task profile matches the requested deliverable.
- [ ] The plan names the exact sections or files to be created.
- [ ] Required clarification and plan approval are complete.
- [ ] Scope, counts, constraints, and output instructions agree.
- [ ] Requirements are traceable; proposed assumptions are visible.
- [ ] Expected results are observable and based on supplied requirements.
- [ ] Credentials and other secrets are absent from the artifact.
- [ ] Generated work is clearly distinguished from executed work.
- [ ] Applicable checks are reported accurately, with remaining gaps identified.
- [ ] The final artifact uses the requested fields, filenames, format, and tone.
