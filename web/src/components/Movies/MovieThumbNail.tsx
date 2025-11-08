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
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {props.year}
            </Typography>
          </CardContent>
        </Card>
    )

}