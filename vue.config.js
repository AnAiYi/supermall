module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}


// this.$router:在所有组件都可以通过this.$router拿到router对象
// this.$store:在所有组件都可以通过this.$store拿到store对象