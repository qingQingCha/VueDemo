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
## 脚手架版本
  #### cli2：
    在已安装好cli3的基础上安装：npm i -g @vue/cli-init
    创建项目: vue init webpack xxx(项目的名字)
  #### cli3：
    安装： npm i -g @vue/cli
    创建项目: vue create xxx(项目的名字)

## 短信登录和密码登录的切换
  需要分为两步：
    1. 两个登录选项样式的切换
    2. 两个登录面板信息的切换
  方法：
    使用一个变量loginWay来控制标签class属性on的有无

## 滚动控件
  1. 安装
    - npm i --save better-scroll

## 图片懒加载
  - npm i --save vue-lazyload

## 日期格式化
  - npm i --save moment
  - npm i --save date-fns
