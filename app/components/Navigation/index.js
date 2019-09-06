/**
 *
 * Navigation
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Skeleton, Switch, Card, Icon, Affix, Modal, Button } from 'antd';
import { WrapperNavigation } from './styles';

const path = 'http://localhost:3001/';
class Navigation extends React.PureComponent {
  state = {
    bottom: 0,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  addRecipe() {
    console.log('asdasd')
    fetch(`${path}recipes`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'pritong itlog',
        description: 'so yummy',
        images: {
          full: 'https://via.placeholder.com/1200x700',
          medium: 'https://via.placeholder.com/570x400',
          small: 'https://via.placeholder.com/200x150',
        },
        servings: 1,
        prepTime: 1,
        cookTime: 1,
        postDate: '',
        editDate: '',
        ingredients:
        [
          {
            ingredients: 1,
            measurement: 'package (19 oz)',
            name: 'queso brats',
          },
          {
            ingredients: 1,
            measurement: 'package (19 oz)',
            name: 'queso brats2',
          },
          {
            ingredients: 1,
            measurement: 'package (19 oz)',
            name: 'queso brats3',
          },
        ],
        directions:
        [
          {
            instructions: 'Cook brats according to package directions',
            optional: false,
          },
          {
            instructions: 'Cook brats according to package directions',
            optional: false,
          },
        ],
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    return (
      <WrapperNavigation>
        <Affix offsetBottom={this.state.bottom}>
          <ul>
            <li>
              <Link to="/">
                <Icon type="home" theme="filled" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Icon type="search" />
              </Link>
            </li>
            <li>
              <a onClick={this.addRecipe}>
                <Icon type="plus-circle" theme="filled" />
              </a>
            </li>
            <li>
              <Link to="/">
                <Icon type="heart" theme="filled" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <Icon type="user" />
              </Link>
            </li>
          </ul>
        </Affix>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </WrapperNavigation>
    );
  }
}


export default Navigation;
