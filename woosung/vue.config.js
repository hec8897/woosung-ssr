/* vue.config.js */
const path = require('path');

const PrerenderSpaPlugin = require('prerender-spa-plugin');
const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
        "/",
        "/about",
        '/product'
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
];


module.exports = {
  lintOnSave: false,

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/', '/about','/product'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
