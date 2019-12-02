<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  // import所引入的组件注册
  components: {
    FooterGuide
  },

  mounted () {
    // this.$store.dispatch('getAddress') // 发起请求的一种方式，另一种方式，使用映射函数
    this.getAddress()
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
    ...mapActions(['getAddress'])
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
