import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

class List extends Component {
  render () {
    const { subsList } = this.props
    return (
      <View className='goodList'>
        { subsList.map((item, index) => {
          return (
            <View className='listItem'>
              <View>
                <Image className='itemImage' src={ item.primaryPicUrl } ></Image>  
              </View>
            </View>
          )
        }) } 
      </View>
    )
  }
}

export default List