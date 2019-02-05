const path = require("path");
const dotenv = require("dotenv");

dotenv.load({ path: '.env' });

module.exports = {
  options: { source: 'client', output: 'public/dist', mains: { index: 'index' } },
  use: [
    [
      '@neutrinojs/react',
      {
        env: [],
        publicPath: '/',
        devServer: {
          host: '0.0.0.0',
          proxy: {
            '/api': 'http://localhost:8000'
          },
          disableHostCheck: true,
        },
        manifest: {
          fileName: 'manifest.json',
          basePath: '/',
          seed: {
            name: 'andSons',
            short_name: 'andSons',
          }
        },
        html: {
          title: "Ecomm poc",
          mobile: false,
          cache: false,
          appMountHtmlSnippet: '<div style="text-align: center;  margin: auto 0;" class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
          meta: [
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no'
            },
            { 'http-equiv': 'Pragma', 'content': 'no-cache' },
            { 'http-equiv': 'Expires', 'content': '0' },
          ],
          scripts: [
            { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,default' }
          ],
          links: [
            //{ href: '/media/favicon.ico', rel: 'shortcut icon', type: 'image/x-icon' }
          ],
        },
        style: {
          test: /\.s?css$/,
          loaders: [
            {
              loader: 'sass-loader',
              useId: 'sass',
              options: {
                include: [
                  path.resolve(__dirname, 'node_modules'),
                ]
              }
            }
          ]
        },
      }
    ]
  ]
};
