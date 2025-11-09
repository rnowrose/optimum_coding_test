import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MovieAdditionalDetails(props) {
    return (
        <Card>
            <CardContent sx={{ gap: 2}}>
                <Typography variant="h6" component="div">
                    <strong>Budget:</strong> ${props.budget.toLocaleString()}
                </Typography>
                <Typography variant="h6" component="div">
                    <strong>Revenue:</strong> ${props.revenue.toLocaleString()}
                </Typography>
                <Typography variant="h6" component="div">
                    <strong>Runtime:</strong> {props.runtime} minutes
                </Typography>
            </CardContent>
        </Card>
    )
}