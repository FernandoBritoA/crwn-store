import React from 'react';
import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}></input>
            {
                label ? //if developer includes a label, do this
                    (<label //if user enters something .. do shrink, else null
                        className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                    >
                        {label}
                    </label>)
                    : null //else null
            }
        </div>
    )
}
export default FormInput;