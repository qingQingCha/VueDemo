/**
 * 直接更新state的多个方法的对象
 */
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USERINFO, LOGOUT_USER, RECEIVE_SHOPGOODS, RECEIVE_SHOPRATINGS, RECEIVE_SHOPINFO} from './mutation-types'
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
  }
}
