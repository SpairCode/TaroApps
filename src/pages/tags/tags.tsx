import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import LeftSideBar from '../leftSideBar/leftSideBar'
import RightSideBar from '../rightSideBar/rightSideBar'
import { connect } from '@tarojs/redux'

import { list }  from '../../actions/cate'

@connect(({ cate }) => ({ cate }), (dispatch) => ({
  list () {
    dispatch(list())
  }
}))

export default class Tags extends Component {
  config: Config = {
    navigationBarTitleText: '分类'
  }

  componentDidMount() {
    this.props.list()
    console.log(this.props.cate.menu)
  }

  componentWillMount () {
    console.log(this.props.cate.menu)
  }

  render () {
    return (
      <View className='tagBox'>
        <View className='at-row'>
          <View className='at-col at-col-3'>
            <LeftSideBar menu={this.props.cate.menu} ></LeftSideBar>
          </View>
          <View className='at-col at-col-9'>
            <RightSideBar category={this.props.cate.category}></RightSideBar>
          </View>
        </View>
      </View>
    )
  }
}