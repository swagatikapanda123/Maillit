//contanins logic to render survey field
import React from 'react'
import { getFormMeta } from 'redux-form';

export default ({ input, label, meta : { error, touched }}) => {
     return (
            <div>
                <label> {label} </label>
                <input {...input} style={{marginBottom: '5px'}} />
                <div className="red-text" style={{marginBottom: '20px'}}>
                { touched && error }
                </div>
            </div>
        )
};


