<!-- 首页 -->
<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- 添加分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>

// 导入的其他文件 例如：import moduleName from 'modulePath';
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css' // 可以在node_modules下面的swiper文件夹中查看

export default {
  mounted () {
    this.$store.dispatch('getCatagorys')
  },

  computed: {
    ...mapState(['address', 'categorys']),

    /**
     * 根据categorys这个一维数组生成一个二维数组
     * 小数组中的元素个数最大是8
     */
    categorysArr () {
      const categorys = this
      // 准备的空的2维数组
      const arr = []
      // 准备一个小数组（最大长度为8），用来存储轮播图一页的内容
      let minArr = []
      categorys.forEach(c => {
        // 如果当前小数组已经满了，创建一个新的
        if (minArr.length === 8) {
          minArr = []
        }
        // 如果minArr是空的，将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        // 将当前分类保存到小数组中
        minArr.push(c)
      })

      return arr
    }
  },

  // import所引入的组件注册
  components: {
    HeaderTop,
    ShopList
  },

  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },

  // 监控data中的数据变化
  watch: {
    categorys (value) {
      /**
       * Swiper实例对象需要在categorys获取到数据后才进行渲染显示，
       * 但是数据的变化和界面的重新渲染展示分为两步，页面的更新是异步执行的
       * 需要页面更新后就立即创建Swiper对象
       * $nextTick([callback]) 将回调函数延迟到下次DOM更新循环之后执行。
       * 在数据修改之后立即使用它，然后等待DOM更新
       */
      this.$nextTick(() => { // 此语句要在数据修改之后才调用
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
      
    }
  },

  // 方法集合
  methods: {

  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
