import React, { useState } from "react";
import GiphyMaker from "./Giphymaker";
import SearchForm from "./SearchForm";

export default function Friend() {
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");

  const getGiphy = async searchString => {
    try {
      setLoading(true);
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${searchString}`
      );
      const data = await resp.json();
      setError(false);
      setErrorMessage("");
      setGiphy(data.data);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    getGiphy(searchText);
  }

  function handleSearchInputChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <SearchForm
        onHandleFormSubmit={handleFormSubmit}
        onHandleSearchInputChange={handleSearchInputChange}
      />
      {loading && (
        <>
          <p>Wait for it...</p>
          <img
            src='https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'
            alt='loading'
          />
        </>
      )}
      {giphy.length > 0 && <GiphyMaker gifItems={giphy} />}
      {error && <p>Error occurred: {errorMessage}</p>}
    </>
  );
}
