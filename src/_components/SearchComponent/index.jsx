import * as React from "react";
import { Button, Icon, Input } from "semantic-ui-react";

export class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }
  componentDidMount() {

  }
  handleSearchChange = (e, data) => {

  }
  handleSearch = (e, data) => {
    this.setState({searchText: data.value})
  }
  render() {
    const { displayOption } = this.props;
    return (


      <div>
        <Input placeholder="Search" onChange={this.handleSearchChange} />
        <Button icon onClick={this.handleSearch}>
          <Icon name='search' />
        </Button>
        {/* {displayOption === "" && <div>nothing here</div>}
        {displayOption === 'transaction' && <div>transaction</div>}
        {displayOption === 'latest' && <div>latest</div>}
        {displayOption === 'block' && <div>block</div>} */}

      </div>

      // }
    )
  }
}
