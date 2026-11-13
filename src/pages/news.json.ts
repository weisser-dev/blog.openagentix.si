import type { APIRoute } from 'astro';
import { postsIn } from '../content-api';
import { paths } from '../i18n/paths';
import { SITE_URL } from '../project';

// postsIn only returns articles released by the existing publication schedule.
export const GET: APIRoute = async () => {
  const locales = ['en', 'de'] as const;
  const entries = await Promise.all(locales.map(async (locale) => {
    const posts = await postsIn(locale);
    return [locale, posts.slice(0, 4).map(({ title, description, date, slug }) => ({
      title, description, date: date.toISOString(), url: new URL(paths.post(locale, slug), SITE_URL).href,
    }))] as const;
  }));
  return new Response(JSON.stringify(Object.fromEntries(entries)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
