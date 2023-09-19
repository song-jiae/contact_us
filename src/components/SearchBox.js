import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_USERNAME", payload: { keyword } });
  };
  return (
    <div className='SearchBox'>
      <form onSubmit={searchByName}>
        <input
          type='text'
          id='searchBox'
          placeholder='검색'
          onChange={(event) => setKeyword(event.target.value)}
        ></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBox
