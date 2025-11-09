import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box";

export default function MovieHeader(props) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        sx={{ objectFit: 'cover', height: 500}}
        image={props.image}
        title={props.title}
      />
      <CardContent sx={{ gap: 2}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Box sx={{  gap: 2 }}>
          {props.genre.map((gen: string) => {
            return <Chip label={gen} variant="outlined" />
          })}
        </Box>
        <Typography gutterBottom variant="body2" component="div">
          {props.releaseDate}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.overview}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Tagline: {props.tagline}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Favorites</Button>
      </CardActions>
    </Card>
  );
}