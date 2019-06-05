import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Tab from './tab-head/index'
import { subs }  from '../../actions/cate'
import Tabs from './tab-head/index';

@connect(({ cate }) => ({ cate }), (dispatch) => ({
  subs(params) {
    dispatch(subs(params))
  }
}))
class Subs extends Component {

  config = {
    navigationBarTitleText: ''
  }

  componentDidMount () {
    let id = parseInt(this.$router.params.id) // query id
    let categoryId = parseInt(this.$router.params.categoryId) // query categoryId
    let params = { 
      categoryId: categoryId
    }
    this.props.subs(params)
    setTimeout(() => {
      Taro.setNavigationBarTitle({ title:  this.props.cate.subsTitle })
    }, 100) 
  }

  render () {
    return (
      <View>
        <View>
          <Tabs></Tabs>
        </View>
      </View>
    )
  }
}

export default Subs