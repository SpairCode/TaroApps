import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './leftSideBar.scss'

export default class leftSideBar extends Component {

  static defaultProps = {
    menu: []
  }

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
    const { menu } = this.props
    return (
      <View className='leftSideBar'>
        <View> { menu.map((item, index) => {
          return (
            <View onClick={ (e) => { this.changeIndex(index) } className={[ currentIndex === index ? 'cateItem tapClolor' : ' cateItem'  ]} key={item.id}> { item.name } </View>
          )
        }) } </View>
      </View>
    )
  }
}