import React,{useState} from 'react';
import {useDispatch} from 'react-redux'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const dispath= useDispatch();

  const addContact = (e)=>{
    e.preventDefault();
    dispath({type:"ADD_CONTACT", payload:{name, phoneNumber}})
  }
  return (
    <div className='ContactForm'>
      <h2>Save phone number</h2>
      <form onSubmit={addContact}>
        <label htmlFor='name'>Name</label>
        <input 
          type='text' 
          id='name'
          placeholder='이름을 입력해주세요'
          value={name}
          onChange={(e) => setName(e.target.value)}
          ></input><br/>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input 
          type='text' 
          id='phoneNumber'
          placeholder='핸드폰 번호를 입력해주세요'
          value={phoneNumber}
          onChange={(e)=>setphoneNumber(e.target.value)}
          ></input><br/>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default ContactForm