import * as React from "react";
import { connect } from "react-redux";
import { userdataActions } from "../_actions/userdata.actions";
import { SearchResults } from "../_components/SearchResults";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    text: 'Search block',
    value: 'block'
  },
  {
    text: 'Search transaction',
    value: 'transaction'
  },
  {
    text: 'View latest',
    value: 'latest'
  }
]

class ConnectedHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayOption: '' };
  }
  componentDidMount() { }

  setDisplayOption = (e, data) => {
    this.setState({ displayOption: data.value })
  }
  render() {
    const { displayOption } = this.state;
    return (
      <div>
        <Dropdown placeholder='Select option'
          fluid selection options={options}
          onChange={this.setDisplayOption}
        />
        <SearchResults
          className="form-container"
          displayOption={displayOption}
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
