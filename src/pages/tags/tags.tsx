import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import LeftSideBar from '../leftSideBar/leftSideBar'
import RightSideBar from '../rightSideBar/rightSideBar'
import { connect } from '@tarojs/redux'

import { dispatchMenu } from '../../actions/cate'

@connect(({ cate }) => ({ cate }), (dispatch) => ({
  dispatchMenu () {
    dispatchMenu()
  }
}))

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
    // this.props.dispatchMenu().then((res) => {
    // })
    console.log(this)
  }

  render () {
    return (
      <View className='tagBox'>
        <View className='at-row'>
          <View className='at-col at-col-3 at-col--auto'>
            <LeftSideBar current={ this.state.current }></LeftSideBar>
          </View>
          <View className='at-col at-col-9'>
            {/* <RightSideBar> */}
              <View>
                Test
              </View>
            {/* </RightSideBar> */}
          </View>
        </View>
      </View>
    )
  }
}