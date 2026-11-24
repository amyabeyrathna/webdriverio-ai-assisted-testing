# Browser Automation Instructions

## Application Configuration

- Application name: SauceDemo
- Read the application URL from BASE_URL.
- Read login credentials from USERNAME and PASSWORD.
- Browser: Chrome
- Platform: Browser

## Browser Automation Rules

1. Use the WDIO MCP server for browser automation.
2. Use the configured Base URL whenever opening SauceDemo.
3. Do not ask the user for the URL unless they explicitly want to test another application.
4. Start a new browser session if the existing session has expired.
5. Inspect the page using snapshot before interacting with elements.
6. Verify the results after each important action.
