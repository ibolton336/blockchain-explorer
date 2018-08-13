import * as React from "react";

export class SearchResults extends React.Component {
  componentDidMount() {

  }

  render() {
    const { displayOption } = this.props;
    // if (!displayOption) {
    //   return null;
    // } else {
      return(


      <div>
        {displayOption === "" && <div>nothing here</div>}
        {displayOption === 'transaction' && <div>transaction</div>}
        {displayOption === 'latest' && <div>latest</div>}
        {displayOption === 'block' && <div>block</div>}

      </div>

    // }
      )
  }
}
