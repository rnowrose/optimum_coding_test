import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

interface MovieAdditionalDetailsProps {
    budget: number;
    revenue: number;
    runtime: number;
    status: string;
}

export default function MovieAdditionalDetails(props: MovieAdditionalDetailsProps) {
    return (
        <Card>
            <CardHeader title="Movie Details" sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}  />
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
                <Typography variant="h6" component="div">
                    <strong>Status:</strong> {props.status}
                </Typography>
            </CardContent>
        </Card>
    )
}