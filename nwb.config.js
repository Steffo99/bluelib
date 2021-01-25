module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'bluelibreact',
      externals: {
        react: 'React'
      }
    }
  },
  babel: {
    "presets": [
      "@babel/preset-react",
      "@babel/preset-env"
    ]
  },
  webpack: {
    rules: {
      css: {
        modules: true,
        localIdentName: (
            process.env.NODE_ENV === 'production'
                ? '[path][name]-[local]-[hash:base64:5]'
                : '[hash:base64:5]'
        )
      }
    }
  }
}
