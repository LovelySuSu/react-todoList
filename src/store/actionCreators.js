import { CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value:value
});

export const addListItem = (value) => ({
    type:ADD_LIST_ITEM,
    value:value
});

export const deleteListItem = (value) => ({
    type:DELETE_LIST_ITEM,
    value:value
})