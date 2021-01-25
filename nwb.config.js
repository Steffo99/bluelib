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
  }
}
