import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './leftSideBar.scss'

export default class leftSideBar extends Component {

  goodList = () => {
    console.log(this.props.current)
    if (this.props.current !== -1) {
      this.props.current.map(item=> {
        return (
         <View key={item.id}> { item.name } </View>
        )
      })
    }
  }

  render () {
    console.log('leftSideBar')
    console.log(this.props.current)
    return (
      <View className='leftSideBar'>
        <View> { this.goodList() } </View>
        <View> # </View>
      </View>
    )
  }
}