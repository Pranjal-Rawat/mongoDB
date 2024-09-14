import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

export default function DeleteBook() {
    const { BaseUrl } = useAuth();
    const [bookId, setBookId] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setBookId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`${BaseUrl}/books/${bookId}`);

            if (response.data.success) {
                setMessage('Book deleted successfully!');
                setBookId(''); // Reset the input field
            } else {
                setMessage('Failed to delete book. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Delete a Book
            </Typography>

            {message && (
                <Typography variant="subtitle1" color="primary" align="center">
                    {message}
                </Typography>
            )}

            <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 4 }} textAlign="center">
                    <TextField
                        label="Book ID"
                        variant="outlined"
                        fullWidth
                        required
                        value={bookId}
                        onChange={handleChange}
                    />
                    <Box sx={{ mt: 4 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Delete Book
                        </Button>
                    </Box>
                </Box>
            </form>
        </Container>
    );
}