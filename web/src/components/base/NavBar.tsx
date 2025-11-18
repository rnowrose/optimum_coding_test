import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { useUserStore } from '../../store/userStore';
import AvatarDropdown from '../Users/AvatarDropdown';
import { stringAvatar } from '../../util/stringParser';

export default function NavBar () {
    const navigate = useNavigate();
    const userStore = useUserStore();

    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleLogoutClick = () => {
        if (userStore.loginInfo.user_id) {
            userStore.logout(userStore.loginInfo.user_id);
        }
    };
    return (
        <Box>
            <AppBar position='static' color='primary'>
                <Toolbar>
                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Movie App
                    </Typography>
                {userStore.isLoggedin ?                 
                <AvatarDropdown 
                    fullname={stringAvatar(userStore.loginInfo.full_name || '')} 
                    onLogout={handleLogoutClick} 
                />
                :
                <Button color="inherit" onClick={handleLoginClick}>Login</Button>}
                </Toolbar>
        </AppBar>
        </Box>

    )
}