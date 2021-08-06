//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//images
import NoImage from "../images/no_image.jpg";

//Components
import { HeroImage } from "./HeroImage/HeroImage";
import { Grid } from "./Grid/Grid";
import { Thumb } from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import { SearchBar } from "./SearchBar/Search";
import { LoadButton } from "./LoadButton/LoadButton";
export const Home = () => {

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
    console.log(state);

    if(error){
        return <div>Something went wrong... Please try again later</div>
    }
    return (
        <>
            {(state.page != 0 && state.results[0])? <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />: null }

            <SearchBar setSearchTerm = {setSearchTerm}/>

            {(state.page != 0)?             
                <Grid header = {searchTerm? 'Search Results':'Popular Movies'}>
                    {state.results.map(movie => (
                        <Thumb 
                            key = {movie.id} 
                            image= {movie.poster_path? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                            clickable = {true}
                            movieId = {movie.id}
                        />
                    ))}
                </Grid>

                :null
            }

            {loading && <Spinner />}

            {state.page < state.total_pages && !loading && (
                <LoadButton text = "Load More" callback = {() => setIsLoadingMore(true)}/>
            )}
        </>
    );
}