import * as React from "react";
import { connect } from "react-redux";
import { userdataActions } from "../_actions/userdata.actions";
import { SearchComponent } from "../_components/SearchComponent";
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
  handleSearch = (searchVal, displayOption) => {
    switch (displayOption) {
      case "block":
        this.props.searchBlocks(searchVal);
        break;
      case "transaction":
        this.props.searchTransactions(searchVal);
        break;
      case "latest":
        this.props.getLatest();
        break;
    }
  }
  render() {
    const { displayOption } = this.state;
    const { userdata} = this.props;
    return (
      <div>
        <Dropdown placeholder='Select option'
          fluid selection options={options}
          onChange={this.setDisplayOption}
        />
        <SearchComponent
          className="form-container"
          displayOption={displayOption}
          onSearch={this.handleSearch}
          userdata={userdata}
        />

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserdata: payload => {
      dispatch(userdataActions.update(payload));
    },
    searchBlocks: searchText=> {
      dispatch(userdataActions.searchBlocks(searchText))
    },
    searchTransactions: searchText=> {
      dispatch(userdataActions.searchTransactions(searchText))
    },
    getLatest: ()=> {
      dispatch(userdataActions.getLatest())
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
