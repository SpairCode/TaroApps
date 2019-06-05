import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './rightSideBar.scss'

export default class rightSideBar extends Component {

  static defaultProps = {
    category: []
  }

  render () {
    console.log('category', this.props.category)
    const { category, currentIndex } = this.props
    return (
      <View className='rightSideBar'>
        <View>
          <Image className='bannerImage' src={ category[currentIndex].focusBannerList[0].picUrl } ></Image>
        </View>
        <View className='itemList'>
          {
            category[currentIndex].subCategoryList.map((item, index) => {
              return (
                <View className='itemGoods'>
                  <View className='itemGood'>
                    <Image className='itemBanner' src={ item.bannerUrl }></Image>
                  </View>
                  <View className='itemName'>
                    { item.name }
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}