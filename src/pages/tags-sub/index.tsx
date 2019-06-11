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

  static defaultProps = {
    subsList: [],
    subs: []
  }

  config = {
    navigationBarTitleText: ''
  }

  state = {
    id: '',
    categoryId: ''
  }

  componentDidMount () {
    let id = parseInt(this.$router.params.id) // query id
    let categoryId = parseInt(this.$router.params.categoryId) // query categoryId
    this.setState({
      id: parseInt(this.$router.params.id), // query id
      categoryId: parseInt(this.$router.params.categoryId) // query categoryId
    })
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

  seeOther = (categoryId) => {
    let paramId = {
      categoryL1Id: this.state.id,
      categoryL2Id: categoryId
    }
    this.props.subList(paramId)
  }

  render () {
    const { subs, subsList } = this.props.cate
    return (
      <View>
        <View>
          <Tabs subs={ subs } seeOther={ this.seeOther }></Tabs>
        </View>
        <View>
          <List subsList= { subsList }></List>
        </View>
      </View>
    )
  }
}

export default Subs