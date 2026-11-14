// These articles refer to the earlier open-agentix platform and its plans.
// Keep their URLs and original attribution, but do not imply they describe
// the current OpenAgentix project collection or its present-day practices.
const historicalPlatformPosts = new Set([
  'agent-operations-platform-view', 'model-drift-in-agents', 'what-is-mcp',
  'cost-is-a-platform-concern', 'open-source-tools-around-claude-code',
  'agent-ops-is-just-ops', 'dark-factory-mvp-only',
  'agent-architecture-is-not-application-architecture', 'policy-decides-audit-proves',
  'least-privilege-for-agents', 'classifier-models-and-autonomy-levels',
  'playbooks-for-agentic-work', 'agent-governance-operating-model', 'what-is-an-agent-harness',
]);

export function hasHistoricalPlatformReferences(ref: string): boolean {
  return historicalPlatformPosts.has(ref);
}
