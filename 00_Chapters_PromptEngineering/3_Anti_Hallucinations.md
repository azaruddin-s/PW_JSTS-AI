# Anti-Hallucination Techniques in Prompt Engineering for QA Automation

When generating test automation code, AI models can hallucinate non-existent API methods, deprecated classes (e.g., using `driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)` instead of `Duration.ofSeconds(10)` in Selenium 4), or fabricated library coordinates.

---

## 1. Core Anti-Hallucination Strategies

### A. Grounding with Exact Library Versions
Always specify explicit versions of languages and core dependencies:
- **Good**: *"Use Selenium Java 4.27+, Java 17 LTS, TestNG 7.10+. Do not use deprecated `ExpectedConditions` or obsolete `DesiredCapabilities`."*
- **Avoid**: *"Write Selenium code."* (The model may default to Selenium 3 or outdated syntax).

### B. "Negative Constraints" (What NOT to do)
Explicitly forbid common anti-patterns:
- *"Do NOT use `Thread.sleep()` under any circumstances; use `WebDriverWait`."*
- *"Do NOT use `PageFactory.initElements()` (deprecated/discouraged in modern Selenium 4); use explicit `By` locators with wait wrappers."*
- *"Do NOT import `org.junit.Test` when working in a TestNG project."*

### C. Anchor with Existing Schemas / Signatures
Provide method signatures or sample contracts:
- *"All Page Objects must extend `BasePage` and use `getDriver()`."*
- *"Return types for actions leading to a new page must return the instance of the destination Page Object."*

### D. Self-Verification Directive
Instruct the model to verify imports and compile boundaries:
- *"Verify that all Maven `groupId`, `artifactId`, and `version` tags exist on Maven Central."*
- *"If unsure of an API method, use standard Java standard library utilities or standard WebDriver calls rather than inventing helper functions."*

---

## 2. Anti-Hallucination Prompt Template for Automation

```markdown
Role: Senior SDET Automation Architect.
Task: Generate a test automation script for [Application/Workflow].

Constraints & Anti-Hallucination Rules:
1. Version Anchors: Java 17+, Selenium 4.x, TestNG 7.x.
2. Deprecation Checks:
   - Use `java.time.Duration` for timeouts.
   - Use `ChromeOptions` / `FirefoxOptions` (no `DesiredCapabilities`).
   - Use `WebDriverWait(driver, Duration.ofSeconds(x))` (no two-argument timeout with integer and TimeUnit).
3. Grounding: Rely strictly on standard Selenium 4 API calls. Do not invent custom methods on WebDriver or WebElement.
4. Completeness: Ensure all import statements are fully qualified and valid.
```
