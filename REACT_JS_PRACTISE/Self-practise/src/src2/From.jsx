import React from 'react'
import { useState } from 'react'
const From = () => {
    const [form,setForm] = useState({
        fristName:'Barbara',
        lastName:'Hepworth',
        email:'bhepworth@scultpure.com'
    });
  return (
   <>
   <label>
    First Name:
    <input type="Text"
            value={form.fristName}
            onChange={e =>{
                setForm({
                    ...form,
                    fristName:e.target.value
                })
            }} 
            />
   </label>
   <label >
    Last name:
    <input value={form.lastName}
            onChange={e =>{
                setForm({
                    ...form,
                    lastName:e.target.value
                })
            }} />
   </label>
   <label>
    Email:
    <input value={form.email}
            onChange={e=>{
                setForm({
                    ...form,
                    email:e.target.value
                })
            }} />
   </label>
   <p>
    {form.fristName}{' '}
    {form.lastName}{' '}
    ({form.email})
   </p>
   </>
  )
}

export default From