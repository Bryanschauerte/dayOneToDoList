module.exports = {
// context: "./app",
entry: "./app/App.js",
output: {
  filename: "./public/js/bundle.js"
},
module: {
  loaders: [
    //rejex expression to show which loader to look at
    {
      test: /\.js$/,
      // include: /app/,
      // exclude: /node_models/,
       loader: 'jsx-loader'
     }
  ]
}

};
