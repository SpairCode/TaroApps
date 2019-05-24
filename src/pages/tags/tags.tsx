import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './tags.less'

export default class Tags extends Component {

  config: Config = {
    navigationBarTitleText: '分类'
  }

  render () {
    return (
      <View className='tagBox'>

      </View>
    )
  }
}