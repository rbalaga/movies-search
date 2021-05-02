import placeHolderImg from "./movie-icon.png";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        className="media-img"
        alt="posterimage"
        src={props.poster}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x400/000/808?Text=Movie";
        }}
      />
      <div className="media-description">
        <span>
          <strong>{`${props.title} (${props.year})`}</strong>
        </span>
        <div>
          <div className="genres-content">
            <span>Genres:</span>
            <ul className="genres-list">
              {props.genre?.map((g) => (
                <li className="genre" key={g}>
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
