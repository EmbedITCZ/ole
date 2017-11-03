exports.config = {
  namespace: 'ole',
  generateDistribution: true,
  bundles: [
    { components: ['ole-box'] },
    { components: ['ole-columns', 'ole-column'] },
    { components: ['ole-container'] },
    { components: ['ole-section'] },
    { components: ['ole-button'] },
    { components: ['ole-icon'] },
    { components: ['ole-navbar', 'ole-navbar-item'] },
  ],
  sassConfig: {
    includePaths: ['node_modules'],
  },
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
