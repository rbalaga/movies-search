// Removing duplicate values in a Array.
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

// Sorts the values in array and return the sorted array.
const sortArray = (arr) => {
  return arr.sort();
};

export const getYears = (mediaArr) => {
  // Retriving years from al medias.
  let years = mediaArr.map((media) => media.year);

  //remove duplicate years and return unique years.
  years = removeDuplicates(years);
  years = sortArray(years);
  return years;
};

export const getGenres = (mediaArr) => {
  let genres = [];
  // Retriving Genres from all medias.
  mediaArr.forEach((media) => {
    genres = [...genres, ...media.genre];
  });

  console.log("Genres: ", genres);

  // remove duplicate genres and return unique genres
  genres = removeDuplicates(genres);
  genres = sortArray(genres);
  return genres;
};

export const getTypes = (mediaArr) => {
  //Retriving types from medias.
  const types = mediaArr.map((media) => media.type);

  // removing duplicate types and return
  return removeDuplicates(types);
};

export const genresValueRenderer = (selected, options) => {
  if (selected.length === 0) {
    return "Genres...";
  }
  if (selected.length === options.length) {
    return "All Genres";
  }
  const plural = selected.length === 1 ? "" : "s";
  return `${selected.length} Genre${plural}`;
};

export const yearsValueRenderer = (selected, options) => {
  if (selected.length === 0) {
    return "Years...";
  }
  if (selected.length === options.length) {
    return "All Years";
  }
  const plural = selected.length === 1 ? "" : "s";
  return `${selected.length} Year${plural}`;
};

// FILTERING FUNCTIONS FOR MEDIA CARDS.
export const checkGeneres = (selectedGenres, mediaGenres) => {
  const machingGenre = mediaGenres.find((media) => selectedGenres.includes(media));
  return machingGenre !== undefined;
};

export const checkYear = (selectedYears, year) => {
  return selectedYears.includes(year);
};

export const checkMediaType = (selectedType, type) => {
  return selectedType === type;
};

export const searchMedia = (searchText, title, year) => {
  return title.toUpperCase().indexOf(searchText.toUpperCase()) >= 0 || year.toUpperCase().indexOf(searchText.toUpperCase()) >= 0;
};
