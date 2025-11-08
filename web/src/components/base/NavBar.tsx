import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';

export default function NavBar () {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                 <Typography variant="h6" component="div">
                        Movie App
                    </Typography>
                   <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                        <SearchBar />
                    </Box>       
                <Button color="inherit">Login</Button>
                </Toolbar>
        </AppBar>
        </Box>

    )
}