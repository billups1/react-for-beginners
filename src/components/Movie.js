import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, medium_cover_image}) {
    return (
        <div>
            <h1>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h1>
            <img src={medium_cover_image} />
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Movie