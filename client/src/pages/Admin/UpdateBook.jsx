import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, TextField, List, ListItem, ListItemText, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useAuth } from '../../AuthContext';

export default function UpdateBook() {
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState('');
    const [selectedBook, setSelectedBook] = useState(null); // Book to be updated
    const [open, setOpen] = useState(false); // Dialog state
    const { BaseUrl } = useAuth();

    useEffect(() => {
        // Fetch the list of books from the backend
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/books`);
                setBooks(response.data.data);
            } catch (error) {
                console.error('Error fetching books:', error);
                setMessage('No Books Found!');
            }
        };

        fetchBooks();
    }, [BaseUrl]);

    const handleOpen = (book) => {
        setSelectedBook(book);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedBook(null);
        setOpen(false);
    };

    const handleChange = (e) => {
        setSelectedBook({
            ...selectedBook,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${BaseUrl}/books/${selectedBook._id}`, selectedBook);
            setMessage('Book updated successfully.');
            setBooks(books.map(book => book._id === selectedBook._id ? selectedBook : book));
            handleClose();
        } catch (error) {
            console.error('Error updating book:', error);
            setMessage('Failed to update book.');
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Update a Book
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
                                color="primary"
                                onClick={() => handleOpen(book)}
                            >
                                Update
                            </Button>
                        </Box>
                    </ListItem>
                ))}
            </List>

            {/* Dialog for updating book */}
            {selectedBook && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Update Book</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Book Title"
                            name="name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={selectedBook.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Author"
                            name="author"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={selectedBook.author}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Genre"
                            name="genre"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={selectedBook.genre}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Price"
                            name="price"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={selectedBook.price}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Publisher"
                            name="publisher"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={selectedBook.publisher}
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleUpdate} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Container>
    );
}