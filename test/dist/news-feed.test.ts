import { describe, expect, it } from 'vitest';
import { assertBuilt, read } from './helpers';

describe('published news feed', () => {
  assertBuilt();
  it.each(['en', 'de'] as const)('contains only the four newest %s posts visible on the blog', (locale) => {
    const data = JSON.parse(read('news.json')) as Record<string, { url: string; title: string }[]>;
    const home = read(locale === 'de' ? 'de/index.html' : 'index.html');
    const links = [...home.matchAll(/<h2><a href="([^"]+)"/g)].map((match) => match[1]);
    expect(data[locale]).toHaveLength(Math.min(4, links.length));
    expect(data[locale]!.map((post) => new URL(post.url).pathname)).toEqual(links.slice(0, 4));
  });
});
