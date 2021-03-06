import DeviceList from './device-list.component'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  addPasswordShare,
  changePasswordShare,
  deleteShareDescription
} from '../../../../store/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addPasswordShare: (el) => dispatch(addPasswordShare(el)),
    changePasswordShare: (el) => dispatch(changePasswordShare(el)),
    deleteShareDescription: (el, pl) => dispatch(deleteShareDescription(el, pl))
  }
}

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(DeviceList)
