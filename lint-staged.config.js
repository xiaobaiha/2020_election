/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const TMP = '.tsconfig-lint.json';

module.exports = {
  'src/**/*.{ts,vue}': filenames => {
    const json = JSON.stringify(
      {
        extends: './tsconfig.json',
        include: [...filenames, './src/externals.d.ts'],
      },
      null,
      2,
    );
    fs.writeFileSync(TMP, json);
    return [
      `tsc -p ${TMP} --noEmit --resolveJsonModule --locale zh-cn`,
      'eslint --cache --quiet',
      'prettier --write',
    ];
  },
};
