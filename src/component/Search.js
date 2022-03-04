import React from "react";

class SearchBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  state = {
    searchTerm: '',
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchHandler(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment" style={{marginRight: "100px"}}>
      <form className="ui fluid category search" onSubmit={this.onFormSubmit}>
        <div className="ui icon input">
          <input className="prompt expand" onChange={this.handleChange} value={this.state.searchTerm} id="search" type='text' placeholder="search video"></input>
          <i className="search icon"></i>
        </div>
      </form>
    </div>
    )
  }
}

export default SearchBar;
