import placeHolderImg from "./movie-icon.png";

const Card = (props) => {
  return (
    <div
      className="user-container"
      style={{
        width: "300px",
        backgroundColor: "#e4eef1",
        marginLeft: "20px",
        marginTop: "30px",
        border: "1px solid rgb(195 205 208)"
      }}
    >
      <img
        alt="posterimage"
        width="300px"
        height="400px"
        style={{ backgroundColor: "pink" }}
        src={props.poster}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/300x400/000/808?Text=Movie";
        }}
      />
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          marginLeft: "10px",
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <span>
          <strong>{`${props.title} (${props.year})`}</strong>
        </span>
        <div>
          <div style={{ padding: "0px", margin: "0px" }}>
            <span>Genres:</span>
            <ul
              style={{
                marginRight: "auto",
                display: "inline-flex",
                listStyle: "none",
                padding: "0px"
              }}
            >
              {props.genre?.map((g) => (
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "2px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    backgroundColor: "#e5d7be",
                    border: "1px solid #9a8522",
                    borderLeftWidth: "3px"
                  }}
                  key={g}
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
