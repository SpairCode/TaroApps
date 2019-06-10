import Taro, { Component, Config } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { good } from '../../actions/goodDetails'

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
    const { itemDetail, listPicUrl } = this.props.goodDetails.goodDetails
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
      </View>
    )
  }
}

export default goodDetail