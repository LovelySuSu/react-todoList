import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button,List } from 'antd';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue:'',
            list:[]
        }
    }
    handleInputChange (e) {
        this.setState({
            inputValue:e.target.value
        })
    }
    addItem () {
        this.setState({
            inputValue: '',
            list:[...this.state.list,this.state.inputValue]
        })
    }
    deleteItem (index) {
        let newList = [...this.state.list].splice(index,1);
        this.setState({
            list:newList
        })
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
