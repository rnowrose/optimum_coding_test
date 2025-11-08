import Button from "@mui/material/Button";
import type { Movies, ProductionCompany } from "../../domain/Movies";
import Box from "@mui/material/Box";
import MovieHeader from "./MovieHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

export default function MovieDetailsInfo(props) { 
    return (
       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 2 }}>  
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <MovieHeader
                image={`${IMAGE_URL}${props.posterPath}`}
                title={props.title}
                releaseDate={props.releaseDate}
                overview={props.overview}
            />
            <div>
                <h3>Production Companies:</h3>
                <List>
                    {props.productionCompanies.map((company: ProductionCompany) => (
                        <ListItem key={company.id} 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center',
                                    width: 'auto',
                                    gap: 2
                                }}>
                            {company.logo && <img src={`${IMAGE_URL}${company.logo}`} alt={company.name} style={{ maxHeight: '50px', marginRight: '10px' }} />}
                            {company.name} ({company.originCountry})
                        </ListItem>
                    ))}
                </List>
            </div>
        </Box>
        
        </Box>
    );
}   