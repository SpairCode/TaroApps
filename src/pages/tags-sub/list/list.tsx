import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './list.scss'


class List extends Component {

  goodDetail = (item) => {
    console.log(item)
    Taro.navigateTo({
      url: `/pages/goodDetails/goodDetails?id=${ item.id }`
    })
  }

  render () {
    const { subsList } = this.props
    return (
      <View className='goodList'>
        { subsList.map((item, index) => {
          return (
            <View className='listItem' onClick={ () => { this.goodDetail(item) } }>
              <View className='listItems'>
                <View>
                  {/* 商品图片 */}
                  <View>
                      <Image className='itemImage' src={ item.primaryPicUrl } ></Image> 
                  </View>
                  {/* logo 活动 */}
                  <View className='logo'>
                    <Image src={ item.promLogo.logoUrl } ></Image> 
                  </View>
                  {/* 限时 */}
                  <View className={ item.promBanner.valid === true ? 'promBanner' : 'none' }  style={{ backgroundImage: `url(${ item.promBanner.bannerContentUrl })` }}>
                    { item.promBanner.content }
                  </View>
                  <View className={ item.promBanner.valid === false ? 'simpleDesc' : 'none' }  >
                    { item.simpleDesc }
                  </View>
                  {/* 底部 好货内部价 */}
                  <View className={ item.promBanner.valid === true ? 'promPrice': 'none' } style={{ backgroundImage: `url(${ item.promBanner.bannerTitleUrl })` }}>
                    <View className='title'> { item.promBanner.promoTitle } </View>  
                    <View className={ item.promBanner.bannerType === 2 ? 'price' : 'none' }> ¥ { item.promBanner.promoSubTitle } </View>
                    <View className={ item.promBanner.bannerType === 4 ? 'prices' : 'none' }> { item.promBanner.promoSubTitle } </View>
                  </View>
                  {/* 底部文字描述 */}  
                </View>
              </View>
              <View className='textDetails'>
                 <Text className='title'> { item.name } </Text>
                 {/* 实际价格 交易价格 */}
                 <View className={ item.activityPrice !== null ? '' : 'none' }> <Text className={ item.activityPrice > item.retailPrice ? 'activityPrice' : 'activityPrice'  }> ¥ { item.activityPrice > item.retailPrice ? item.retailPrice : item.activityPrice } </Text> <Text className={ item.retailPrice != null ? 'retailPrice' : 'none' }> ¥ { item.retailPrice > item.activityPrice ? item.retailPrice : item.activityPrice  } </Text> </View>
                 <View className={ item.activityPrice === null ? '' : 'none' }   >  <Text className='activityPrice'> ¥ { item.retailPrice } </Text> </View> 
                 <View className={item.limitedFlag === true ? 'flag' : 'none' }> { item.limitedTag } </View>
                 <View className={ item.limitedFlag === false ? 'flag empty' : 'none' }> { item.itemTagList[0].name } </View>
              </View>
            </View>
          )
        }) } 
      </View>
    )
  }
}

export default List