const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@border-radius-base": "8px",

              // button
              "@btn-border-radius-base": "@border-radius-base",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
