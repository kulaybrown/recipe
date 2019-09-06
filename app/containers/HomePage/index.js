/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { HomeWrapper } from './styles';
import utensil from '../../images/utensils-solid.png';
// import 'antd/lib/button/style/css';
const path = 'http://localhost:3001/';
class Homepage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      allRecipe: [],
    };
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

  // recipeDetail() {
  //   const { allRecipe } = this.state;
  //   console.log(allRecipe);
  //   var str = `${allRecipe}`;
  //   str = str.replace(/\s+/g, '-').toLowerCase();
  //   console.log(str);
  // }
  render() {
    console.log(this.state.allRecipe[0]);
    const renderAllRecipe = this.state.allRecipe.map((item, i) => (
      <li key={i.toString()}>
        <Link to={`/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
          <div className="list-box">
            <img src={`${path + item.images.full}`} alt="" />
            <div className="short-info">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p className="cook-time">{item.cookTime} Mins</p>
            </div>
          </div>
        </Link>
      </li>
    ));

    return (
      <HomeWrapper>
        <div className="wlogo">
          <h1>Recipe <img src={utensil} alt="" /></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis soluta officia et laudantium molestiae tenetur quas consequuntur quidem, eaque enim iusto placeat? Amet repellat beatae recusandae eum veritatis officiis?</p>
        </div>
        <ul>
          {renderAllRecipe}
        </ul>
      </HomeWrapper>
    );
  }
}

export default Homepage;
