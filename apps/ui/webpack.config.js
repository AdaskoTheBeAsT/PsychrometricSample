const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
const TerserJSPlugin = require('terser-webpack-plugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.resolve.mainFields = ['browser', 'module', 'main'];
  config.optimization.minimizer.unshift(new TerserJSPlugin());
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(
    new CompressionPlugin({
      algorithm: 'gzip',
      deleteOriginalAssets: false,
      test: /\.(js|css|html|svg|ttf)$/,
      threshold: 1024,
      minRatio: 0.8,
      compressionOptions: {
        level: 9,
      },
    })
  );

  config.plugins.push(
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      deleteOriginalAssets: false,
      test: /\.(js|css|html|svg|ttf)$/,
      threshold: 1024,
      minRatio: 0.8,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
    })
  );
  return config;
});
