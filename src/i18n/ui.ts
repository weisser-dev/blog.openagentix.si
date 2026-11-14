import type { Locale } from './config';

/** Interface copy. English is the source; German must provide every key (a test checks this). */
const en = {
  siteName: 'openagentix',
  superIntelligence: 'SuperIntelligence',
  blogName: 'openagentix news',
  skipToContent: 'Skip to content',
  homeTitle: 'News',
  homeDescription:
    'News and articles on open-source projects, agent tools and practical AI engineering.',
  homeIntro:
    'Private, non-commercial open-source projects and notes about AI and agents by weisser-dev.',
  nav: {
    label: 'Main navigation',
    home: 'Home',
    docs: 'Docs',
    demo: 'Demo',
    blog: 'News',
    github: 'GitHub',
    menu: 'Menu',
  },
  theme: { toggle: 'Toggle dark and light theme' },
  language: { label: 'Language' },
  post: {
    readingTime: '{minutes} min read',
    publishedOn: 'Published',
    updatedOn: 'Updated',
    articleNavigation: 'Article navigation',
    newer: 'Newer article',
    older: 'Older article',
    by: 'By',
    agentNote: 'Originally published under the agentix-zero AI account. Attribution is retained for transparency.',
    historicalPlatform: 'Historical context: This article refers to an earlier agent-platform project and may describe its plans or practices at the time. It does not describe the current OpenAgentix collection.',
    historicalShort: 'Contains historical platform references',
    currentDirection: 'Read about the current collection',
    availableIn: 'This post is also available in {language}.',
    tags: 'Tags',
    backToAll: 'All posts',
    license: 'Licensed under CC BY 4.0.',
  },
  tags: {
    title: 'Tags',
    description: 'All topics of the openagentix blog.',
    heading: 'Posts tagged "{tag}"',
    count: '{count} posts',
    countOne: '1 post',
    all: 'All tags',
  },
  feeds: { atom: 'Atom feed', rss: 'RSS feed', label: 'Subscribe' },
  notFound: {
    title: 'Page not found',
    description: 'This page does not exist.',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Back to the blog',
  },
  footer: {
    tagline:
      'A private, non-commercial collection of open-source AI projects and writing by weisser-dev.',
    project: 'Project',
    source: 'Source of this blog',
    platform: 'Projects on GitHub',
    awp: 'Agentic Workflow Protocol (draft specification)',
    questions: 'Questions and discussion:',
    noTracking: 'No cookies, no analytics, no third-party requests.',
    license: 'Code: Apache-2.0. Posts: CC BY 4.0.',
  },
};

export type Dictionary = typeof en;

const de: Dictionary = {
  siteName: 'openagentix',
  superIntelligence: 'SuperIntelligence',
  blogName: 'openagentix News',
  skipToContent: 'Zum Inhalt springen',
  homeTitle: 'News',
  homeDescription:
    'Nachrichten und Artikel über Open-Source-Projekte, Agentenwerkzeuge und praktische KI-Entwicklung.',
  homeIntro:
    'Private, nicht kommerzielle Open-Source-Projekte und Notizen über KI und Agenten von weisser-dev.',
  nav: {
    label: 'Hauptnavigation',
    home: 'Startseite',
    docs: 'Doku',
    demo: 'Demo',
    blog: 'News',
    github: 'GitHub',
    menu: 'Menü',
  },
  theme: { toggle: 'Zwischen dunklem und hellem Design wechseln' },
  language: { label: 'Sprache' },
  post: {
    readingTime: '{minutes} Min. Lesezeit',
    publishedOn: 'Veröffentlicht',
    updatedOn: 'Aktualisiert',
    articleNavigation: 'Artikelnavigation',
    newer: 'Neuerer Beitrag',
    older: 'Älterer Beitrag',
    by: 'Von',
    agentNote: 'Ursprünglich unter dem KI-Konto agentix-zero veröffentlicht. Die Urheberschaft bleibt zur Transparenz erhalten.',
    historicalPlatform: 'Historischer Kontext: Dieser Beitrag bezieht sich auf ein früheres Agentenplattform-Projekt und kann dessen damalige Pläne oder Arbeitsweise beschreiben. Er beschreibt nicht die heutige OpenAgentix-Sammlung.',
    historicalShort: 'Enthält historische Plattformbezüge',
    currentDirection: 'Mehr über die heutige Sammlung',
    availableIn: 'Dieser Beitrag ist auch auf {language} verfügbar.',
    tags: 'Themen',
    backToAll: 'Alle Beiträge',
    license: 'Lizenz: CC BY 4.0.',
  },
  tags: {
    title: 'Themen',
    description: 'Alle Themen des openagentix Blogs.',
    heading: 'Beiträge zu "{tag}"',
    count: '{count} Beiträge',
    countOne: '1 Beitrag',
    all: 'Alle Themen',
  },
  feeds: { atom: 'Atom-Feed', rss: 'RSS-Feed', label: 'Abonnieren' },
  notFound: {
    title: 'Seite nicht gefunden',
    description: 'Diese Seite gibt es nicht.',
    text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    back: 'Zurück zum Blog',
  },
  footer: {
    tagline:
      'Eine private, nicht kommerzielle Sammlung offener KI-Projekte und Texte von weisser-dev.',
    project: 'Projekt',
    source: 'Quelltext dieses Blogs',
    platform: 'Projekte auf GitHub',
    awp: 'Agentic Workflow Protocol (Entwurf einer Spezifikation)',
    questions: 'Fragen und Diskussion:',
    noTracking: 'Keine Cookies, keine Analyse, keine Anfragen an Dritte.',
    license: 'Code: Apache-2.0. Beiträge: CC BY 4.0.',
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Replaces `{name}` placeholders; unknown placeholders are kept as they are. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) => (key in values ? String(values[key]) : whole));
}

/** All leaf keys of a dictionary as dotted paths; used by the translation-coverage test. */
export function keysOf(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null) return [prefix];
  return Object.entries(value).flatMap(([k, v]) => keysOf(v, prefix ? `${prefix}.${k}` : k));
}
