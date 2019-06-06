import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { subs, subList }  from '../../actions/cate'
import Tabs from './tab-head/index'
import List from './list/list'

@connect(({ cate }) => ({ cate }), (dispatch) => ({
  subs(params) {
    dispatch(subs(params))
  },
  subList (params) {
    dispatch(subList(params))
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
    let paramId = {
      categoryL1Id: categoryId,
      categoryL2Id: id
    }
    this.props.subs(params)
    this.props.subList(paramId)
    setTimeout(() => {
      Taro.setNavigationBarTitle({ title:  this.props.cate.subsTitle })
    }, 100) 
  }

  render () {
    return (
      <View>
        <View>
          <Tabs subs={ this.props.cate.subs }></Tabs>
        </View>
        <View>
          <List subsList= { this.props.cate.subsList }></List>
        </View>
      </View>
    )
  }
}

export default Subs