import React from 'react';
import PropTypes  from 'prop-types';

const Button = (props) => {
    
    return (
        
            <button 
            onClick={props.onClickBtn}
            style={{backgroundColor:props.color}} 
            className="btn">{props.text}
            </button>
        
    );
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickBtn: PropTypes.func

}

export default Button;