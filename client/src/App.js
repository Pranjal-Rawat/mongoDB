//THIS CODE IS FOR DIRECTLY SHOWING ADMIN PANEL
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Sidebar from './pages/Admin/Sidebar.jsx';
import { AuthProvider } from './AuthContext.jsx';
import { CircularProgress } from '@mui/material';

export default function App() {
    const Admin = React.lazy(() => import('./pages/Admin/Admin'));
    const AddBook = React.lazy(() => import('./pages/Admin/AddBook.jsx'));
    const DeleteBook = React.lazy(() => import('./pages/Admin/DeleteBook'));
    const UpdateBook = React.lazy(() => import('./pages/Admin/UpdateBook'));
    const ViewBooks = React.lazy(() => import('./pages/Admin/ViewBooks'));
    const ViewUsers = React.lazy(() => import('./pages/Admin/ViewUsers'));
    const AddUser = React.lazy(() => import('./pages/Admin/AddUser'));

    return (
        <AuthProvider>
            <React.Suspense fallback={<div className='h-screen w-screen flex justify-center items-center fixed z-50'><CircularProgress /></div>}>
                <BrowserRouter>
                    <Routes>
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

                        {/* If no route is matched, redirect to /admin */}
                        <Route path="*" element={<Sidebar wrappedComponent={<Admin />} />} />
                    </Routes>
                </BrowserRouter>
            </React.Suspense>
        </AuthProvider>
    );
}



// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL
// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL
// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL
// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL
// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL// THE CODE BELOW IS FOR HOME PAGE NOT FOR ADMIN PANEL


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './utils/ProtectedRoute';
// import Sidebar from './pages/Admin/Sidebar.jsx';
// import { AuthProvider } from './AuthContext.jsx';
// import { CircularProgress } from '@mui/material';

// export default function App() {
//     const Home = React.lazy(() => import('./pages/Home'));
//     const Admin = React.lazy(() => import('./pages/Admin/Admin'));
//     const AddBook = React.lazy(() => import('./pages/Admin/AddBook'));
//     const DeleteBook = React.lazy(() => import('./pages/Admin/DeleteBook'));
//     const UpdateBook = React.lazy(() => import('./pages/Admin/UpdateBook'));
//     const ViewBooks = React.lazy(() => import('./pages/Admin/ViewBooks'));
//     const ViewUsers = React.lazy(() => import('./pages/Admin/ViewUsers'));
//     const AddUser = React.lazy(() => import('./pages/Admin/AddUser'));

//     return (
//         <AuthProvider>
//             <React.Suspense fallback={<div className='h-screen w-screen flex justify-center items-center fixed z-50'><CircularProgress /></div>}>
//                 <BrowserRouter>
//                     <Routes>
//                         {/* Public Route */}
//                         <Route path='/' element={<Home />} />

//                         {/* Protected Admin Routes */}
//                         <Route element={<ProtectedRoute role={"admin"} />}>
//                             <Route path='/admin' element={<Sidebar wrappedComponent={<Admin />} />} />
//                             <Route path='/admin/add-book' element={<Sidebar wrappedComponent={<AddBook />} />} />
//                             <Route path='/admin/delete-book' element={<Sidebar wrappedComponent={<DeleteBook />} />} />
//                             <Route path='/admin/update-book' element={<Sidebar wrappedComponent={<UpdateBook />} />} />
//                             <Route path='/admin/view-books' element={<Sidebar wrappedComponent={<ViewBooks />} />} />
//                             <Route path='/admin/view-users' element={<Sidebar wrappedComponent={<ViewUsers />} />} />
//                             <Route path='/admin/add-user' element={<Sidebar wrappedComponent={<AddUser />} />} />
//                         </Route>
//                     </Routes>
//                 </BrowserRouter>
//             </React.Suspense>
//         </AuthProvider>
//     );
// }