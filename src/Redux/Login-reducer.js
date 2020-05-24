import Promise from 'es6-promise';
const LOGIN_SUCCESS = "LOGIN-SUCCESS";
const LOGIN_ERROR= "LOGIN_ERROR";

function loginSuccess(isLogginSuccess){
    return{
        type: LOGIN_SUCCESS,
        isLogginSuccess
    }
}
function loginError(logginError){
    return{
        type: LOGIN_ERROR,
        logginError
    }
}
export function login(username, password){
    return dispatch => {
        dispatch(loginSuccess(false));
        dispatch(loginError(null));

        sendLoginRequest(username, password).then(success=>{
            dispatch(loginSuccess(true));
        })
        .catch(err=>{
            dispatch(loginError(err));
        })
    }
}
export default function reducer(state={
    isLogginSuccess: false,
    logginError: null
}, action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state, 
                isLogginSuccess: action.isLogginSuccess
            }
        case LOGIN_ERROR:
            return{
                ...state, 
                logginError: action.logginError
            };
        default:
            return state
    }
}
function sendLoginRequest(username, password){
    return new Promise((resolve, reject)=>{
        if(username=="hruday@gmail.com" && password=="hruday123"){
            return resolve(true);
            
        }
        else{
            return reject(new Error('Invalid username or password'))
        }
    })
}