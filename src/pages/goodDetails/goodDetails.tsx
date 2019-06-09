import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
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
    console.log('id', id)
    let parmas = {
      itemId: id
    }
    this.props.good(parmas)
    console.log('this', this)
  }

  render () {
    return (
      <View> GoodDetails </View>
    )
  }
}

export default goodDetail