const { UserModel } = require("../models");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No User Found"
            });
        }

        return res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while fetching users",
            error: error.message
        });
    }
};

exports.getSingleUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while fetching user",
            error: error.message
        });
    }
};

exports.addNewUser = async (req, res) => {
    const { name, surname, email, subscriptionType, subscriptionDate } = req.body;

    if (!name || !surname || !email || !subscriptionType || !subscriptionDate) {
        return res.status(400).json({
            success: false,
            message: "All user fields are required"
        });
    }

    try {
        const newUser = await UserModel.create({
            name,
            surname,
            email,
            subscriptionType,
            subscriptionDate
        });

        const allUsers = await UserModel.find();

        return res.status(201).json({
            success: true,
            data: allUsers
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while adding user",
            error: error.message
        });
    }
};

exports.updateUserById = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            data: updatedUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while updating user",
            error: error.message
        });
    }
};















// const {BookModel, UserModel} = require("../models")

// exports.getAllUsers = async(req, res) => {
//     const users = await UserModel.find();

//     if(users.length === 0)
//         return res.status(404).json({
//             success: false,
//             messgae: "No User Found"
// })

//     return res.status(200).json({
//         success: true,
//         data: users
//     })
// };

// exports.getSingleUserById = async (req, res)=>{
//     const {id} = req.params;
//     // const book = books.find((each)=> each.id ===id);
//     const user = await UserModel.findById(id);
//     if(!user){
//         return res.status(404).json({
//     success: false,
//     message: "User Not Found"
//     })}

//     return res.status(200).json({
//         success: true,
//         data: user
//     })
// }


// exports.addNewUser = async (req, res)=>{
//     const {data} = req.body;

//     if(!data){
//         return res.status(400).json({
//             success: false,
//             message: "No data provided"
//         })
//     }

//     // const book = books.find((each)=> each.id === id);
//     await UserModel.create(data)
//     const allUsers = await UserModel.find();

//     // if(book){
//     //     return res.status(404).json({
//     //         success: false,
//     //         message: "Book exists with the given ID"
//     //     })
//     // }
//     // users.push({id, name, author, genre, price, publisher});
//     return res.status(201).json({
//         success: true,
//         data: allUsers
//     })
// }


// exports.updateUserById = async  (req, res)=>{
//      const {id} = req.params;
//      const {data} = req.body;

//     // const book = books.find((each)=> each.id ===id);
//     // if(!book){
//     //     return res.status(404).json({
//     // success: false,
//     // message: "book Not Found"
//     // })}

//     // const updateBook = books.map((each)=>{
//     //     if(each.id===id){
//     //         return {
//     //             ...each,
//     //             ...data
//     //         }
//     //     }
//     //     return each;
//     // })
    
//     const updateUser = await UserModel.findOneAndUpdate({_id: id}, data, {new: true})

//     return res.status(200).json({
//         success: true,
//         data: updateUser
//     })
// }

// // module.exports = {getAllBooks, getSingleBookById}