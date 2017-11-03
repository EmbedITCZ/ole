exports.config = {
  namespace: 'ole',
  generateDistribution: true,
  bundles: [
    { components: ['ole-box'] },
    { components: ['ole-button'] },
  ],
  sassConfig: {
    includePaths: ['node_modules'],
  },
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
