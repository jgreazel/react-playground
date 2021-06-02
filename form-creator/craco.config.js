const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // "@primary-color": "#315e26",
              "@border-radius-base": "4px",
              "@font-size-base" : "16px"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
