/**
 * Safe starter: format diagnostic context for an AI assistant.
 * This does not modify selectors or tests automatically.
 */
export function buildLocatorDiagnostic({ pageDescription, failedSelector, errorMessage }) {
    return {
        pageDescription: pageDescription ?? '',
        failedSelector: failedSelector ?? '',
        errorMessage: errorMessage ?? '',
        instruction: 'Suggest possible causes and candidate selectors. Do not apply changes automatically.'
    };
}
