"use client"
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { Handlee } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
  const router = useRouter()
    const [first_name , setFirstName] = useState<string>("")
    const [last_name , setLastName] = useState<string>("")
    const [phone_number , setPhoneNumber] = useState<string>("")
    const [email , setEmail] = useState<string>("")

    const handleAdd = async (e:React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault()
      const data : IUser ={
        first_name,
        last_name,
        phone_number,
        email
      }
      const response = await axios.post("https://66348a3a9bb0df2359a1d37d.mockapi.io/api/v1/users", data)
      
      if (response.status ===201){
        alert("Add user success")
      router.push("/")
    }else{
      alert("Add user failed")
    }
  }
  return (
    <>
    <h1>Add user</h1>
    <form>
        <label>First name : </label>
        <input type="text" name='first_name' required onChange={(e) => {setFirstName(e.target.value)}} value={first_name}/>
        <br />
        <label>Last name : </label>
        <input type="text" name='Last_name' required onChange={(e) => {setLastName(e.target.value)}} value={last_name}/>
        <br />
        <label>Phone Number : </label>
        <input type="text" name='phone_number' required onChange={(e) => {setPhoneNumber(e.target.value)}} value={phone_number}/>
        <br />
        <label>Email : </label>
        <input type="email" name='email' required onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        <br />
        <button type='submit' onClick={handleAdd}>Add</button>
    </form>
    </>
  )
}