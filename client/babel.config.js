module.exports = {
  presets: ['@vue/app', '@vue/babel-preset-jsx', ['@babel/preset-env', { modules: false }]],
  plugins: [
    'transform-vue-jsx',
    // 补lessloader
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]
  ]
};
