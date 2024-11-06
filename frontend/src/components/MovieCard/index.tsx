import { Link } from "react-router-dom";
import MoviesScore from "../MoviesScore";

function MovieCard(){

    const movies = {
        id: 1,
        Image: "https://th.bing.com/th/id/OIP.iCObhs22oMw5Tk6qk5yVRAHaLG?rs=1&pid=ImgDetMain",
        title: "transformers one",
        cont:2,
        score: 4.0
    };

    return(

        <div>
            <img className="movies-card-image" 
            src={movies.Image} 
            alt={movies.title} 
            />

            <h3>{movies.title}</h3>
            <MoviesScore />
            <Link to={'/form/${movies.id'}>

            <div className="movies-btn">Avaliar</div>
            
            </Link>
        </div>

    );
}

export default MovieCard;