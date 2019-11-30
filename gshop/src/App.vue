<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
// 导入的其他文件 例如：import moduleName from 'modulePath';
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  // import所引入的组件注册
  components: {
    FooterGuide
  },

  data () {
    return {

    }
  },

  // 监听属性
  computed: {

  },

  // 监控data中的数据变化
  watch: {

  },

  // 方法集合
  methods: {

  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
