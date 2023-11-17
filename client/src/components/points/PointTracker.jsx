import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PointTracker =({points}) => {
    
    return (
        <div>
            <h2>{points}</h2>
        </div>
    );  
}

PointTracker.propTypes = {
    points:PropTypes.object
};

export default PointTracker;