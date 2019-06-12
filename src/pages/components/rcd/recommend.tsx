import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View } from '@tarojs/components'
import './recommend.scss'

export default class List extends Component {
  render () {
    const { recommendList } = this.props
    console.log('recommendList', this.props)
    return (
      <View className='itemList'> {
        recommendList.map((item, index) =>{
          return (
            <View className='item'>
              {/*  活动页 */}
              <View className={ item.type === 0 ? '' : 'none' }>
                <Image src={ item.indexRcmdPic.picUrls } > </Image>
              </View>
              {/* 推荐产品 */}
              <View className={ item.type === 1 ? '' : 'none' }>
                <Image src={ item.categoryItem.listPicUrl } > </Image>
              </View>
            </View>
          )
        })
      } </View>
    )
  }
}