import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div>
        No Page Exists<br />
        <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default ErrorPage
