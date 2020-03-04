module.exports = {
  entry: ["babel-polyfill", "./src/index"],
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: 66666
        }
      }
    ]
  }
};
