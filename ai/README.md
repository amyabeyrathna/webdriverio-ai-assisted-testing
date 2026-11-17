# AI-assisted testing starter

This folder is reserved for controlled LLM-assisted workflows, such as:
- proposing test cases from approved requirements;
- explaining failures and suggesting locator updates;
- summarizing test results.

Keep generated suggestions reviewable. Do not automatically change production tests or accept locator changes without human review. Store API keys in environment variables or GitHub Actions secrets; never commit secrets.
