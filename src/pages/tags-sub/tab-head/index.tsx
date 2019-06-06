import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import './tab-head.scss'

class Tabs extends Component {
  render () {
    const { subs } = this.props
    return (
      <View className='tabHeader'>
        <View className='tabHeaders'>
          { subs.map((item, index) => {
            return (
              <View className='tabClassify'>
                <View> { item.name } </View>
              </View>
            )
          }) }
        </View>
      </View>
    )
  }
}

export default Tabs