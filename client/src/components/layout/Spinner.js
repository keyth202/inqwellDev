import React, {Fragment} from 'react';
import spinner from './spinner2.gif';

const Spinner = () => {
  return (
    <Fragment>
        <img src={spinner}
        style={{width:'200px', margin:'auto', display:'block', padding:'70px 0'}}
        alt='Loading...'
        />
    </Fragment>
  )
}

export default Spinner
