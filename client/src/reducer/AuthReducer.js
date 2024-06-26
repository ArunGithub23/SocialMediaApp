
    const authReducer=(state={authData:null,loading:false,error:false},action)=>{

        
        switch (action.type) {  
            case 'AUTH_START':
                return {...state,loading:true,error:false}
                
                break;

                case 'AUTH_SUCCESSFUL':
                    localStorage.setItem("profile",JSON.stringify(action.data))
                return {...state,authData:action.data,loading:false,error:false}
                
                break;

                case 'AUTH_FAIL':
                return {...state,loading:false,error:true}
                
                break;

                case 'LOG_OUT':
                    localStorage.clear();
                    return {...state,authData:null,loading:false,error:false}
        
            default:
                return state
                break;
        }


    }


    export default authReducer;