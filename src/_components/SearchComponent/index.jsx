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
    this.setState({ searchText: data.value })

  }
  handleSearch = (e, data) => {
    this.setState({ searchText: data.value })
  }
  render() {
    console.log('this.props', this.props)
    const { onSearch } = this.props;
    return (


      <div>
        {this.props.displayOption === "transaction" &&
          <div>
            <Input placeholder="Search" onChange={this.handleSearchChange} />
            <Button icon onClick={() => onSearch(this.state.searchText, this.props.displayOption)}>
              <Icon name='search' />
            </Button>
          </div>
        }
        {this.props.displayOption === "block" &&
          <div>
            <Input placeholder="Search" onChange={this.handleSearchChange} />
            <Button icon onClick={() => onSearch(this.state.searchText, this.props.displayOption)}>
              <Icon name='search' />
            </Button>
          </div>
        }
        {this.props.displayOption === "latest" &&
          <div>
            <Button icon onClick={() => onSearch(this.state.searchText, this.props.displayOption)}>
              <Icon name='search' />
            </Button>
          </div>
        }
      </div>

    )
  }
}
