const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const cypressRunCommand = "yarn run cypress run";

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, cypressRunCommand],
};
