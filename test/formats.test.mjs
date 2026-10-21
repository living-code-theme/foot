// Native format regressions, exercised through this port's generator.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import {resolveAll,ANSI_ORDER} from '../scripts/palette.mjs';
import {generate} from '../src/generate.mjs';

const flavors = resolveAll();

const foot = {files: f=>generate([f]).filter(x=>x.path!=='living-code.json'), all: fs=>generate(fs).filter(x=>x.path==='living-code.json'||x.path==='theme.css'||x.path.startsWith('snippets/')), install:readFileSync(new URL('../README.md',import.meta.url),'utf8')};

test("foot themes use the current color sections, and a light flavor selects the light theme", async () => {

  for (const f of flavors) {
    const ini = foot.files(f)[0].content;
    const section = `[colors-${f.light ? "light" : "dark"}]`;
    assert.ok(ini.includes(section), `${f.id}: ${section}`);
    assert.doesNotMatch(ini, /^\[(colors|cursor)\]$/m, f.id);
    assert.match(ini, /^cursor=[0-9a-f]{6} [0-9a-f]{6}$/m, f.id);
    assert.equal(/initial-color-theme=light/.test(ini), f.light, f.id);
  }
});
