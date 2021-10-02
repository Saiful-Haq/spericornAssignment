import React, { createContext, useState ,useEffect} from 'react';

export const UserContext= createContext();
export const UserProvider=props=>{

    const [isLogin,setIsLogin]=useState(false);
    
    useEffect(()=>{
         
      }, []);

    return(
        <UserContext.Provider value={{isLogin,setIsLogin}}>
            {props.children}
        </UserContext.Provider>
    )

}