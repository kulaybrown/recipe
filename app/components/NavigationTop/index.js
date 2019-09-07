/**
 *
 * NavigationTop
 *
 */

import React from 'react';
import { Button, Icon, Drawer, Form, Col, Row, Input, Select, DatePicker, Divider, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { WrapperTopNavigation } from './styles';
import Column from 'antd/lib/table/Column';

const InputGroup = Input.Group;
const { Option } = Select;
let id = 0;
let id2 = 0;
const path = 'http://localhost:3001/';
class NavigationTop extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      recipedata: [],
      ingredients: [],
      directions: [],
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onSubmit = e => {
    const { ingredients, recipedata, directions } = this.state;
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        if (values.ingredientfield1 === undefined) {
          ingredients.push();
        } else {
          for (let index = 0; index < values.ingredientfield1.length; index++) {
            console.log(values.ingredientfield1[index]);
            console.log(values.ingredientfield2[index]);
            console.log(values.ingredientfield3[index]);
            ingredients.push({
              amount: values.ingredientfield1 ? values.ingredientfield1[index] : '',
              measurement: values.ingredientfield2 ? values.ingredientfield2[index] : '',
              name: values.ingredientfield3 ? values.ingredientfield3[index] : '',
            });
          }
        }
        if (values.instructions === undefined) {
          directions.push();
        } else {
          for (let index = 0; index < values.instructions.length; index++) {
            directions.push({
              instructions: values.instructions ? values.instructions[index] : '',
              optional: values.optional ? values.optional[index] : '',
            });
          }
        }
        recipedata.push(
          {
            title: values.title ? values.title : '',
            description: values.description ? values.description : '',
            images: {
              full: 'https://via.placeholder.com/1200x700',
              medium: 'https://via.placeholder.com/570x400',
              small: 'https://via.placeholder.com/200x150',
            },
            servings: values.servings ? values.servings : '',
            prepTime: values.preptime ? values.preptime : '',
            cookTime: values.cooktime ? values.cooktime : '',
            postDate: '',
            editDate: '',
            ingredients,
            directions,
          }
        );
        console.log(this.state.ingred);
        this.addRecipe();
      }
    });
    
  };

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  removeDirection = direct => {
    const { form } = this.props;
    // can use data-binding to get
    const keys2 = form.getFieldValue('keys2');
    // We need at least one passenger
    if (keys2.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys2: keys2.filter(key => key !== direct),
    });
  };

  addDirection = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys2 = form.getFieldValue('keys2');
    const nextKeys = keys2.concat(id2++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys2: nextKeys,
    });
  };

  addRecipe() {
    const { recipedata } = this.state;
    fetch(`${path}recipes`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipedata[0]),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 24, offset: 0 },
      },
    };
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    getFieldDecorator('keys2', { initialValue: [] });
    const keys = getFieldValue('keys');
    const keys2 = getFieldValue('keys2');
    // console.log(keys)
    // console.log(keys2)
    const formItems = keys.map((k, index) => (
      <Form.Item label="Amount, Measurement, Name"
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        required={true}
        key={k}
      >
        {getFieldDecorator(`ingredientfield1[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input.",
            },
          ],
        })(<Input placeholder="amount" style={{ width: '100%', marginRight: 8 }} />)}
        {getFieldDecorator(`ingredientfield2[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input.",
            },
          ],
        })(<Input placeholder="measurement" style={{ width: '100%', marginRight: 8 }} />)}
        {getFieldDecorator(`ingredientfield3[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input.",
            },
          ],
        })(<Input placeholder="name" style={{ width: '100%', marginRight: 8 }} />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));


    const formItemsDirections = keys2.map((direct, index) => (
      <Form.Item
        label="Instructions, Option"
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        required={true}
        key={direct}
      >
        {getFieldDecorator(`instructions[${direct}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input.",
            },
          ],
        })(<Input placeholder="instructions" style={{ width: '100%', marginRight: 8 }} />)}
        {getFieldDecorator(`optional[${direct}]`, {
          initialValue: 'false',
          rules: [{ required: true }],
        })(
          <Select onChange={this.handleSelectChange}>
            <Option value="false">False</Option>
            <Option value="true">True</Option>
          </Select>,
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.removeDirection(direct)}
          />
        ) : null}
      </Form.Item>
    ));

    return (
      <WrapperTopNavigation>
        <div className="nav-top-cont">
          <p>Welcome, <b>Yourname</b></p>
          <h1>Your Recipe</h1>
          <div className="action-tool">
            <a href="#"><Icon type="search" /></a>
            <a href="#"><Icon type="setting" theme="filled" /></a>
            <Link to="/">
              <Icon type="home" theme="filled" />
            </Link>
            <Button onClick={this.showDrawer} type="primary" shape="circle" icon="plus" />
          </div>
        </div>
        <Drawer
          title="Add new recipe"
          width={400}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Title">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please enter title name' }],
                  })(<Input placeholder="Please enter title name" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter recipe description',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="please enter recipe description" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Cooktime">
                  {getFieldDecorator('cooktime', {
                    rules: [{ required: true, message: 'Please enter cooktime' }],
                  })(<Input placeholder="Please enter cooktime" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Pretime">
                  {getFieldDecorator('preptime', {
                    rules: [{ required: true, message: 'Please enter preptime' }],
                  })(<Input placeholder="Please enter preptime" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Servings">
                  {getFieldDecorator('servings', {
                    rules: [{ required: true, message: 'Please enter servings' }],
                  })(<Input placeholder="Please enter servings" />)}
                </Form.Item>
              </Col>
            </Row>
            
            <Divider />
            <h3>Ingredients</h3>
            {formItems}
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item {...formItemLayoutWithOutLabel}>
                  <Button type="dashed" onClick={this.add} style={{ width: '100%' }}>
                    <Icon type="plus" /> Add field
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <h3>Directions</h3>
            {formItemsDirections}
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item {...formItemLayoutWithOutLabel}>
                  <Button type="dashed" onClick={this.addDirection} style={{ width: '100%' }}>
                    <Icon type="plus" /> Add field
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onSubmit} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </WrapperTopNavigation>
    );
  }
}

const WrappedNavigationTop = Form.create()(NavigationTop);
export default WrappedNavigationTop;
