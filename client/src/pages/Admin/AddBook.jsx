import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

export default function AddBook() {

    const { BaseUrl } = useAuth();
    const [book, setBook] = useState({
        name: '',
        author: '',
        genre: '',
        price: '',
        publisher: ''
    });

    const [message, setMessage] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    };

    // Submit form to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the backend with the book data
            const response = await axios.post(`${BaseUrl}/books`, book);

            if (response.data.success) {
                setMessage('Book added successfully!');
                // Optionally, you can reset the form here
                setBook({
                    name: '',
                    author: '',
                    genre: '',
                    price: '',
                    publisher: ''
                });
            } else {
                setMessage('Failed to add book. Please try again.');
            }
        } catch (error) {
            console.error('Error adding book:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Add a New Book
            </Typography>

            {message && (
                <Typography variant="subtitle1" color="primary" align="center">
                    {message}
                </Typography>
            )}

            <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={2}>
                        {/* Book Title */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Book Title"
                                name="name"
                                variant="outlined"
                                fullWidth
                                required
                                value={book.name}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Author */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Author"
                                name="author"
                                variant="outlined"
                                fullWidth
                                required
                                value={book.author}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Genre */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Genre"
                                name="genre"
                                variant="outlined"
                                fullWidth
                                required
                                value={book.genre}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Price */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Price"
                                name="price"
                                variant="outlined"
                                fullWidth
                                required
                                value={book.price}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Publisher */}
                        <Grid item xs={12}>
                            <TextField
                                label="Publisher"
                                name="publisher"
                                variant="outlined"
                                fullWidth
                                required
                                value={book.publisher}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>

                    {/* Submit Button */}
                    <Box sx={{ mt: 4 }} textAlign="center">
                        <Button type="submit" variant="contained" color="primary">
                            Add Book
                        </Button>
                    </Box>
                </Box>
            </form>
        </Container>
    );
}
