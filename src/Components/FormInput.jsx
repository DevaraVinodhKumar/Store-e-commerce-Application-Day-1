import React from 'react'
import { Form } from 'react-router-dom'

const FormInput = ({label,type,name,defaultValue}) => {
  return (
    <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input type={type} className="input" name={name} placeholder="Email" defaultValue={defaultValue}/>
    </fieldset>
  )
}

export default FormInput