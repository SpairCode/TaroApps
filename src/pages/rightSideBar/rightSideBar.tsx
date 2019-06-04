import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './rightSideBar.scss'

export default class rightSideBar extends Component {
  render () {
    console.log('category', this.props.category)
    return (
      <View className='rightSideBar'>
        <View>
          <Image className='bannerImage' src={ this.props.category[0].focusBannerList[0].picUrl } ></Image>
        </View>
        <View className='at-row at-row--wrap'>
          {
            this.props.category[0].subCategoryList.map((item, index) => {
              return (
                <View className='at-col at-col-4'>
                  <View className='itemGood'>
                    <Image className='itemBanner' src={ item.bannerUrl }></Image>
                  </View>
                  <Text className='itemName'> { item.name } </Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}