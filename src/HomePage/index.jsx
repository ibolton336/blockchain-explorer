import * as React from "react";
import { connect } from "react-redux";
import { userdataActions } from '../_actions/userdata.actions';
import {ResumeForm} from "../_components/ResumeForm"

class ConnectedHomePage extends React.Component{
  componentDidMount() {
  }

  render() {
    const {updateUserdata, userdata} = this.props;
    return (
        <ResumeForm 
        className="form-container" 
        onUpdateData={updateUserdata} userdata={userdata.userdata}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserdata: (payload) => {
      dispatch(userdataActions.update(payload));
    }
  };
}

function mapStateToProps(state) {
  return {
    userdata: state.userdata
  };
}
const HomePage= connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedHomePage);
export default HomePage;
