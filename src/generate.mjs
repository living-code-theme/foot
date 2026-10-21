// This port owns its application mappings. Inputs come only from the pinned local palette.


const nohash = (h) => h.slice(1);

const foot = {
files: (f) => [{
    path: `${f.slug}.ini`,
    // foot 1.23 split [colors] into [colors-dark] and [colors-light] (and later dropped [colors]), and moved the
    // cursor color into them from [cursor]. A light flavor also selects the light theme.
    content: `${f.light ? "[main]\ninitial-color-theme=light\n\n" : ""}[colors-${f.light ? "light" : "dark"}]
cursor=${nohash(f.r("bg"))} ${nohash(f.r("cursor"))}
foreground=${nohash(f.r("fg"))}
background=${nohash(f.r("bg"))}
${f.ansi.normal.map((c, i) => `regular${i}=${nohash(c)}`).join("\n")}
${f.ansi.bright.map((c, i) => `bright${i}=${nohash(c)}`).join("\n")}
selection-foreground=${nohash(f.r("fg"))}
selection-background=${nohash(f.r("selection"))}
search-box-no-match=${nohash(f.r("bg"))} ${nohash(f.r("error"))}
search-box-match=${nohash(f.r("fg"))} ${nohash(f.c("surface0"))}
jump-labels=${nohash(f.r("bg"))} ${nohash(f.r("accent"))}
urls=${nohash(f.r("link"))}
`,
  }]
};

export function generate(flavors) {
  return [...flavors.flatMap(f => foot.files(f)), ...(foot.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
