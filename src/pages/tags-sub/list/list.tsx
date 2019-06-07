import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './list.scss'

class List extends Component {
  render () {
    const { subsList } = this.props
    return (
      <View className='goodList'>
        { subsList.map((item, index) => {
          return (
            <View className='listItem'>
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
                  <View className='promBanner' style={{ backgroundImage: `url(${ item.promBanner.bannerContentUrl })` }}>
                    { item.promBanner.content }
                  </View>
                  {/* 底部 好货内部价 */}
                  <View className='promPrice' style={{ backgroundImage: `url(${ item.promBanner.bannerTitleUrl })` }}>
                    <View className='title'> { item.promBanner.promoTitle } </View>  
                    <View className='price'> ¥ { item.promBanner.promoSubTitle } </View>
                  </View>
                  {/* 底部文字描述 */}  
                </View>
              </View>  
              <View className='textDetails'>
                 <Text className='title'> { item.name } </Text>
                 <View> <Text className={ item.activityPrice !== null ? 'activityPrice' : 'none'  }> ¥ { item.activityPrice > item.retailPrice ? item.retailPrice : item.activityPrice } </Text> <Text className={ item.retailPrice != null ? 'retailPrice' : 'none' }> ¥ { item.retailPrice > item.activityPrice ? item.retailPrice : item.activityPrice  } </Text> </View>
                 <View className={item.limitedFlag === true ? 'flag' : 'none' }> { item.limitedTag } </View>
              </View>
            </View>
          )
        }) } 
      </View>
    )
  }
}

export default List