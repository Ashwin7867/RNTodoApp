import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from '../actionTypes';

const initialState = {
    allIds : [],
    byIds : {}
}

export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO : {
            const {id,content, completed} =  action.payload;
            return {
                ...state,
                allIds : [...state.allIds, id ],
                byIds : {
                    ...state.byIds, 
                    [id] : {
                        content : content,
                        completed : completed
                    }
                }
            }    
        }
        case TOGGLE_TODO : {
            const {id} = action.payload;
            return {
                ...state,
                byIds : {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed : !state.byIds[id].completed
                    }
                }
            }
        }
        default :
            return state;
    }
}
