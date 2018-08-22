import firebase from 'firebase';


// export const selectPerson = (peopleId) => {
//     return {
//         type: 'SELECTED_PERSON',
//         payload: peopleId,
//     };
// };



// export const noneSelected = () => {
//     return {
//         type: 'NONE_SELECTED',
//     }
// }

export const formUpdate = ({prop, value}) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value }
    };
};

export const createNewRoom = ({ first_name, last_name, phone, email, company, project, notes}) => {
    const { currentUser  } = firebase.auth();

    return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/rooms`)
            .push({ first_name, last_name, phone, email, company, title, desc})
            .then(() => {
                dispatch({ type: 'NEW_ROOM'});
            })
    
    }
}



export const loadInitialRooms = () => {
        const { currentUser } = firebase.auth();

        return(dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/rooms`)
            .on('value', snapshot => {
                dispatch({type: 'INITIAL_FETCH', payload: snapshot.val()});
            });
        };
}



export const deleteRoom = (uid) => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/room`)
        .remove()
        .then(() => {
            dispatch({type: 'DELETE_ROOM'});
        });  
    };
}



// import firebase from 'firebase';


// export const selectPerson = (peopleId) => {
//     return {
//         type: 'SELECTED_PERSON',
//         payload: peopleId,
//     };
// };



