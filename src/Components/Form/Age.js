import React, { useState } from 'react';
import FontDescription from '../FontStyle';

const Age = props => {

    const logOption = (event) => {
        props.onChangeYear(event.target.value)
    }

    return (
        <section className='container p-8 pt-0 pb-4'>
        <div className='bg-slate-300 p-4 rounded-full'>
            <p className={`${FontDescription()}`}>{props.message}</p>
            <select value={props.selected} onChange={logOption} onClick={props.logging} className='flex m-auto bg-slate-200'>
                <option value='puppie'>Puppies</option>
                <option value='adult'>Adult</option>
            </select>
        </div>
        </section>
    )
}

export default Age;

