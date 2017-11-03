exports.config = {
  namespace: 'ole',
  generateDistribution: true,
  bundles: [{ components: ['my-component'], components: ['ole-button'] }],
  sassConfig: {
    includePaths: ['node_modules'],
  },
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
