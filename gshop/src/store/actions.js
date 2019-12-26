/**
 * 通过mutation间接更新state的多个方法的对象
 */
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USERINFO, LOGOUT_USER, RECEIVE_SHOPGOODS, RECEIVE_SHOPRATINGS, RECEIVE_SHOPINFO} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address}) // 这里的address要与mutation中的保持一致
    }
  },

  // 异步获取食品分类列表
  async getCatagorys ({commit}) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const catagorys = result.data
      commit(RECEIVE_CATEGORYS, {catagorys})
    }
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 同步记录用户信息
  receiveInfo ({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },

  // 异步获取用户登录信息
  async getUserInfo ({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },
  // 异步登出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) { // 登出成功
      commit(LOGOUT_USER)
    }
  },
  // 异步获取商家商品信息
  async getShopGoods ({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      commit(RECEIVE_SHOPGOODS, {shopGoods})
      callback && callback()
    }
  },
  // 异步获取商家商品信息
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      commit(RECEIVE_SHOPRATINGS, {shopRatings})
    }
  },
  // 异步获取商家商品信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOPINFO, {shopInfo})
    }
  }
}
