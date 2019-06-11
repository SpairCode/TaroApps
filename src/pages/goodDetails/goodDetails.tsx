import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
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
    const { itemDetail, listPicUrl, bigPromotion, promoTips, bonusBanner, name, simpleDesc, itemStar, attrList  } = this.props.goodDetails.goodDetails
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
        {/* 内容详情 */}
        <View className='content'>
          <View className='baseInfo'>
            <View className='info'>
              <View className='name'> { name } </View>
              <View className='simpleDesc'> { simpleDesc } </View>
            </View>
            <View className='comment'>
              <View className='wrap'>
                <View className='num'> { `${ parseFloat(itemStar.goodCmtRate) }%` } </View>
                <View className='com'> 好评率 </View>
              </View>
              <AtIcon className='right' value='chevron-right' size='24' color='#7F7F7F'></AtIcon>
            </View>
          </View>
        </View>
        {/* 津贴 */}
        <View className='bonusBanner'>
          <View className='tag'> { bonusBanner.tag } </View>
          <View className='descList'> { bonusBanner.descList } </View>
          <Text className='buttonName'> { bonusBanner.buttonName } </Text>
        </View>
        {/* 商品参数 */}
        <View className='itemDetail'>
          <View className='attrCon'>
            <View className='cp'> 商品参数 </View>
            <View>
              { attrList.map((item, index) => {
                return (
                  <View className='item'>
                    <View className='left'> { item.attrName } </View>
                    <View className='right'>
                      <View className='attrValue'> { item.attrValue } </View>
                    </View>
                  </View>
                )
              }) }
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default goodDetail