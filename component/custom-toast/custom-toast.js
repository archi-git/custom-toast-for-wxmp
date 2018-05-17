// components/component-tag-name.js
Component({
  properties: {
    toastClass: {
      type: String
    },
    isShowAddCoinToast: {
      type: String
    },
    isShowReduceCoinToast: {
      type: String
    },
    toastContent: {
      type: String
    }
  }
})
module.exports = {
  addCoin: function (num) {
    var that = this
    if (that.unvisibleTimer) {
      clearTimeout(that.unvisibleTimer)
    }
    if (that.hideTimer) {
      clearTimeout(that.hideTimer)
    }
    that.setData({
      isShowAddCoinToast: true,
      isShowReduceCoinToast: false,
      toastContent: '+' + num + '个金币',
      toastClass: 'visible'
    })
    // setTimeout(that.setData.bind(that, { toastClass: 'visible' }), 20)
    that.unvisibleTimer = setTimeout(that.setData.bind(that, { toastClass: 'unvisible' }), 1500)
    that.hideTimer = setTimeout(that.setData.bind(that, { isShowAddCoinToast: false }), 2000)
  },
  reduceCoin: function (num) {
    var that = this
    if (that.unvisibleTimer) {
      clearTimeout(that.unvisibleTimer)
    }
    if (that.hideTimer) {
      clearTimeout(that.hideTimer)
    }
    that.setData({
      isShowReduceCoinToast: true,
      isShowAddCoinToast: false,
      toastContent: '-' + num + '个金币',
      toastClass: 'visible'
      // toastClass: 
    })
    
    // setTimeout(that.setData.bind(that, { toastClass: 'visible' }), 2)
    that.unvisibleTimer = setTimeout(that.setData.bind(that, { toastClass: 'unvisible' }), 1500)
    that.hideTimer = setTimeout(that.setData.bind(that, { isShowReduceCoinToast: false, toastClass: 'unvisible' }), 2000)
  },
}