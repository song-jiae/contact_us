import React, { useEffect, useState } from "react";
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector} from 'react-redux';

const ContactList = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);
  return (
    <div className='ContactList'>
      <h2>Find phone number</h2>
      <p>저장한 연락처를 검색하세요</p>
      <SearchBox/>
      <div>
      num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default ContactList