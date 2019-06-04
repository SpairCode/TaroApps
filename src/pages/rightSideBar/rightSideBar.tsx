import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './rightSideBar.scss'

export default class rightSideBar extends Component {
  render () {
    console.log('category', this.props.category)
    return (
      <View className='rightSideBar'>
        <View>
          <Image className='bannerImage' src={ this.props.category[this.props.currentIndex].focusBannerList[0].picUrl } ></Image>
        </View>
        <View className='at-row at-row--wrap'>
          {
            this.props.category[this.props.currentIndex].subCategoryList.map((item, index) => {
              return (
                <View className='itemBox at-col at-col-4 at-col--auto'>
                  <View className='itemGood'>
                    <Image className='itemBanner' src={ item.bannerUrl }></Image>
                  </View>
                  <View className='itemName'> { item.name } </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}