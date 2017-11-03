exports.config = {
  namespace: 'ole',
  generateDistribution: true,
  bundles: [
    { components: ['ole-box'] },
    { components: ['ole-button'] },
    { components: ['ole-container'] },
  ],
  sassConfig: {
    includePaths: ['node_modules'],
  },
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
