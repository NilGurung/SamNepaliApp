import people from './people.json';

const initialState = {
    people: [],
    detailView: false,
    personSelected: null,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'INITIAL_FETCH':
        return {
            ...state,
            people: action.payload
        }
        
        case 'SELECTED_PERSON':
            return {
                ...state,
                detailsView: true,
                personSelected: action.payload,
            }

        case 'NONE_SELECTED': 
        return {
            ...state,
            detailsView: false,
            personSelected: null,
        }
        case 'FORM_UPDATE': 
        return {
            ...state,
            [action.payload.prop] : action.payload.value
        }

        case 'NEW_CONTACT': 
            return {
                ...state,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
            }

        case 'ADD_PERSON': 
            return {
                ...state,
                ...action.newPerson
            }
        case 'DELETE_CONTACT': 
            return {
                ...state,
                detailsView: false,
                personSelected: null,
            }
        default:
            return state;
    }
}

