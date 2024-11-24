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
        {/* Add Book */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/add-book" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 2,
                background: 'linear-gradient(45deg, #FF6F61 30%, #FF8E53 90%)',
                color: 'white',
                transition: 'background 0.5s ease, transform 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF8E53 30%, #FF6F61 90%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Add Book
            </Button>
          </Link>
        </Grid>

        {/* Delete Book */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/delete-book" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 2,
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
                transition: 'background 0.5s ease, transform 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Delete Book
            </Button>
          </Link>
        </Grid>

        {/* Update Book */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/update-book" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 2,
                background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
                color: 'white',
                transition: 'background 0.5s ease, transform 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #81C784 30%, #4CAF50 90%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Update Book
            </Button>
          </Link>
        </Grid>

        {/* View Users */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/view-users" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 2,
                background: 'linear-gradient(45deg, #2196F3 30%, #64B5F6 90%)',
                color: 'white',
                transition: 'background 0.5s ease, transform 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #64B5F6 30%, #2196F3 90%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              View Users
            </Button>
          </Link>
        </Grid>

        {/* Add User */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/add-user" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 2,
                background: 'linear-gradient(45deg, #FFB74D 30%, #FF9800 90%)',
                color: 'white',
                transition: 'background 0.5s ease, transform 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF9800 30%, #FFB74D 90%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Add User
            </Button>
          </Link>
        </Grid>

        {/* View Book */}
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/admin/view-book" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 2,
                background: 'linear-gradient(45deg, #673AB7 30%, #9575CD 90%)',
                color: 'white',
                transition: 'background 0.5s ease, transform 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #9575CD 30%, #673AB7 90%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              View Book
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
































// import React from 'react';
// import { Container, Typography, Box, Button, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Admin() {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 5 }}>
//       <Typography variant="h3" component="h1" gutterBottom>
//         Admin Dashboard
//       </Typography>

//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h5" component="h2">
//           Welcome to the Admin Panel
//         </Typography>
//       </Box>

//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={4}>
//           <Link to="/admin/add-book" style={{ textDecoration: 'none' }}>
//             <Button variant="contained" color="primary" fullWidth sx={{ py: 2 }}>
//               Add Book
//             </Button>
//           </Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Link to="/admin/delete-book" style={{ textDecoration: 'none' }}>
//             <Button variant="contained" color="secondary" fullWidth sx={{ py: 2 }}>
//               Delete Book
//             </Button>
//           </Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Link to="/admin/update-book" style={{ textDecoration: 'none' }}>
//             <Button variant="contained" color="success" fullWidth sx={{ py: 2 }}>
//               Update Book
//             </Button>
//           </Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Link to="/admin/view-users" style={{ textDecoration: 'none' }}>
//             <Button variant="contained" color="info" fullWidth sx={{ py: 2 }}>
//               View Users
//             </Button>
//           </Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Link to="/admin/add-user" style={{ textDecoration: 'none' }}>
//             <Button variant="contained" color="warning" fullWidth sx={{ py: 2 }}>
//               Add User
//             </Button>
//           </Link>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }