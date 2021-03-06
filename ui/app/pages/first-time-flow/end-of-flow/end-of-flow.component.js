import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/ui/button'
import Snackbar from '../../../components/ui/snackbar'
import MetaFoxLogo from '../../../components/ui/metafox-logo'
import { DEFAULT_ROUTE, TKEY_ROUTE } from '../../../helpers/constants/routes'
import { returnToOnboardingInitiator } from '../onboarding-initiator-util'

export default class EndOfFlowScreen extends PureComponent {
  static contextTypes = {
    t: PropTypes.func,
    metricsEvent: PropTypes.func,
  }

  static propTypes = {
    history: PropTypes.object,
    completeOnboarding: PropTypes.func,
    completionMetaMetricsName: PropTypes.string,
    onboardingInitiator: PropTypes.exact({
      location: PropTypes.string,
      tabId: PropTypes.number,
    }),
  }

  onComplete = async () => {
    const {
      history,
      completeOnboarding,
      completionMetaMetricsName,
      onboardingInitiator,
    } = this.props

    await completeOnboarding()
    // this.context.metricsEvent({
    //   eventOpts: {
    //     category: 'Onboarding',
    //     action: 'Onboarding Complete',
    //     name: completionMetaMetricsName,
    //   },
    // })

    // console.log("looking for new requests")
    // lookForNewRequests().then(res => {
    //   console.log("response in from lookfornewrequests", res)
    //   history.push(TRP_SHARE_TRANSFER, {res})
    // })

    if (onboardingInitiator) {
      await returnToOnboardingInitiator(onboardingInitiator)
    }
    history.push(DEFAULT_ROUTE)
  }

  gotoSettingsPage = async () => {
    const {
      history,
      completeOnboarding,
      completionMetaMetricsName,
      onboardingInitiator,
    } = this.props

    await completeOnboarding()
    if (onboardingInitiator) {
      await returnToOnboardingInitiator(onboardingInitiator)
    }

    history.push(TKEY_ROUTE)
  }

  render () {
    const { t } = this.context
    const { onboardingInitiator } = this.props

    return (
      <div className="main-background">
        <div className="main-container">
          <div className="end-of-flow">
            <MetaFoxLogo />
            <div className="first-time-flow__question">Welcome to Torus extension</div>
            <div className="end-of-flow__text-block end-of-flow__text-1">
              Torus connects you with any Ethereum application in one-click on
              your browser.
            </div>

            <div className="first-time-flow__question-2">Checkout tKey</div>
            <div className="end-of-flow__text-block end-of-flow__text-1">
              <div>A separate account with added security</div><br></br>
              <div><span style={{ fontWeight: 'bold' }}>tKey</span> - is a separate, secure account that allows you to retrieve your private key when you lose access to your login. This is useful for users who would like to have more control over their account, especially when they have a significant sum in their wallet in future.
              </div><br></br>
              <a style={{ color: '#0363ff', fontWeight: 'bold' }} onClick={this.gotoSettingsPage}>Add a password</a> to your tKey Account in 'Settings' page for account recovery.
            </div>

            {/* <div className="first-time-flow__question-2">tKey Account set up</div>
            <div className="end-of-flow__text-block end-of-flow__text-1">
              <a style={{ color: '#0363ff', fontWeight: 'bold' }} onClick={this.gotoSettingsPage}>Add a password</a> to your tKey Account in 'Settings' page for account recovery.
            </div> */}

            <div className="first-time-flow__onboarding">
              <a className="first-time-flow__onboarding-more" href="https://hackmd.io/Tej2tf83SZOxZmz70ObEpg" target="_blank" style={{ color: '#0363ff', fontWeight: 'bold', fontSize: '18px', lineHeight: '21px' }}>
                Learn more about tKey here &gt;
              </a>
              <Button
                type="primary"
                className="end-of-flow__button"
                onClick={this.onComplete}
              >
                Go to Wallet Homepage
              </Button>
            </div>


            {/* <div className="end-of-flow__text-block end-of-flow__text-2">
              { t('endOfFlowMessage2') }
            </div>
            <div className="end-of-flow__text-3">
              { '• ' + t('endOfFlowMessage3') }
            </div>
            <div className="end-of-flow__text-3">
              { '• ' + t('endOfFlowMessage4') }
            </div>
            <div className="end-of-flow__text-3">
              { '• ' + t('endOfFlowMessage5') }
            </div>
            <div className="end-of-flow__text-3">
              { '• ' + t('endOfFlowMessage6') }
            </div>
            <div className="end-of-flow__text-3">
              { '• ' + t('endOfFlowMessage7') }
            </div>
            <div className="end-of-flow__text-block end-of-flow__text-4">
              { '*' + t('endOfFlowMessage8') }&nbsp;
              <a
                href="https://metamask.zendesk.com/hc/en-us/articles/360015489591-Basic-Safety-Tips"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="first-time-flow__link-text">
                  {t('endOfFlowMessage9')}
                </span>
              </a>
            </div> */}
            {onboardingInitiator ? (
              <Snackbar
                content={t('onboardingReturnNotice', [
                  t('endOfFlowMessage10'),
                  onboardingInitiator.location,
                ])}
              />
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
