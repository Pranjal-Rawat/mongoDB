const { BookModel, UserModel } = require("../models")

exports.getAllBooks = async (req, res) => {
    const books = await BookModel.find();

    if (books.length === 0)
        return res.status(404).json({
            success: false,
            messgae: "No Book Found"
        })

    return res.status(200).json({
        success: true,
        data: books
    })
};

exports.getSingleBookById = async (req, res) => {
    const { id } = req.params;
    // const book = books.find((each)=> each.id ===id);
    const book = await BookModel.findById(id);
    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book Not Found"
        })
    }

    return res.status(200).json({
        success: true,
        data: book
    })
}


exports.addNewBook = async (req, res) => {
    try {
        const { name, author, genre, price, publisher } = req.body;

        // Check if all necessary data is provided
        if (!name || !author || !genre || !price || !publisher) {
            return res.status(400).json({
                success: false,
                message: "All book fields are required"
            });
        }

        // Create a new book document in the database
        const newBook = await BookModel.create({
            name,
            author,
            genre,
            price,
            publisher
        });
        newBook.save();

        // Fetch all books after the new one is added
        const allBooks = await BookModel.find();

        return res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: allBooks
        });
    } catch (error) {
        // Handle any errors during the process
        console.error("Error adding book:", error);
        return res.status(500).json({
            success: false,
            message: "Server error while adding book",
            error: error.message
        });
    }
};



exports.updateBookById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    // const book = books.find((each)=> each.id ===id);
    // if(!book){
    //     return res.status(404).json({
    // success: false,
    // message: "book Not Found"
    // })}

    // const updateBook = books.map((each)=>{
    //     if(each.id===id){
    //         return {
    //             ...each,
    //             ...data
    //         }
    //     }
    //     return each;
    // })

    const updateBook = await BookModel.findOneAndUpdate({ _id: id }, data, { new: true })

    return res.status(200).json({
        success: true,
        data: updateBook
    })
}

// module.exports = {getAllBooks, getSingleBookById}