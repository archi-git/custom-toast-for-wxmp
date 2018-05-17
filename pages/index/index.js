var that 
import { addCoin,reduceCoin } from '../../component/custom-toast/custom-toast'
Page({
  data: {
  },
  onLoad: function(){
    that = this
    that.add = addCoin.bind(that, 500)
    that.reduce = reduceCoin.bind(that, 500)
  },
  // add: addCoin.bind(that,500),
  // reduce: reduceCoin.bind(that,500)
})
