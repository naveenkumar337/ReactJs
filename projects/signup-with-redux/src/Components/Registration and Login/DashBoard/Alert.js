import React, { Component } from "react";
import { connect } from "react-redux";
import '../../../App.css'
class Alert extends Component {
  render() {
    debugger;
    var alert = this.props.Message;
    console.log(alert)
    // alert(alert)
    return (
      <>
      {  
      alert?
      <div className="alert-main">
        <div className={`${alert.alert_type}`}>
          <p>{alert.message}</p>
        </div>
        </div>             
        :null
  }
      </>
    );
  }
}

function mapState(state) {
  debugger;
  return state.alert_reducer;
}

export default connect(mapState)(Alert);
