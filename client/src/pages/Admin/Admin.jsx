import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2">
          Welcome to the Admin Panel
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/add-book" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" fullWidth sx={{ py: 2 }}>
              Add Book
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/delete-book" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary" fullWidth sx={{ py: 2 }}>
              Delete Book
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/update-book" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="success" fullWidth sx={{ py: 2 }}>
              Update Book
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/view-users" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="info" fullWidth sx={{ py: 2 }}>
              View Users
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/add-user" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="warning" fullWidth sx={{ py: 2 }}>
              Add User
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}