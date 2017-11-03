exports.config = {
  namespace: 'ole',
  generateDistribution: true,
  bundles: [
    { components: ['ole-box'] },
    { components: ['ole-button'] },
    { components: ['ole-column', 'ole-columns'] },
    { components: ['ole-container'] },
    { components: ['ole-section'] },
  ],
  sassConfig: {
    includePaths: ['node_modules'],
  },
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
