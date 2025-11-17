import Box from "@mui/material/Box";
import MovieHeader from "./MovieHeader";
import MovieAdditionalDetails from "./MovieAdditionalDetails";
import ProductionCompanies from "./ProductionCompanies";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export default function MovieDetailsInfo(props) { 
    return (
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 2 }}>  
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'center' }}>
            <MovieHeader
                image={`${IMAGE_URL}${props.posterPath}`}
                title={props.title}
                genre={props.genre}
                releaseDate={props.releaseDate}
                overview={props.overview}
                tagline={props.tagline}
            />
            <ProductionCompanies
                productionCompanies={props.productionCompanies}
                image={IMAGE_URL}
                title="Production Company"
            />
        </Box>
        <Box>
            <MovieAdditionalDetails 
                budget={props.budget}
                revenue={props.revenue}
                runtime={props.runtime}
                status={props.status}
            />
        </Box>


        </Box>
    );
}   