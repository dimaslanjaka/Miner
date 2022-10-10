/** index.html builder */

import ejs from 'ejs';
import fm from 'front-matter';
import { readFileSync, rmSync, writeFileSync } from 'fs';
import { buildPost, parsePost, postMeta } from 'hexo-post-parser';
import MarkdownIt from 'markdown-it';
import { join } from 'path';
import { getConfig } from 'static-blog-generator';

const readme = join(__dirname, 'readme.md');

const parsed = fm<postMeta>(readFileSync(readme, 'utf-8'));

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});
const markdownResult = md.render(parsed.body);

const rebuild = buildPost({
  metadata: parsed.attributes,
  body: markdownResult
});

const tmpbuild = join(__dirname, 'tmp-readme.md');
writeFileSync(tmpbuild, rebuild);

parsePost(tmpbuild, {
  cache: false,
  sourceFile: tmpbuild,
  config: <any>getConfig(),
  formatDate: true,
  fix: true,
  shortcodes: {
    youtube: true,
    text: true,
    script: true,
    now: true,
    link: true,
    include: true,
    css: true,
    codeblock: true
  }
}).then((result) => {
  const data = Object.assign(result.metadata || {}, { content: result.body });
  const compile = ejs.compile(
    readFileSync(join(__dirname, 'index.ejs'), 'utf-8'),
    { cache: false }
  );
  writeFileSync(join(__dirname, 'index.html'), compile(data));
  rmSync(tmpbuild);
});
