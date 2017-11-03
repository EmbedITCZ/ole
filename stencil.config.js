exports.config = {
  namespace: 'ole',
  generateDistribution: true,
  bundles: [
    {
      components: ['my-component'],
    },
    {
      components: ['ole-button'],
    },
    {
      components: ['ole-icon'],
    },
    {
      components: ['ole-toolbar', 'ole-toolbar-title'],
    },
  ],
  sassConfig: {
    includePaths: ['node_modules'],
  },
  global: 'src/globals.d.ts',
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
