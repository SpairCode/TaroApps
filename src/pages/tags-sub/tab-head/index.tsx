import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import './tab-head.scss'

class Tabs extends Component {

  static defaultProps = {
    subs: []
  }

  seeOther = (item) => {
    console.log(item)
    this.props.seeOther(item.id)
  } 

  render () {
    const { subs } = this.props
    return (
      <View className='tabHeader'>
        <View className='tabHeaders'>
          { subs.map((item, index) => {
            return (
              <View className='tabClassify'>
                <View onClick={ () => { this.seeOther(item) } }> { item.name } </View>
              </View>
            )
          }) }
        </View>
      </View>
    )
  }
}

export default Tabs