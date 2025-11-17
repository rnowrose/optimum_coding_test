import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface MovieInfo {
    title: string;
    year: string;
    image: string; 
}

export default function MovieThumbNail(props: MovieInfo) {
    return(
        <Card sx={{ 
            maxWidth: 300,
            height: '100%',
            backgroundColor: 'primary.main' , 
            color: 'primary.contrastText'
        }}>
          <CardMedia
            component="img"
            sx={{ 
                height: 400,
                objectFit: 'cover',
            }}
            image={props.image}
            title="movie image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }} >
              {props.title}
            </Typography>
            <Typography>
              {props.year}
            </Typography>
          </CardContent>
        </Card>
    )

}