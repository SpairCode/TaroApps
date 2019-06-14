import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './lottery.scss'

export default class Lottery extends Component {
  
  config: Config = {
    navigationBarTitleText: '抽奖'
  }

  state = {
    current: 0,
    maxVal: 0,
  }

  lottery = () => {
    let number = Math.floor(Math.random() * 8 + 60) // 生成的值为60-68之间
    this.setState({
      maxVal: this.state.maxVal + number // 累加
    })
    let add = () => {
      setTimeout(() => {
        if (this.state.current < this.state.maxVal) {
          this.setState({
            current: this.state.current + 1
          })
          add()
        } else {
          console.log('current', this.state.current)  
          clearTimeout(add) // 关闭定时器
        }
      }, 100)
    }
    add()
  }

  render () {
    const { current } = this.props  
    return (
      <View className='lotteryBox'>
        <View className='lotteryBoxs'>
          <View className={ current % 8 === 0 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img13.360buyimg.com/n1/s450x450_jfs/t1/15445/5/2946/178160/5c2325f9Ee9236ae9/6c2a5e9f2d14489a.jpg'></Image>
          </View>
          <View className={ current % 8 === 1 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img14.360buyimg.com/n1/s450x450_jfs/t1/6031/34/4295/200504/5bd8aae2Ee4bd3529/d695e3db95cf66cb.jpg'></Image> 
          </View>
          <View className={ current % 8 === 2 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img13.360buyimg.com/n1/s450x450_jfs/t1/1468/11/3377/138213/5b997bf3Eda5b24a4/0ace3ed19582dbe6.jpg'></Image>  
          </View>
          <View className={ current % 8 === 7 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img13.360buyimg.com/n1/s450x450_jfs/t1/2156/4/3555/256612/5b998e57E004647d5/6cf82963537e049f.png'></Image>  
          </View>
          <View className='item'>
            <View className='button' onClick={ () => { this.lottery() } } > 抽奖 </View>
          </View>
          <View className={ current % 8 === 3 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img10.360buyimg.com/n1/s450x450_jfs/t8401/35/2082547630/228984/447f262f/59c4f70aN80ecfd3d.jpg'></Image>
          </View>
          <View className={ current % 8 === 6 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img14.360buyimg.com/n1/s450x450_jfs/t1/17046/4/5502/290354/5c3ea856E7fe52bbd/5a764cc21e50f553.jpg'></Image>
          </View>
          <View className={ current % 8 === 5 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img14.360buyimg.com/n1/s450x450_jfs/t1/81579/16/750/48262/5cef34dfEf63e2c2d/5e3313a6c623d695.jpg'></Image>
          </View>
          <View className={ current % 8 === 4 ? 'active' : 'item'  }>
            <Image className='itemImage' src='https://img13.360buyimg.com/n1/s450x450_jfs/t1/25838/34/11949/63568/5c935252E474ec0fc/e18e4be5fa437998.jpg'></Image>
          </View>
        </View>
      </View>
    )
  }
}