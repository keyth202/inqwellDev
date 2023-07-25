import React, {useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const timeout = setTimeout(() => {
        navigate('/');
      }, 5000); // 5000 milliseconds (5 seconds) timeout
  
      // Clean up the timeout on component unmount to avoid memory leaks
      return () => clearTimeout(timeout);
    }, [navigate]);
  return (
    <div>
        <h1>The evil racoons have stolen this page, returning to home in 5 seconds....</h1>
    </div>
  )
}

export default NotFound;
