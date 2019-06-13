import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View, Image, Text } from '@tarojs/components'
import './recommend.scss'

export default class List extends Component {
  render () {
    const { recommendList } = this.props
    console.log('recommendList', this.props)
    return (
      <View className='itemList'> {
        recommendList.map((item, index) =>{
          return (
            <View className={ item.type !== 2 ? 'item' : 'none' } >
              {/*  活动页 */}
              <View className={ item.type === 0 ? '' : 'none' }>
                <Image className='activity' src={ item.indexRcmdPic.picUrls } lazyLoad> </Image>
              </View>
              {/* 推荐产品 */}
              <View className={ item.type === 1  ? '' : 'none' }>
                <Image className='product' src={ item.categoryItem.listPicUrl } lazyLoad> </Image>
                {/* 标题 */}
                <View className='productName'> { item.categoryItem.name } </View>
                {/* 价格 */}
                <View className='productPrice'> ¥ { item.categoryItem.retailPrice } </View>
                {/* 用户评价 */}
                <View className='productRcd'>
                   <Image className='user' src={ item.categoryItem.comments[0].frontUserAvatar } lazyLoad></Image>
                   <Text className='content'> { item.categoryItem.comments[0].content } </Text> 
                </View>
              </View>
            </View>
          )
        })
      } </View>
    )
  }
}