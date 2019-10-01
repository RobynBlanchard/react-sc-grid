const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    // libraryTarget: "commonjs2",
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'reactSCGrid'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    },
    "styled-components": {
      root: "styled",
      commonjs2: "styled-components",
      commonjs: "styled-components",
      amd: "styled-components",
      umd: "styled-components"
    }
  }
};
