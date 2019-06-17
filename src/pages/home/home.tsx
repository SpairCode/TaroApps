import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import Banner from '../components/banner/banner'
import Lists from '../components/rcd/recommend'
import { connect } from '@tarojs/redux'
import { home, recommend }  from '../../actions/home'
import './home.scss'

@connect(({ home }) => ({ home }), (dispatch) => ({
  home () {
    dispatch(home())
  },
  recommend (parmas) {
    dispatch(recommend(parmas))
  }
}))

export default class Home extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  static defaultProps = {
    focus: [],
    recommendList: []
  }

  state = {
    lastItemId: 0,
    size: 20,
  }

  componentDidMount () {
    this.props.home()
    let param = {
      lastItemId: this.state.lastItemId,
      size: this.state.size
    }
    this.props.recommend(param)
  }

  loadData = () => {
    this.setState({
      lastItemId: this.state.lastItemId + 11,
      size: this.state.size + 11
    })
    let param = {
      lastItemId: this.state.lastItemId,
      size: this.state.size
    }
    this.props.recommend(param)
  }

  render () {
    const { focus } = this.props.home.home
    const { recommendList, status } = this.props.home
    console.log('focus', focus)
    return (
      <View className='homeBox'>
        <ScrollView className='scrollView' scrollY onScrollToLower={ () => { this.loadData() } }>
          <AtActivityIndicator className={ status === 200 ? 'none' : '' } mode='center' color='#ffffff' size={0}></AtActivityIndicator>
            <Banner focus={ focus } ></Banner>
            <Lists recommendList={ recommendList } > </Lists>
        </ScrollView>
      </View>
    )
  }
}