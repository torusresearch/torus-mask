import { connect } from 'react-redux'
import { inputPasswordShare} from '../../../store/actions'
import RestorePasswordForm from './restore-password-form.component'
// import { getMostRecentOverviewPage } from '../../ducks/history/history'

const mapStateToProps = (state) => {
  const { metamask: { network, selectedAddress, identities = {} } } = state
  const numberOfExistingAccounts = Object.keys(identities).length
  const newAccountNumber = numberOfExistingAccounts + 1

  return {
    network,
    address: selectedAddress,
    newAccountNumber,
    // mostRecentOverviewPage: getMostRecentOverviewPage(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputPasswordShare: (el) => dispatch(inputPasswordShare(el))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestorePasswordForm)
