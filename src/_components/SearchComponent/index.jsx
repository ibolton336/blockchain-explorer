import * as React from "react";
import { Button, Icon, Input } from "semantic-ui-react";
import { TransactionView} from "../TransactionView";
import { BlockView } from "../BlockView";
import "./SearchComponent.css"
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
    const { onSearch, userdata } = this.props;
    return (


      <div>
        {this.props.displayOption === "transaction" &&
          <div>
            <Input placeholder="Search" onChange={this.handleSearchChange} />
            <Button className="search-button" icon onClick={() => onSearch(this.state.searchText, this.props.displayOption)}>
              <Icon name='search' />
            </Button>
            {userdata.transaction &&
              <TransactionView transaction={userdata.transaction} />
            }
          </div>
        }
        {this.props.displayOption === "block" &&
          <div>
            <Input placeholder="Search" onChange={this.handleSearchChange} />
            <Button className="search-button" icon onClick={() => onSearch(this.state.searchText, this.props.displayOption)}>
              <Icon name='search' />
            </Button>
            {userdata.block &&
              <BlockView block={userdata.block} />
            }
          </div>
        }
        {this.props.displayOption === "latest" &&
          <div>
            {/* <Button className="search-button" icon onClick={() => onSearch(this.state.searchText, this.props.displayOption)}>
              <Icon name='search' />
            </Button> */}
            {userdata.latestBlock &&
              <BlockView block={userdata.latestBlock} />
            }
          </div>
        }
      </div>

    )
  }
}
