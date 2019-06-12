//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    paursed: false, // 初始没有蛋被砸开
    suspend1: false, // 蛋1初始显示完整蛋
    suspend2: false, // 蛋2初始显示完整蛋
    suspend3: false, // 蛋3初始显示完整蛋
    hammer1: false, // 锤子1初始不显示
    hammer2: false, // 锤子2初始不显示
    hammer3: false, // 锤子3初始不显示
    processLock: true
  },

  onLoad: function () {},
  /**
   * 蛋1被砸开
   * @author 小小仙
   * @date 2019/3/5
   */
  openEgg1() {
    let that = this
    // 有蛋被砸开;锤子1先出现
    that.setData({
      paursed: true,
      hammer1: true
    })

    setTimeout(function () {
      that.setData({
        suspend1: true,
      })
      setTimeout(function () {
        that.celebrate()
      }, 1000) // 1秒后中奖提示出现
    }, 600) // 0.6秒后开花的蛋出现
  },
  /**
   * 蛋2被砸开
   * @author 小小仙
   * @date 2019/3/5
   */
  openEgg2() {
    let that = this
    that.setData({
      paursed: true,
      hammer2: true
    })

    setTimeout(function () {
      that.setData({
        suspend2: true,
      })
      setTimeout(function () {
        that.celebrate()
      }, 1000)
    }, 600)
  },
  /**
   * 蛋3被砸开
   * @author 小小仙
   * @date 2019/3/5
   */
  openEgg3() {
    let that = this
    that.setData({
      paursed: true,
      hammer3: true
    })

    setTimeout(function () {
      that.setData({
        suspend3: true,
      })
      setTimeout(function () {
        that.celebrate()
      }, 1000)
    }, 600)
  },
  /**
   * 恭喜中奖提示
   * @author 小小仙
   * @date 2019/3/5
   */
  celebrate() {
    let that = this
    wx.showModal({
      title: '恭喜中奖', //提示文字
      duration: 2000, //显示时长
      mask: true, //是否显示透明蒙层，防止触摸穿透，默认：false
      icon: 'success', //图标，支持"success"、"loading"
      success: function () {
        that.revert()
      }, //接口调用成功
      fail: function () {
        that.revert()
      }, //接口调用失败的回调函数,
      complete: function () {
        that.revert()
      } //接口调用结束的回调函数，
    })
  },
  /**
   * 重置
   * @author 小小仙
   * @date 2019/3/5
   */
  revert() {
    this.setData({
      paursed: false,
      suspend1: false,
      suspend2: false,
      suspend3: false,
      hammer1: false,
      hammer2: false,
      hammer3: false,
    })
  }

})