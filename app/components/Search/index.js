/**
 *
 * Search
 *
 */

import React from 'react';
import { Input, Icon } from 'antd';
import { SearchWrapper } from './styles';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.demoMethod();
  }

  demoMethod(val) {
    this.props.sendData(val);
  }

  render() {
    return (
      <SearchWrapper>
        <div>
          <a href="#"><Icon type="search" /></a>
          <Input
            placeholder="Search"
            onChange={e => this.demoMethod(e.target.value)}
          />
        </div>
      </SearchWrapper>
    );
  }
}

export default Search;
