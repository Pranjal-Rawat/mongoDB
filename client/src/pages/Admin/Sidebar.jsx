import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';

export default function Sidebar({ wrappedComponent }) {
    return (
        <nav className='flex'>
            <aside className="bg-gray-900 text-white h-screen p-6 w-[250px] shadow-lg">
                <Typography variant="h5" component="h1" style={{ fontFamily: "serif" }} className="text-2xl font-bold mb-8 text-center ">
                    Admin Panel
                </Typography>

                <List className="space-y-6 mt-4">
                    <ListItem button component={Link} to="/admin"
                        className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1 m-7">
                        <Typography variant="body1" style={{ fontFamily: "serif" }} className="hover:text-blue-400">
                            Home
                        </Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/admin/add-book"
                        className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1 m-7">
                        <Typography variant="body1" style={{ fontFamily: "serif" }} className="hover:text-blue-400">
                            Add Book
                        </Typography>
                    </ListItem>

                    <ListItem button component={Link} to="/admin/delete-book"
                        className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1 m-7">
                        <Typography variant="body1" style={{ fontFamily: "serif" }} className="hover:text-blue-400">
                            Delete Book
                        </Typography>
                    </ListItem>

                    <ListItem button component={Link} to="/admin/update-book"
                        className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1 m-7">
                        <Typography variant="body1" style={{ fontFamily: "serif" }} className="hover:text-blue-400">
                            Update Book
                        </Typography>
                    </ListItem>

                    <ListItem button component={Link} to="/admin/view-books"
                        className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1 m-7" >
                        <Typography variant="body1" style={{ fontFamily: "serif" }} className="hover:text-blue-400">
                            View Books
                        </Typography>
                    </ListItem>

                    <ListItem button component={Link} to="/admin/view-users"
                        className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1 m-7">
                        <Typography variant="body1" style={{ fontFamily: "serif" }} className="hover:text-blue-400">
                            View Users
                        </Typography>
                    </ListItem>

                    <ListItem button component={Link} to="/admin/add-user"
                        className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1 m-7">
                        <Typography variant="body1" style={{ fontFamily: "serif" }} className="hover:text-blue-400">
                            Add User
                        </Typography>
                    </ListItem>
                </List>
            </aside>

            <main className="flex-grow p-6 bg-gray-100">
                {wrappedComponent}
            </main>
        </nav>
    );
}


// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Sidebar({ wrappedComponent }) {
//     return (
//         <nav className='flex '>
//             <aside className="bg-gray-800 text-white h-screen p-6 w-[230px] ">
//                 <Link to={'/admin'} className="text-2xl font-bold mb-20 cursor-pointer">Admin Panel</Link>
//                 <ul className="space-y-4 mt-6">
//                     <li>
//                         <Link to="/admin/add-book" className="hover:text-blue-400">Add Book</Link>
//                     </li>
//                     <li>
//                         <Link to="/admin/delete-book" className="hover:text-blue-400">Delete Book</Link>
//                     </li>
//                     <li>
//                         <Link to="/admin/update-book" className="hover:text-blue-400">Update Book</Link>
//                     </li>
//                     <li>
//                         <Link to="/admin/view-users" className="hover:text-blue-400">View Users</Link>
//                     </li>
//                     <li>
//                         <Link to="/admin/add-user" className="hover:text-blue-400">Add User</Link>
//                     </li>
//                 </ul>
//             </aside>
//             {wrappedComponent}
//         </nav>
//     );
// }



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { List, ListItem, Typography } from '@mui/material';

// export default function Sidebar({ wrappedComponent }) {
//     return (
//         <nav className='flex'>
//             <aside className="bg-gray-900 text-white h-screen p-6 w-[250px] shadow-lg">
//                 <Typography variant="h5" component="h1" className="text-2xl font-bold mb-8 text-center">
//                     Admin Panel
//                 </Typography>

//                 <List className="space-y-6 mt-4">
//                     <ListItem button component={Link} to="/admin/add-book"
//                         className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1">
//                         <Typography variant="body1" className="hover:text-blue-400">
//                             Add Book
//                         </Typography>
//                     </ListItem>

//                     <ListItem button component={Link} to="/admin/delete-book"
//                         className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1">
//                         <Typography variant="body1" className="hover:text-blue-400">
//                             Delete Book
//                         </Typography>
//                     </ListItem>

//                     <ListItem button component={Link} to="/admin/update-book"
//                         className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1">
//                         <Typography variant="body1" className="hover:text-blue-400">
//                             Update Book
//                         </Typography>
//                     </ListItem>

//                     <ListItem button component={Link} to="/admin/view-users"
//                         className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1">
//                         <Typography variant="body1" className="hover:text-blue-400">
//                             View Users
//                         </Typography>
//                     </ListItem>

//                     <ListItem button component={Link} to="/admin/add-user"
//                         className="hover:bg-gray-700 rounded-md p-3 transition duration-500 ease-in-out transform hover:scale-102 hover:translate-x-1">
//                         <Typography variant="body1" className="hover:text-blue-400">
//                             Add User
//                         </Typography>
//                     </ListItem>
//                 </List>
//             </aside>

//             <main className="flex-grow p-6 bg-gray-100">
//                 {wrappedComponent}
//             </main>
//         </nav>
//     );
// }
