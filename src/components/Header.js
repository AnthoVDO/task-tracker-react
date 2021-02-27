import React from 'react'; //with the new version, not mandatory anymore
import PropTypes from 'prop-types'
import Button from './Button';

const Header = (props) => { //we can destructure props => { title }

   
    return (
        <div className="header">
            <h1>{props.title}</h1> {/*if we use destructuring, only put title and not props.title */}
            <Button 
            color={props.changeBtnTxt ? "red" : "green"} 
            text={props.changeBtnTxt ? "Close" : "Add"}
            onClickBtn={props.showTaskAdder}

            />
        </div>
    );
};

Header.defaultProps = {title: "Task Tracker"}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;