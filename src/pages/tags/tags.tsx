import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import LeftSildeBar from '../components/leftSideBar/leftSildeBar'
import RightSildeBar from '../components/rightSildeBar/rightSildeBar'
import './tags.less'

export default class Tags extends Component {

  config: Config = {
    navigationBarTitleText: '分类'
  }

  render () {
    return (
      <View className='tagBox'>
        <View>
          <LeftSildeBar></LeftSildeBar>
        </View>
        <View>
          <RightSildeBar></RightSildeBar>
        </View>
      </View>
    )
  }
}