import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { useAuth } from '../../AuthContext';

export default function ViewUsers() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const { BaseUrl } = useAuth();

    useEffect(() => {
        // Fetch the list of users from the backend
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/users`);
                setUsers(response.data.data); // Assuming response data is in `data.data`
            } catch (error) {
                console.error('Error fetching users:', error);
                setMessage('Failed to fetch users.');
            }
        };

        fetchUsers();
    }, [BaseUrl]);

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                View Users
            </Typography>

            {message && (
                <Typography variant="subtitle1" color="error" align="center">
                    {message}
                </Typography>
            )}

            <List>
                {users.length > 0 ? (
                    users.map((user) => (
                        <ListItem key={user._id} divider>
                            <ListItemText
                                primary={`${user.name} ${user.surname}`}
                                secondary={
                                    <>
                                        <Box>Email: {user.email}</Box>
                                        <Box>Issued Book: {user.issuedBook}</Box>
                                        <Box>Issued Date: {user.issuedDate}</Box>
                                        <Box>Return Date: {user.returnDate}</Box>
                                        <Box>Subscription Type: {user.subscriptionType}</Box>
                                        <Box>Subscription Date: {user.subscriptionDate}</Box>
                                    </>
                                }
                            />
                        </ListItem>
                    ))
                ) : (
                    <Typography variant="subtitle1" color="textSecondary" align="center">
                        No users found.
                    </Typography>
                )}
            </List>
        </Container>
    );
}