import { expect, test } from 'vitest';
import { hasHistoricalPlatformReferences } from '../../src/lib/historical-platform-posts';

test('historical platform references are distinguished from the current collection and new writing', () => {
  expect(hasHistoricalPlatformReferences('agent-operations-platform-view')).toBe(true);
  expect(hasHistoricalPlatformReferences('why-open-agentix')).toBe(false);
  expect(hasHistoricalPlatformReferences('wearables-and-coding-agents')).toBe(false);
});
