import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import Sidebar from './pages/Admin/Sidebar.jsx';
import { AuthProvider } from './AuthContext.jsx';
import { CircularProgress } from '@mui/material';



export default function App() {
    const Home = React.lazy(() => import('./pages/Home.jsx'));
    const Admin = React.lazy(() => import('./pages/Admin/Admin.jsx'));
    const AddBook = React.lazy(() => import('./pages/Admin/AddBook.jsx'));
    const DeleteBook = React.lazy(() => import('./pages/Admin/DeleteBook.jsx'));
    const UpdateBook = React.lazy(() => import('./pages/Admin/UpdateBook.jsx'));
    const ViewBooks = React.lazy(() => import('./pages/Admin/ViewBooks.jsx'));
    const ViewUsers = React.lazy(() => import('./pages/Admin/ViewUsers.jsx'));
    const AddUser = React.lazy(() => import('./pages/Admin/AddUser.jsx'));

    return (
        <AuthProvider>
            <React.Suspense fallback={<div className='h-screen w-screen flex justify-center items-center fixed z-50'><CircularProgress /></div>}>
                <BrowserRouter>
                    <Routes>
                        {/* Public Route */}
                        <Route path='/' element={<Home />} />

                        {/* Protected Admin Routes */}
                        <Route element={<ProtectedRoute role={"admin"} />}>
                            <Route path='/admin' element={<Sidebar wrappedComponent={<Admin />} />} />
                            <Route path='/admin/add-book' element={<Sidebar wrappedComponent={<AddBook />} />} />
                            <Route path='/admin/delete-book' element={<Sidebar wrappedComponent={<DeleteBook />} />} />
                            <Route path='/admin/update-book' element={<Sidebar wrappedComponent={<UpdateBook />} />} />
                            <Route path='/admin/view-books' element={<Sidebar wrappedComponent={<ViewBooks />} />} />
                            <Route path='/admin/view-users' element={<Sidebar wrappedComponent={<ViewUsers />} />} />
                            <Route path='/admin/add-user' element={<Sidebar wrappedComponent={<AddUser />} />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </React.Suspense>
        </AuthProvider>
    );
}