import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import type { SignUp } from "../../domain/Users";
import { register } from "../../api/user.api";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router";


export default function Register () {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
      const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const navigate = useNavigate();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setLoading(true);
        
         const signUpData: SignUp = {
            firstName,
            lastName,
            email,
            username,
            password
        };

        register(signUpData)
            .then((data) => {
                setMessage(data.message);
                navigate('/login');
            })
            .catch((error) => {
                setError(error.message);
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
            <Card sx={{ maxWidth: 500, width: '100%' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom align="center">
                        Register
                    </Typography>

                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        data-cy="register-firstname-input"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        data-cy="register-lastname-input"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-cy="register-email-input"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        data-cy="register-username-input"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        data-cy="register-password-input"
                        />
                    <Button variant="contained" type="submit" disabled={loading} fullWidth
                        sx={{ mt: 2 }}>
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                    </Box>
   
                </CardContent>
            </Card>
        </Box>
    );
}