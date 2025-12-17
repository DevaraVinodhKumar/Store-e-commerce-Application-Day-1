import React from 'react'
import { useNavigation } from 'react-router'



const SubmitButton = ({text}) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting"
  return (
    <button className='btn btn-primary btn-block ' type='submit'>{isSubmitting ? (<span className='loading loading-spinner'>Sending...</span>) : (text || "submit")}</button>
  )
}

export default SubmitButton