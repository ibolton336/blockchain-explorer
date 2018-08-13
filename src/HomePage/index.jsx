import * as React from "react";
import { connect } from "react-redux";
import { userdataActions } from "../_actions/userdata.actions";
import { SearchResults } from "../_components/SearchResults";
import {Dropdown} from "semantic-ui-react";
  const options = [
    {
      text: 'Search Transaction',
      value: 'transaction'
    }
  ]
    
class ConnectedHomePage extends React.Component {
  componentDidMount() {}
  render() {
    const { updateUserdata, userdata } = this.props;
    return (
      <div>
      <Dropdown placeholder='Select Friend' fluid selection options={options} />

      <SearchResults
        className="form-container"
        // onUpdateData={updateUserdata}
        // userdata={userdata.userdata}
      />

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserdata: payload => {
      dispatch(userdataActions.update(payload));
    }
  };
}

function mapStateToProps(state) {
  return {
    userdata: state.userdata
  };
}
const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedHomePage);
export default HomePage;
