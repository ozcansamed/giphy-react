import React from "react";
import { cssSearch } from "./../styles/SearchForm.css";

export default function SearchForm({
  onHandleFormSubmit,
  onHandleSearchInputChange
}) {
  return (
    <form onSubmit={onHandleFormSubmit}>
      <input
        type='text'
        onChange={onHandleSearchInputChange}
        placeholder='Type something to search giphy...'
        style={{ margin: "10px", padding: "5px" }}
      />
      <input type='submit' className='submit' />
    </form>
  );
}
