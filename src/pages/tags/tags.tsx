import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
<<<<<<< HEAD
import LeftSildeBar from '../components/leftSideBar/leftSildeBar'
import RightSildeBar from '../components/rightSildeBar/rightSildeBar'
import './tags.less'
=======
import LeftSideBar from '../leftSideBar/leftSideBar'
import RightSideBar from '../rightSideBar/rightSideBar'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
>>>>>>> a2c37e947f72d68abac2184729bb096a3bda4eb2

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
    this.getData()
  }

  getData = () => {
    Taro.request({
      url: 'https://miniapp.you.163.com/xhr/list/category.json',
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      this.setState({
        current: res.data.data.categoryList
      })
      console.log(res.data.data.categoryList)
    })
  }

  render () {
    return (
      <View className='tagBox'>
<<<<<<< HEAD
        <View>
          <LeftSildeBar></LeftSildeBar>
        </View>
        <View>
          <RightSildeBar></RightSildeBar>
=======
        <View className='at-row'>
          <View className='at-col at-col-1 at-col--auto'>
            <LeftSideBar current={ this.state.current }></LeftSideBar>
          </View>
          <View className='at-col'>
            {/* <RightSideBar> */}
              <View>
                <Button className='add_btn' onClick={this.props.add}>+</Button>
                <Button className='dec_btn' onClick={this.props.dec}>-</Button>
                <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
                <View>{this.props.counter.num}</View>
              </View>
            {/* </RightSideBar> */}
          </View>
>>>>>>> a2c37e947f72d68abac2184729bb096a3bda4eb2
        </View>
      </View>
    )
  }
}