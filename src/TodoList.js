import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button,List } from 'antd';
import store from './store'
import { getInputChangeAction,addListItem,deleteListItem } from "./store/actionCreators";

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange.bind(this));
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleInputChange (e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    addItem () {
        const action = addListItem();
        store.dispatch(action);
    }
    deleteItem (index) {
        const action = deleteListItem(index);
        store.dispatch(action);
    }
    render() {
        return (
          <div>
              <Input
                  value={this.state.inputValue}
                  placeholder='输入你的任务清单'
                  style={{width:300,marginRight:10}}
                  onChange={this.handleInputChange.bind(this)}
              />
              <Button type="primary" onClick={this.addItem.bind(this)}>添加任务</Button>
              <List
                  style={{marginTop:10,width:300}}
                  bordered
                  dataSource={this.state.list}
                  renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
              ></List>
          </div>
        );
    }
}

export default TodoList;
