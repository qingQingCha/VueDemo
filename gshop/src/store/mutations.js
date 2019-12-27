/**
 * 直接更新state的多个方法的对象
 */
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USERINFO,
  LOGOUT_USER, RECEIVE_SHOPGOODS, RECEIVE_SHOPRATINGS, RECEIVE_SHOPINFO,
  INCREMENT_FOODCOUNT, DECREMENT_FOODCOUNT} from './mutation-types'
import Vue from 'vue'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },

  [LOGOUT_USER] (state) {
    state.userInfo = {}
  },

  [RECEIVE_SHOPGOODS] (state, {shopGoods}) {
    state.shopGoods = shopGoods
  },

  [RECEIVE_SHOPRATINGS] (state, {shopRatings}) {
    state.shopRatings = shopRatings
  },

  [RECEIVE_SHOPINFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  },

  [INCREMENT_FOODCOUNT] (state, {food}) {
    if (!food.count) {
      // food.count = 1 // 这样添加的属性count没有数据绑定的特性
      Vue.set(food, 'count', 1) // 让新增的count属性也有数据绑定
      // food只在第一次数量由 0->1 时，将其加入cartFoods
      // 此后，已添加进cartFoods的food的数量发生变化时，无需手动额外进行更新
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  [DECREMENT_FOODCOUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        // 当food.count = 0 时，将其移除cartFoods
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  }
}
