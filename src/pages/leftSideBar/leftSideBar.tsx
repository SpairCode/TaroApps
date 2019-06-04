import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './leftSideBar.scss'

export default class leftSideBar extends Component {

  state = {
    currentIndex: 0
  }

  changeIndex = (index) => {
    this.setState({
      currentIndex: index
    })
    this.props.changeIndexs(index)
  }

  render () {
    return (
      <View className='leftSideBar'>
        <View> { this.props.menu.map((item, index) => {
          return (
            <View onClick={ (e) => { this.changeIndex(index) } className={[ currentIndex === index ? 'cateItem tapClolor' : ' cateItem'  ]} key={item.id}> { item.name } </View>
          )
        }) } </View>
      </View>
    )
  }
}