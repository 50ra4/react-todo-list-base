const testFilePattern = '!(*.spec|*.test|*.d).{ts,tsx}';
const targetDirectories = ['src/hooks', 'src/schema', 'src/utils'];

const entryPoints = targetDirectories.map(
  (dir) => `${dir}/**/${testFilePattern}`,
);

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: 'react-todo-list-base API document',
  entryPoints: entryPoints,
  // entryPointStrategy: 'Resolve',
  out: 'docs/typedoc/',
  // excludeExternals: true,
  // externalPattern: [
  //   'src/*.{ts,tsx}',
  //   '**/+(presentation|assets)/**/*',
  //   '**/*+(.spec|.test|.stories|.d).{ts,tsx}',
  //   '**/__snapshots__/**/*',
  // ],
  categorizeByGroup: true,
};
