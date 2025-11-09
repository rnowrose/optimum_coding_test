import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router";
import { useUserStore } from "../../store/userStore";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const login = useUserStore((state) => state.login);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        login(username, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                setError(error.message || 'Invalid username or password');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}>
        <Card>
            <CardContent>
                <Typography variant="h5">Login</Typography>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                <form onSubmit={handleSubmit}>
                        <TextField 
                            label="Username"
                            variant="outlined" 
                            fullWidth 
                            margin="normal"
                            value={username}  
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                            data-cy="login-username-input"
                        />
                        <TextField 
                            label="Password" 
                            type="password" 
                            variant="outlined" 
                            fullWidth 
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            data-cy="login-password-input"
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit"
                            fullWidth
                            disabled={loading}
                            sx={{ mt: 2 }}
                            data-cy="login-submit-button"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                </form>
                <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                        Don't have an account?{' '}
                        <Link 
                            component="button"
                            variant="body2"
                            onClick={() => navigate('/register')}
                            sx={{ cursor: 'pointer' }}
                            data-cy="sign-up"
                        >
                            Sign up
                        </Link>
                    </Typography>
            </CardContent>
        </Card>
        </Box>
    )
}