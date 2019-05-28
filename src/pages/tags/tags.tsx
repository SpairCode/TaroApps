import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import LeftSideBar from '../leftSideBar/leftSideBar'
import RightSideBar from '../rightSideBar/rightSIdeBar'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/cate'
import './tags.less'

@connect(({ actions }) => ({ actions }))
export default class Tags extends Component {

  config: Config = {
    navigationBarTitleText: '分类'
  }

  state = {
    current: -1,
    loaded: false,
    loading: false
  }

  componentDidMount() {
    console.log(this)
  }

  render () {
    return (
      <View className='tagBox'>
        <View className='at-row'>
          <View className='at-col at-col-1 at-col--auto'>
            <LeftSideBar></LeftSideBar>
          </View>
          <View className='at-col'>
            <RightSideBar></RightSideBar>
          </View>
        </View>
      </View>
    )
  }
}