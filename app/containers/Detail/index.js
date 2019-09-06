/**
 *
 * Detail
 *
 */

import React from 'react';
import { Tag, Icon, Collapse  } from 'antd';
import { DetailWrapper } from './styles.js';

const { Panel } = Collapse;
const path = 'http://localhost:3001/';
class Detail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
      myprops: props,
      special: [],
      recipe2: [],
    };
  }

  componentDidMount() {
    this.specials();
    this.data();
  }

  data() {
    fetch(`${path}recipes`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        for (let index = 0; index < json.length; index++) {
          for (let index2 = 0; index2 < json[index].ingredients.length; index2++) {
            // console.log(json[index].ingredients[index2].uuid);
            for (let indexspecial = 0; indexspecial < this.state.special.length; indexspecial++) {
              // console.log(this.state.special[indexspecial].ingredientId)
              if (json[index].ingredients[index2].uuid === this.state.special[indexspecial].ingredientId) {
                // console.log('asdxxx ' + this.state.special[indexspecial].ingredientId);
                // console.log(index, + " " + index2);
                json[index].ingredients[index2].type = this.state.special[indexspecial].type;
                json[index].ingredients[index2].title = this.state.special[indexspecial].title;
                json[index].ingredients[index2].geo = this.state.special[indexspecial].geo;
                json[index].ingredients[index2].text = this.state.special[indexspecial].text;
              }
            }
          }
        }
        this.setState({ recipe: json });
        this.findRecipe(json);
      });
  }

  specials() {
    fetch(`${path}specials`)
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        this.setState({ special: json });
      });
  }

  findRecipe(xyz) {
    // console.log(this.state.recipe.length);
    const { myprops } = this.state;
    const findx = myprops.match.params.id.replace(/-/g, ' ');
    for (let x = 0; x < xyz.length; x++) {
      if (xyz[x].title.toLowerCase() === findx) {
        this.setState({ itemIndex: x });
      }
    }
  }

  genExtra = (x) => (
    <span className="ingredient-side"><i>&nbsp;- {x.amount} {x.measurement} </i>{ x.type ? <Icon type="tag" theme="filled" className={x.type} /> : ''}</span>
  );

  createMarkup = (y) => {
    return {__html: y};
  }

  render() {
    const { recipe, itemIndex, special } = this.state;
    // console.log(special)
    const renderRecipe = recipe.slice(itemIndex, itemIndex + 1).map((item, i) => (
      <div className="recipe-cont" key={i.toString()}>
        <img src={item.images.full.indexOf('://') !== -1 ? item.images.full : `${path + item.images.full}`} alt=""/>
        <div className="recipe-header">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Tag style={{ background: '#fff', borderStyle: 'solid' }}>
            <Icon type="clock-circle" /> {item.cookTime} Mins
          </Tag>
          <Tag style={{ background: '#fff', borderStyle: 'solid' }}>
            <Icon type="ordered-list" /> {item.prepTime} Mins
          </Tag>
          <Tag style={{ background: '#fff', borderStyle: 'solid' }}>
            <Icon type="user" /> {item.servings}
          </Tag>
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <Collapse expandIconPosition="right">
            {
              item.ingredients.map((ingredient, i) => (
                // ingredient.type ? <Panel header={ingredient.name} extra={this.genExtra(ingredient)} key={i.toString()}></Panel> : 
                // <div className="item-no-collapse" key={i.toString()}>
                //   <p>{ingredient.name} - <span><i>{ingredient.amount} {ingredient.measurement}</i></span></p>
                // </div>

                <Panel key={i} header={ingredient.name} extra={this.genExtra(ingredient)} key={i.toString()} disabled={ingredient.type ? false : true} showArrow={ingredient.type ? true : false}>
                  <div className="with-tag">
                    <p>{ingredient.title ? ingredient.title : ''}</p>
                    {ingredient.text ? <div dangerouslySetInnerHTML={this.createMarkup(ingredient.text)} /> : ''}
                  </div>
                </Panel>
              ))
            }
          </Collapse>
        </div>
      </div>
    ));

    return (
      <DetailWrapper>
        {renderRecipe}
      </DetailWrapper>
    );
  }
}
export default Detail;
