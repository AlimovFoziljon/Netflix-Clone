import request from "../api/api";
import FilmsCategory from "./FilmsCategory";
import FilmsHero from "./FilmsHero";

const Films = () => {
    return (
        <div className="films">
            <FilmsHero />
            <FilmsCategory 
                isLargeRow
                title={"Netflix originals"}
                movie_request={request.fetchNetflixOriginals}
            />
            <FilmsCategory 
                title={"Trending Now"}
                movie_request={request.fetchTrending}
            />
            <FilmsCategory 
                isLargeRow
                title={"Comedy"}
                movie_request={request.fetchComedyMovies}
            />
            <FilmsCategory 
                title={"Action"}
                movie_request={request.fetchActionMovies}
            />
            <FilmsCategory
                isLargeRow
                title={"Documentaires"}
                movie_request={request.fetchDocumentaries}
            />
            <FilmsCategory 
                title={"Horror"}
                movie_request={request.fetchHorrorMovies}
            />
            <FilmsCategory
                isLargeRow
                title={"Romance"}
                movie_request={request.fetchRomanceMovies}
            />
            <FilmsCategory 
                title={"Top rated"}
                movie_request={request.fetchTopRated}
            />
        </div>
    );
}

export default Films;