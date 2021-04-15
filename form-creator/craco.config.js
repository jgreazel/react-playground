const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1e3b46",
              "@border-radius-base": "4px",

              
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
