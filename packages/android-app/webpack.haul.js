module.exports = (options, { module, resolve }) => ({
  context: __dirname,
  entry: `./index.${options.platform}.js`,
  resolve: resolve,
  module: {
    ...module,
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      ...module.rules
    ]
  }
});
