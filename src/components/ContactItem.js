import React from 'react';
const ContactItem = ({item}) => {
  return (
    <div className='ContactItem'>
      <img style={{width:50, border:'1px solid blue'}}
      src='./images/Group.png'></img>
      <div className='ContactItemData'>
        <h5>{item.name}</h5>
        <p>{item.phoneNumber}</p>
      </div>
    </div>
  )
}

export default ContactItem