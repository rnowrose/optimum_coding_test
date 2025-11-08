import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function TextFieldBox(props) {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <TextField label={props.label} variant="outlined" fullWidth />
        </Box>
    );
}