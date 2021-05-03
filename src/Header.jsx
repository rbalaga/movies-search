import MultiSelect from "@khanacademy/react-multi-select";
import { genresValueRenderer, yearsValueRenderer } from "./helpers";

const Header = (props) => {
  const { genres, years, searchText, selectedGenres, selectedYears, selectedType, setSearchText, setSelectedGenres, setSelectedYears, setSelectedType, clearAllFilters } = props;
  const genreOptions = genres.map((g) => ({ label: g, value: g }));
  const yearOptions = years.map((y) => ({ label: y, value: y }));

  return (
    <header className="App-header">
      <div className="filters-catagory">
        <div className="select-filters">
          <div className="dropdown-filters">
            <div className="multiselect-sections">
              <MultiSelect
                selectAllLabel={false}
                selected={selectedGenres}
                isLoading={false}
                disabled={false}
                disableSearch={true}
                hasSelectAll={false}
                valueRenderer={genresValueRenderer}
                options={genreOptions}
                onSelectedChanged={(values) => setSelectedGenres(values)}
              />
            </div>
            <div className="multiselect-sections">
              <MultiSelect
                selectAllLabel={false}
                selec
                selected={selectedYears}
                isLoading={false}
                disabled={false}
                disableSearch={true}
                hasSelectAll={false}
                valueRenderer={yearsValueRenderer}
                overrideStrings={{ selectAll: "asdas" }}
                options={yearOptions}
                onSelectedChanged={(values) => setSelectedYears(values)}
              />
            </div>
          </div>
        </div>
        <div className="category radio-filters">
          <div className="category-radio">
            <input type="radio" checked={selectedType === "movie"} name="mediaType" id="movie" onChange={() => setSelectedType("movie")} />
            <label htmlFor="movie">Movies</label>
          </div>
          <div className="category-radio">
            <input type="radio" checked={selectedType === "book"} name="mediaType" id="book" onChange={() => setSelectedType("book")} />
            <label htmlFor="book">Books</label>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="input-container">
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <span className="input_img" data-role="toggle">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="svg-inline--fa fa-search fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </span>
        </div>
        <label className="clear-filters" onClick={clearAllFilters}>
          CLEAR FILTERS
        </label>
      </div>
    </header>
  );
};

export default Header;
