import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import axios from 'axios';
import Home from './components/Home';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/books" element={<Books/>}/>
//           <Route exact path="/help" element={<Help/>}/>
//           <Route exact path="/contact" element={<Contact/>}/>
//           <Route exact path="/login" element={<Login/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default function App() {

  const BaseUrl = 'http://localhost:8081';
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    genre: '',
    price: '',
    publisher: ''
  });

  useEffect(() => {
    //let p=fetch("http://localhost:8081/books")
    //p.then()=>
    fetch(`${BaseUrl}/books`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [BaseUrl]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}/books`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // After successfully submitting, you might want to reload the data or clear the form
      if (response.status === 201) {
        console.log('Book added:', response.data);
        // Optionally fetch updated list of books after adding new one
        fetchBooks();
        // Clear form
        setFormData({
          name: '',
          author: '',
          genre: '',
          price: '',
          publisher: ''
        });
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

    // Fetch books again after submission
    const fetchBooks = () => {
      fetch(`${BaseUrl}/books`)
        .then(response => response.json())
        .then(data => {
          setData(data.data);
        })
        .catch(error => console.error(error));
    };

  return (
    <>
      <Navbar />

      <Home />
      <div className='py-20'>
        <form onSubmit={handelSubmit} className='flex flex-col gap-2 w-[430px] p-5'>
          <TextField label="Name"></TextField>
          <TextField label="Author"></TextField>
          <TextField label="Genre"></TextField>
          <TextField label="Price"></TextField>
          <TextField label="Publisher" ></TextField>
          <button className='bg-black text-white px-5 py-2 rounded-[18px] hover:scale-105 transition-all duration-300' type='submit' >Submit</button>
        </form>
        <div className='py-12 my-12'>
        {
          data.map((i, key) => (
            <div className='text-lg font-serif font-bold' key={key} >
              Name : {i.name}<br />
              Author : {i.author}
            </div>
          ))
        }
      </div>
      </div>
      <Footer />
    </>
  )
}
