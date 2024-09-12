import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import { useAuth } from '../../AuthContext';

export default function DeleteBook() {
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState('');
    const {BaseUrl} = useAuth();
    useEffect(() => {
        // Fetch the list of books from the backend
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/books`);
                setBooks(response.data.data);
            } catch (error) {
                console.error('Error fetching books:', error);
                setMessage('Failed to fetch books.');
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BaseUrl}/books/${id}`);
            // Remove the deleted book from the state
            setBooks(books.filter(book => book._id !== id));
            setMessage('Book deleted successfully.');
        } catch (error) {
            console.error('Error deleting book:', error);
            setMessage('Failed to delete book.');
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

            <List>
                {books.map((book) => (
                    <ListItem key={book._id} divider>
                        <ListItemText
                            primary={book.name}
                            secondary={`Author: ${book.author}, Genre: ${book.genre}, Price: ${book.price}, Publisher: ${book.publisher}`}
                        />
                        <Box>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => handleDelete(book._id)}
                            >
                               
                                Delete
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
