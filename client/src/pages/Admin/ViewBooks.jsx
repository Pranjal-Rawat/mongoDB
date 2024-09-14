import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

export default function ViewBooks() {
    const { BaseUrl } = useAuth();
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/books`);
                if (response.data.success) {
                    setBooks(response.data.data);
                } else {
                    setError('Failed to fetch books.');
                }
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('An error occurred while fetching books.');
            }
        };

        fetchBooks();
    }, [BaseUrl]);

    if (error) {
        return (
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    Error
                </Typography>
                <Typography variant="body1" color="error" align="center">
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                List of Books
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Publisher</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow key={book._id}>
                                <TableCell>{book._id}</TableCell>
                                <TableCell>{book.name}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>{book.genre}</TableCell>
                                <TableCell>{book.price}</TableCell>
                                <TableCell>{book.publisher}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}