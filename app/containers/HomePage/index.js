/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import StackGrid from 'react-stack-grid';
import sizeMe from 'react-sizeme';
import * as JsSearch from 'js-search';
import { Link } from 'react-router-dom';
import { HomeWrapper } from './styles';
// import 'antd/lib/button/style/css';
import Search from '../../components/Search';
const search = new JsSearch.Search('uuid');
const path = 'http://localhost:3001/';
class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      allRecipe: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.data();
  }

  data() {
    fetch(`${path}recipes`)
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        this.setState({ allRecipe: json });
      });
  }

  searc(val) {
    fetch(`${path}recipes`)
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        search.addIndex('title');
        search.addDocuments(json);
        // console.log(search.search(val));
        // this.state.allRecipe.push(search.search(val));
        this.setState({ allRecipe: search.search(val) });
      });
  }

  getData = val => {
    // console.log(val);
    if (val === '') {
      this.data();
    } else {
      this.searc(val);
    }
  };

  render() {
    // console.log(this.state.allRecipe[0]);
    // console.log(window.location.pathname)
    const { size: { width } } = this.props;
    const renderAllRecipe = this.state.allRecipe.map((item, i) => (
      // <li key={i.toString()}>
      //   <Link to={`/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
      //     <div className="list-box">
      //       <img src={item.images.full.indexOf('://') !== -1 ? item.images.full : `${path + item.images.full}`} alt="" />
      //       <div className="short-info">
      //         <h1>{item.title}</h1>
      //         <p>{item.description}</p>
      //         <p className="cook-time">{item.cookTime} Mins</p>
      //       </div>
      //     </div>
      //   </Link>
      // </li>
      <div key={i.toString()} className="list-box-container">
        <Link to={`/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
          <div className="list-box">
            <img src={item.images.full.indexOf('://') !== -1 ? item.images.full : `${path + item.images.full}`} alt="" />
            <div className="short-info">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p className="cook-time">{item.cookTime} Mins</p>
            </div>
          </div>
        </Link>
      </div>
    ));

    return (
      <HomeWrapper>
        <Search sendData={this.getData} />
        <StackGrid columnWidth={width <= 575 ? '100%' : '50%' && width <= 991 ? '33.33%' : '25%'} gutterWidth={20} gutterheight={20} monitorImagesLoaded={true}>
          {renderAllRecipe}
        </StackGrid>
      </HomeWrapper>
    );
  }
}

export default sizeMe()(Homepage);
