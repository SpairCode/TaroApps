import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './leftSideBar.less'

export default class leftSideBar extends Component {
  render () {
    return (
      <View className='leftSideBar'> LeftSideBar </View>
    )
  }
}