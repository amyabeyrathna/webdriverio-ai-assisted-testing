/**
 * Starter placeholder for an LLM-backed test-case generator.
 * Add a provider client only after choosing an LLM provider and defining
 * input/output validation, privacy rules, and human review.
 */
export function buildTestGenerationPrompt(requirement) {
    if (typeof requirement !== 'string' || requirement.trim().length === 0) {
        throw new TypeError('A non-empty requirement string is required.');
    }

    return [
        'Suggest test cases for the requirement below.',
        'Return structured JSON with title, steps, and expectedResult.',
        'Do not invent application behavior that is not stated.',
        `Requirement: ${requirement.trim()}`
    ].join('\n');
}
