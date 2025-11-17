import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";

export default function MovieHeader(props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        sx={{ objectFit: 'cover', height: 500}}
        image={props.image}
        title={props.title}
      />
      <CardHeader title={props.title} sx={{ gap: 2, backgroundColor: 'primary.main', color: 'primary.contrastText', fontWeight: 'bold'  }}>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
      </CardHeader>
      <CardContent sx={{ gap: 2}}>
        <Box sx={{  gap: 2 }}>
          {props.genre.map((gen: string) => {
            return <Chip sx={{ backgroundColor : 'primary.main' , color: 'primary.contrastText' }} label={gen} variant="outlined" />
          })}
        </Box>
        <Divider sx={{ mx: -2, my: 2 }} />
        <Typography sx={{  gap: 2 }} gutterBottom variant="body2">
          <b>Release Date:</b> {formatDate(props.releaseDate)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.overview}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Tagline: {props.tagline}
        </Typography>
      </CardContent>
              <Divider sx={{ mx: -2, my: 2 }} />

      <CardActions>
        <Button size="small" variant="contained">Add to Favorites</Button>
      </CardActions>
    </Card>
  );
}