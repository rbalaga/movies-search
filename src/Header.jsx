import MultiSelect from "@khanacademy/react-multi-select";
import { genresValueRenderer, yearsValueRenderer } from "./helpers";

const Header = (props) => {
  const { genres, years, searchText, selectedGenres, selectedYears, selectedType, setSearchText, setSelectedGenres, setSelectedYears, setSelectedType, clearAllFilters } = props;
  const genreOptions = genres.map((g) => ({ label: g, value: g }));
  const yearOptions = years.map((y) => ({ label: y, value: y }));

  return (
    <header className="App-header">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="filters-cata">
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
            <div>
              <input type="radio" checked={selectedType === "movie"} name="mediaType" id="movie" onChange={() => setSelectedType("movie")} />
              <label htmlFor="movie">Movies</label>
            </div>
            <div>
              <input type="radio" checked={selectedType === "book"} name="mediaType" id="book" onChange={() => setSelectedType("book")} />
              <label htmlFor="book">Books</label>
            </div>
          </div>
        </div>
        <div className="search" style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <label className="clear-filters" onClick={clearAllFilters}>
            CLEAR FILTERS
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
