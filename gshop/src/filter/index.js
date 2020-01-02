import Vue from 'vue'
// import moment from 'moment' // 占用较大
import format from 'date-fns/format'

// 自定义过滤器
Vue.filter('date-format', (value, formatStr = 'yyyy-MM-dd HH:mm:ss') => {
  // return moment(value).format(formatStr)
  return format(value, formatStr)
})
