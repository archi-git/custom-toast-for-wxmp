## 使用方法

### json声明使用组件
"usingComponents": {
  "custom-toast": "../../component/custom-toast/custom-toast"
} 

### wxml使用组件
`<custom-toast toast-class="{{toastClass}}" is-show-add-coin-toast="{{isShowAddCoinToast}}" is-show-reduce-coin-toast="{{isShowReduceCoinToast}}" toast-content="{{toastContent}}"/> `

### js
#### 导入函数
`import { addCoin,reduceCoin } from '../../component/custom-toast/custom-toast'`
#### 调用实例
`addCoin.call(that,500)
reduceCoin.call(that,500)`
