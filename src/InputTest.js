import React from 'react';
import {connect} from 'react-redux';

function InputTest(props) {
    return (
        <div>
            <input value={props.inputValue} onChange={props.inputChange} className={props.inputValue ? (props.isValid ? 'valid-input' : 'invalid-input') : 'empty-input'} placeholder="First Name"/>
            <br/>
            <button onClick={props.checkInput}>Check Validation</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        isValid: state.isValid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (evt) => {
            // console.log('changed', evt.target.value);
            dispatch({type:'INPUT_CHANGE', payload:evt.target.value.replace(/[^\w\s]/gi, "")})
        },
        checkInput: () => {
            fetch('/validation.json')
                .then(response => { return response.json()})
                .then(data => {
                    // console.log(data);
                    dispatch({type: 'VALIDATION', payload: data});
                });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTest);