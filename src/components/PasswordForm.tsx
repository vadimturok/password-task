import React, {useState} from 'react';
import './passwordForm.css'
import {checkForInput} from "../utils";

const PasswordForm = () => {
    const [value, setValue] = useState('')
    const [passStrength, setPassStrength] = useState({
        value: 0,
        color: '',
        name: ''
    })

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const str = e.target.value
        setValue(str)
        checkForInput(str, setPassStrength)
    }
    return (
        <div className={'form'}>
            <input value={value} onChange={onInputChange} type="text"/>
            <progress className={`progressBar progress-${passStrength.color}`} value={passStrength.value} max={3}/>
            <span>Password is: {passStrength.name}</span>
        </div>
    )
};

export default PasswordForm;