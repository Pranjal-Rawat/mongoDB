import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

export default function AddUser() {

    const { BaseUrl } = useAuth();
    const [user, setUser] = useState({
        id: '',
        name: '',
        surname: '',
        email: '',
        issuedBook: '',
        issuedDate: '',
        returnDate: '',
        subscriptionType: '',
        subscriptionDate: ''
    });

    const [message, setMessage] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Submit form to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the backend with the user data
            const response = await axios.post(`${BaseUrl}/users`, user);

            if (response.data.success) {
                setMessage('User added successfully!');
                // Optionally, you can reset the form here
                setUser({
                    id: '',
                    name: '',
                    surname: '',
                    email: '',
                    issuedBook: '',
                    issuedDate: '',
                    returnDate: '',
                    subscriptionType: '',
                    subscriptionDate: ''
                });
            } else {
                setMessage('Failed to add user. Please try again.');
            }
        } catch (error) {
            console.error('Error adding user:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Add a New User
            </Typography>

            {message && (
                <Typography variant="subtitle1" color="primary" align="center">
                    {message}
                </Typography>
            )}

            <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        {/* ID */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="User ID"
                                name="id"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.id}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.name}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Surname */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Surname"
                                name="surname"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.surname}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Issued Book */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issued Book ID"
                                name="issuedBook"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.issuedBook}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Issued Date */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issued Date"
                                name="issuedDate"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.issuedDate}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Return Date */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Return Date"
                                name="returnDate"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.returnDate}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Subscription Type */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Subscription Type"
                                name="subscriptionType"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.subscriptionType}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Subscription Date */}
                        <Grid item xs={12}>
                            <TextField
                                label="Subscription Date"
                                name="subscriptionDate"
                                variant="outlined"
                                fullWidth
                                required
                                value={user.subscriptionDate}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>

                    {/* Submit Button */}
                    <Box sx={{ mt: 4 }} textAlign="center">
                        <Button type="submit" variant="contained" color="primary">
                            Add User
                        </Button>
                    </Box>
                </Box>
            </form>
        </Container>
    );
}