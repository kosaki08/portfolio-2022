module.exports = {
  // Lint then format TypeScript and JavaScript files
  'app/**/*.(ts|tsx|js)': (filenames) => [
    `pnpm  lint --fix ${filenames.join(" ")}`, // prettier-ignore
    `pnpm  format --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) => 
    `pnpm  format --write ${filenames.join(" ")}`, // prettier-ignore
};
