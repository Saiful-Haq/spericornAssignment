
import React, { useState, useContext, useRef, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';

export default function Home(props) {


  
  const {isLogin,setIsLogin} = useContext(UserContext)
  

  useEffect(() => {

    //GET api call to get the data

  }, []);



  return (
    <div className='registerBox'>
      <div style={{ fontSize: '20px', fontWeight: 'bold', paddingBottom: '10px' }}> PROFILE</div>

      <button style={{ fontSize: '17px', marginTop: '10px' }}
        onClick={() => {
          setIsLogin(prev => !prev);

        }}
      >
        sigOut
      </button>
    </div>
  );
}