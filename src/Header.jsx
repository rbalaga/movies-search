import MultiSelect, { components } from "react-select";
const Header = (props) => {
  const {
    genres,
    years,
    searchText,
    selectedGenres,
    selectedYears,
    selectedType,
    setSearchText,
    setSelectedGenres,
    setSelectedYears,
    setSelectedType,
    clearAllFilters
  } = props;
  const genreOptions = genres.map((g) => ({ label: g, value: g }));
  const yearOptions = years.map((y) => ({ label: y, value: y }));

  const CustomGenreValueContainer = ({ children, ...props }) => {
    let [values, input] = children;

    if (Array.isArray(values)) {
      const plural = values.length === 1 ? "" : "s";
      values = `${values.length} Genre${plural}`;
    }
    // if (input && input.props) {
    //   document.getElementById(input.props.id).focus();
    // }
    // console.log("INPUT FIELD: ", input);
    return (
      <components.ValueContainer {...props}>
        {values}
        {input}
      </components.ValueContainer>
    );
  };

  const ValueContainer = ({ children, ...props }) => {
    const { getValue, hasValue } = props;
    const nbValues = getValue().length;
    console.log("CHILDREN:", children);
    if (!hasValue) {
      return (
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
      );
    } else {
      children[0] = `${nbValues} items selected`;
      return (
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
      );
    }
  };

  const CustomYearValueContainer = ({ children, ...props }) => {
    let [values, input] = children;

    if (Array.isArray(values)) {
      const plural = values.length === 1 ? "" : "s";
      values = `${values.length} Year${plural}`;
    }

    return (
      <components.ValueContainer {...props}>
        {values}
        {input}
      </components.ValueContainer>
    );
  };

  return (
    <header className="App-header">
      <div
        className="select-filters"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="dropdown-filters" style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", width: "200px" }}>
            <MultiSelect
              isMulti
              value={selectedGenres}
              options={genreOptions}
              isClearable={false}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                ValueContainer: ValueContainer
              }}
              onChange={(values) => {
                setSelectedGenres(values);
              }}
            />
          </div>
          <div style={{ marginLeft: "10px", width: "200px" }}>
            <MultiSelect
              isMulti
              value={selectedYears}
              options={yearOptions}
              isClearable={false}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                ValueContainer: CustomYearValueContainer
              }}
              onChange={(values) => {
                setSelectedYears(values);
              }}
            />
          </div>
        </div>
        {/* <select
          name="select-genres"
          onChange={(e) => setSelectedGenres(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre}>{genre}</option>
          ))}
        </select>
        <select
          name="select-genres"
          onChange={(e) => setSelectedYears(e.target.value)}
        >
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select> */}
      </div>

      <div
        className="category radio-filters"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <input
            type="radio"
            name="mediaType"
            id="movies"
            onChange={() => setSelectedType("movies")}
          />
          <label htmlFor="movies">Movies</label>
        </div>
        <div>
          <input
            type="radio"
            name="mediaType"
            id="books"
            onChange={() => setSelectedType("books")}
          />
          <label htmlFor="books">Books</label>
        </div>
      </div>

      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <label
          style={{
            color: "blue",
            textDecorationLine: "underline",
            cursor: "pointer"
          }}
          onClick={clearAllFilters}
        >
          CLEAR FILTERS
        </label>
      </div>
    </header>
  );
};

export default Header;
