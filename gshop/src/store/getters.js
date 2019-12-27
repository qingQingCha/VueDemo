/**
 * 包含多个基于state的getter计算属性的对象
 */
export default {
  totalCount (state) {
    return state.cartFoods.reduce((preValue, cartFood) => preValue + cartFood.count, 0)
  },
  totalPrice (state) {
    return state.cartFoods.reduce((preValue, cartFood) => preValue + cartFood.count * cartFood.price, 0)
  }
}
