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
  }
}
