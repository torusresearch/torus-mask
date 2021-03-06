import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Bowser from "bowser";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Button from "../../../../components/ui/button";

export default class DeviceList extends PureComponent {
  static contextTypes = {
    t: PropTypes.func.isRequired,
    metricsEvent: PropTypes.func.isRequired
  };

  static propTypes = {
    passwordShare: PropTypes.object,
    addPasswordShare: PropTypes.func,
    changePasswordShare: PropTypes.func,
    renderThresholdPanels: PropTypes.func,
    deleteShareDescription: PropTypes.func
  };

  constructor(props) {
    super(props);
    // console.log(props)
    let { currentDeviceShare, shareDesc, shareIndex } = props;

    this.state = {
      shareDesc: shareDesc,
      shareIndex: shareIndex,
      currentDeviceShare: currentDeviceShare,
      errorMessage: ''
    };
  }

  getBowserLabel(agent) {
    const browser = Bowser.getParser(agent);
    return browser.getBrowserName() + " " + browser.getOSName();
  }

  renderHeading() {
    const { shareDesc } = this.state;
    let el = (
      <p className="tkey-tab__subheading">
        Device - {Bowser.getParser(shareDesc[0].userAgent).getOSName()}
      </p>
    );
    return el;
  }

  deleteDevice = async (deviceUserAgent, date) => {
    const { deleteShareDescription, renderThresholdPanels } = this.props
    const { shareIndex, errorMessage } = this.state
    let data = {
      module: "chromeExtensionStorage",
      userAgent: deviceUserAgent,
      dateAdded: date
    }
    try {
      if (deviceUserAgent !== window.navigator.userAgent) {
        this.setState({
          errorMessage: "Can't delete this device"
        })
      }
      await deleteShareDescription(shareIndex, JSON.stringify(data))
      renderThresholdPanels()
    } catch (err) {
      // handle error
    }
  }

  renderDevices() {
    const { shareDesc } = this.state;
    return shareDesc.map((device, index) => {
      let date = new Date(device.dateAdded).toLocaleString()
      let browserDetails = Bowser.parse(device.userAgent)
      // browserDetails.platform.type
      return (
        <div className="tkey-tab__subshare tkey-tab__device-info" key={index}>
          <div className="device-info__icon">
            <img src={`images/device-${browserDetails.platform.type}.svg`} />
          </div>
          <div>
            <div className="device-info__name">{browserDetails.browser.name} V{browserDetails.browser.version}</div>
            <div className="device-info__details">{date.toLocaleString()}</div>
          </div>
          {/* <div onClick={() => this.deleteDevice(device.userAgent, device.dateAdded)}>
            <DeleteOutlinedIcon />
          </div> */}
        </div>
      );
    });
  }

  render() {
    let { currentDeviceShare, errorMessage } = this.state;

    return (
      <div className="tkey-tab__share">
        {this.renderHeading()}
        <div className="tkey-tab__borderWrapper">{this.renderDevices()}</div>
        <p>{errorMessage}</p>
        {/* <Button type="secondary" className="tkey-tab__addshareButton">
          Add new browser
        </Button> */}
      </div>
    );
  }
}
