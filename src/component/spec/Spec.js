import React from 'react'
import './spec.css';
function Spec({value,title}) {
    return (
        <div className='spec'>
            <h5>{title}</h5>
            <p><small>{value}</small></p>
        </div>
    )
}

export default Spec
