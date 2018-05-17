使用方法
<!-- wxml -->
<custom-toast toast-class="{{toastClass}}" is-show-add-coin-toast="{{isShowAddCoinToast}}" is-show-reduce-coin-toast="{{isShowReduceCoinToast}}" toast-content="{{toastContent}}"/> 
<!-- json -->
"usingComponents": {
  "custom-toast": "../../component/custom-toast/custom-toast"
} 
<!-- js -->
import { addCoin,reduceCoin } from '../../component/custom-toast/custom-toast'
addCoin.call(that,500)
reduceCoin.call(that,500)