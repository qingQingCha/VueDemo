## 安装stylus依赖包
``` npm install stylus stylus-loader --save-dev ```
## 编写样式
``` <style lang="stylus" rel="stylesheet/stylus"> ```

## 使用的图标地址
``` <link rel="stylesheet" href="http://at.alicdn.com/t/font_518606_6676bmcalnrhehfr.css"> ```

## 每个页面的头部
  可大致分为是左、中、右三部分，
  可使用slot来实现此功能
  ### 使用了两种方式传递数据
    1. 使用props传递title值
    2. 使用slot传递标签

## 使用swiper实现首页轮播效果
  npm i --save swiper