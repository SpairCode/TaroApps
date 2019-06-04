import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './leftSideBar.scss'

export default class leftSideBar extends Component {

  state = {
    currentIndex: 0
  }

  demo = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render () {
    return (
      <View className='leftSideBar'>
        <View> { this.props.menu.map((item, index) => {
          return (
            <View onClick={ (e) => { this.demo(index) } className={[ currentIndex === index ? 'cateItem tapClolor' : ' cateItem'  ]} key={item.id}> { item.name } </View>
          )
        }) } </View>
      </View>
    )
  }
}