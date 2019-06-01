import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './leftSideBar.scss'

export default class leftSideBar extends Component {

  render () {
    console.log('leftSideBar')
    console.log(this.props.current)
    return (
      <View className='leftSideBar'>
        <View> # </View>
      </View>
    )
  }
}