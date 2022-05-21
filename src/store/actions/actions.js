import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types"

export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: item
	}
}

export const deleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id
	}
}

export const editItem = (item) => {
	return {
		type: EDIT_ITEM,
		payload: item
	}
}