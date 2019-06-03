import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Banner from '../components/banner/banner'
import './home.scss'

export default class Home extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='homeBox'>
        <Banner></Banner>
      </View>
    )
  }
}