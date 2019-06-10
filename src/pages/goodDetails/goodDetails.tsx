import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { good } from '../../actions/goodDetails'
import './goodDetails.scss'

@connect(({ goodDetails }) => ({ goodDetails }), (dispatch) => ({
  good(parmas) {
    dispatch(good(parmas))
  }
}))

class goodDetail extends Component {

  componentDidMount () {
    let id = parseInt(this.$router.params.id) // query id
    let parmas = {
      itemId: id
    }
    this.props.good(parmas)
  }

  render () {
    const { itemDetail, listPicUrl, bigPromotion, promoTips, bonusBanner } = this.props.goodDetails.goodDetails
    console.log(itemDetail.length)
    return (
      <View>
        {/* 轮播图 */}
        <View>
          <Swiper
            className='swiper-box'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical={ false }
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='imageBox'>
                <Image src={ listPicUrl + '?imageView&quality=75&thumbnail=750x0' } ></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='imageBox'>
                <Image src={ itemDetail.picUrl1 + '?imageView&quality=75&thumbnail=750x0' }></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='imageBox'>
                <Image src={ itemDetail.picUrl2 + '?imageView&quality=75&thumbnail=750x0' }> </Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='imageBox'>
                <Image src={ itemDetail.picUrl3 + '?imageView&quality=75&thumbnail=750x0' }>  </Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='imageBox'>
                <Image src={ itemDetail.picUrl4 + '?imageView&quality=75&thumbnail=750x0' }> </Image>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        {/* 价格详情 */}
        <View className='priceBox'>
          <View className='activity' style={{ backgroundImage: `url('${ bigPromotion.bannerTitleUrl }')` }}></View>
          <View className='price' style={{ backgroundImage: `url('${ bigPromotion.bannerContentUrl }')` }}>
            <View>
              <View className='promoTitle'> { bigPromotion.promoTitle } </View>
              <View className='promoPrice'> <Text className='activityPrices'>¥</Text><Text className='activityPrice'>{ bigPromotion.activityPrice }</Text> &nbsp; <Text className='retailPrice'> ¥ { bigPromotion.retailPrice } </Text> </View>
            </View>
          </View>
        </View>
        {/* 津贴领取提醒 */}
        <View className={ promoTips.length !== 0 ? 'promoTips' : 'none' }> { promoTips } </View>
        {/* 津贴 */}
        <View className='bonusBanner'>
          <View className='tag'> { bonusBanner.tag } </View>
          <View className='descList'> { bonusBanner.descList } </View>
          <View className='buttonName'> { bonusBanner.buttonName } </View>
        </View>
      </View>
    )
  }
}

export default goodDetail