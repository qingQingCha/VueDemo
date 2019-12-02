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

## 前后台交互 ajax 
  npm install --save axios

## 使用git对项目进行版本控制
  #### 生成本地仓库
  git init
  git add *
  git commit -m "init gshop"
  #### 创建远程仓库
    登录git新建一个仓库
  #### 将本地仓库推送到远程仓库  
    复制关联代码 git remote add origin https://***(仓库的地址)
    关联完毕，在推送 git push origin master


## 使用 vuex 管理状态
  npm install --save vuex

