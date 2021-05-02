import "./styles.css";
import data from "./data.json";
import { getGenres, getTypes, getYears } from "./helpers";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";

//githuburl variable to = the url
const gitHubUrl = "https://hubspotwebteam.github.io/CodeExercise/src/js/data/data.json";

function App() {
  const [userData, setUserData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);

  const [selectedType, setSelectedType] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  // fetching data from the url above
  const getGitHubUserWithFetch = async () => {
    // const response = await fetch(gitHubUrl);
    // const jsonData = await response.json();
    const jsonData = data;

    // preparing the values for dropdowns
    const dataYears = getYears(jsonData.media);
    const dataGenres = getGenres(jsonData.media);

    // setting the dropdown values for genres and years.
    setYears(dataYears);
    setGenres(dataGenres);

    // setting media data
    setUserData(jsonData.media);
  };

  const cleaAllFilters = () => {
    setSearchText("");
    setSelectedGenres([]);
    setSelectedType("");
    setSelectedYears([]);
  };

  const checkGeneres = (mediaGenres) => {
    const machingGenre = mediaGenres.find((media) => selectedGenres.includes(media));
    return machingGenre !== undefined;
  };

  const checkYear = (year) => {
    return selectedYears.includes(year);
  };

  const checkMediaType = (type) => {
    return selectedType === type;
  };

  const searchMedia = (title, year) => {
    return title.toUpperCase().indexOf(searchText.toUpperCase()) >= 0 || year.toUpperCase().indexOf(searchText.toUpperCase()) >= 0;
  };

  let filteredMedia = selectedGenres.length > 0 ? userData.filter((media) => checkGeneres(media.genre)) : userData;
  filteredMedia = selectedYears.length > 0 ? filteredMedia.filter((media) => checkYear(media.year)) : filteredMedia;
  filteredMedia = selectedType.length > 0 ? filteredMedia.filter((media) => checkMediaType(media.type)) : filteredMedia;
  filteredMedia = searchText.length > 0 ? filteredMedia.filter((media) => searchMedia(media.title, media.year)) : filteredMedia;

  // displaying it onto the page with this code
  return (
    <div className="App">
      <Header
        genres={genres}
        years={years}
        searchText={searchText}
        selectedGenres={selectedGenres}
        selectedYears={selectedYears}
        selectedType={selectedType}
        setSearchText={setSearchText}
        setSelectedGenres={setSelectedGenres}
        setSelectedYears={setSelectedYears}
        setSelectedType={setSelectedType}
        clearAllFilters={cleaAllFilters}
      />
      <div className="medialist-container">
        {
          // include the map to filter thru media object
          filteredMedia.map((media) => (
            <Card key={media.title} {...media} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
