import people from './room.json';

const initialState = {
    rooms: [],
    addView: false,
    personSelected: null,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    company: '',
    title: '',
    desc: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'INITIAL_FETCH':
        return {
            ...state,
            rooms: action.payload
        }
        
        case 'FORM_UPDATE': 
        return {
            ...state,
            [action.payload.prop] : action.payload.value
        }

        case 'NEW_ROOM': 
            return {
                ...state,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                title: '',
                desc: '',
            }

        case 'ADD_ROOM': 
            return {
                ...state,
                ...action.newRoom
            }
        case 'DELETE_ROOM': 
            return {
                ...state,
            }
        default:
            return state;
    }
}

