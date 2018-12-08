const proxy = [
    {
      context: '/api',
      target: 'https://apiclientes.vitechd.com',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;