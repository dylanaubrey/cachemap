module.exports = (api) => {
  const env = api.env();
  const modules = env === 'main' ? 'commonjs' : false;
  let targets;

  if (env === 'browser') {
    targets = { browsers: 'last 2 versions' };
  } else if (env === 'debug') {
    targets = { browsers: 'chrome >= 60' };
  } else {
    targets = { node: '8' };
  }

  return {
    comments: false,
    ignore: [
      '**/*.d.ts',
      '**/*.test.*',
      '**/__test__/**',
      '**/lib/**',
      '**/node_modules/**',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ['@babel/plugin-proposal-class-properties', { loose: false }],
      '@babel/plugin-proposal-json-strings',
      'lodash',
    ],
    presets: [
      ['@babel/preset-env', {
        modules,
        targets,
        useBuiltIns: 'usage',
      }],
      '@babel/preset-typescript',
    ],
  };
};