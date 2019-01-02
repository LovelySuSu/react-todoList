import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button,List } from 'antd';
import { connect } from 'react-redux'
import store from './store'
import { getInputChangeAction,addListItem,deleteListItem } from "./store/actionCreators";



const OtherTodoList = (props) => {
    return (
        <div>
            <Input
                value={props.inputValue}
                placeholder='输入你的任务清单'
                style={{width:300,marginRight:10}}
                onChange={props.handleInputChange}
            />
            <Button type="primary" onClick={props.addItem}>添加任务</Button>
            <List
                style={{marginTop:10,width:300}}
                bordered
                dataSource={props.list}
                renderItem={(item,index)=>(<List.Item onClick={(index) => props.deleteItem(index)}>{item}</List.Item>)}
            ></List>
        </div>
    );
}


const mapStateToProps  = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange (e) {
            const action = getInputChangeAction(e.target.value)
            store.dispatch(action)
        },
        addItem () {
            const action = addListItem();
            store.dispatch(action);
        },
        deleteItem (index) {
            const action = deleteListItem(index);
            store.dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherTodoList);
