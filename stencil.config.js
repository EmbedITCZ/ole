exports.config = {
  namespace: 'ole',
  generateDistribution: true,
  bundles: [{ components: ['my-component'] }],
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
