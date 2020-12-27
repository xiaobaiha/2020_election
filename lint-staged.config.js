/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const TMP = '.tsconfig-lint.json';

module.exports = {
  'src/**/*.{ts,vue}': filenames => {
    const json = JSON.stringify(
      {
        extends: './tsconfig.json',
        include: [...filenames],
      },
      null,
      2,
    );
    fs.writeFileSync(TMP, json);
    return [
      `tsc -p ${TMP} --noEmit --resolveJsonModule --locale zh-cn`,
      'eslint --cache --quiet',
      'prettier --write',
      'stylelint src/**/*.{html,vue,css,sass,scss} --fix',
    ];
  },
};
