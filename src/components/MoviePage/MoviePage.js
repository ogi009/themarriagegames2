import React, {useState} from 'react';
import "./_moviePage.scss";

const MoviePage = () => {

    const [movieData, setMovieData] = useState([]);
    const [movieImg, setMovieImg] = useState([]);
    const [movieVote, setMovieVote] = useState([]);
    const [movieDescription, setMovieDescription] = useState([]);
    const [statusMessage, setStatusMessage] = useState([]);

    const handleMovie = () => {

        const movie = Math.floor(Math.random() * 1200)
        console.log(movie);

        fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=3895cdfbe8f1bab08a6032d003acaf85`, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovieData(data.original_title);
                setMovieDescription(data.overview);
                setMovieImg(`https://image.tmdb.org/t/p/w500/${data.poster_path}`);
                setMovieVote(data.vote_average);
                setStatusMessage(data.status_message);
            })

            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <button className="movie_draw_button" onClick={handleMovie}>Losuj Film</button>
            <div style={{display: "flex"}}>
                <div style={{
                    backgroundImage: `url(${movieImg})`,
                    width: "5rem",
                    height: "5rem",
                    backgroundSize: "cover",
                    marginRight: "0.5rem"
                }}></div>
                <div style={{
                    fontSize: "2rem",
                    color: "orange",
                    marginTop: "0.5rem",
                    textAlign: "center"
                }}>{(statusMessage === "The resource you requested could not be found.") ? "Ups.. Losuj dalej" : movieData}</div>
            </div>
            <div>{movieDescription}</div>
            <div style={{
                fontSize: "3rem",
                color: "violet",
                marginTop: "1rem",
                textAlign: "center"
            }}>{movieVote}</div>
        </>
    );
};

export default MoviePage;