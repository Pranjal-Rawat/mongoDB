const express = require("express");
const { UserModel } = require("../models");
const { getAllUsers, getSingleUserById, addNewUser, updateUserById } = require("../controllers/user-controller");

const router = express.Router();

/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Parameters: None
 */
router.get("/", getAllUsers);

/**
 * Route: /users/:id
 * Method: GET
 * Description: Get user by their id
 * Access: Public
 * Parameters: Id
 */
router.get("/:id", getSingleUserById);

/**
 * Route: /users
 * Method: POST
 * Description: Create a new user
 * Access: Public
 * Parameters: None
 */
router.post("/", addNewUser);

/**
 * Route: /users/:id
 * Method: PUT
 * Description: Update a user by their ID
 * Access: Public
 * Parameters: ID
 */
router.put('/:id', updateUserById);

/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by their ID
 * Access: Public
 * Parameters: ID
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the user by ID
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Fetch all remaining users
        const allUsers = await UserModel.find();

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: allUsers
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while deleting user",
            error: error.message
        });
    }
});

module.exports = router;


























// const express = require("express");
// const {users} = require("../data/users.json")

// const {UserModel, BookModel} = require("../models");
// const { getAllUsers, getSingleUserById, addNewUser, updateUserById } = require("../controllers/user-controller");

// const router = express.Router();
// /**
//  * Route: /users
//  * Method: GET
//  * Description: Get all users
//  * Access: Public
//  * Parameters: None
//  */
// // router.get("/", (req, res)=>{
// //     res.status(200).json({
// //         success: true,
// //         data: users,
// //     })
// // })
// router.get("/", getAllUsers)
// /**
//  * Route: /users/:id
//  * Method: GET
//  * Description: Get user by their id
//  * Access: Public
//  * Parameters: Id
//  */
// // router.get("/:id", (req, res)=>{
// //     const {id} = req.params;
// //     const user = users.find((each)=> each.id ===id);
// //     if(!user){
// //         return res.status(404).json({
// //     success: false,
// //     message: "User Not Found"
// //     })}

// //     return res.status(200).json({
// //         success: true,
// //         data: user
// //     })
// // })
// router.get("/:id", getSingleUserById)
// /**
//  * Route: /users
//  * Method: POST
//  * Description: Create a new user
//  * Access: Public
//  * Parameters: None
//  */
// // router.post("/", (req, res)=>{
// //     const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;

// //     const user = users.find((each)=> each.id === id);

// //     if(user){
// //         return res.status(404).json({
// //             success: false,
// //             message: "User exists with the given ID"
// //         })
// //     }
// //     users.push({id, name, surname, email, subscriptionType, subscriptionDate});
// //     return res.status(201).json({
// //         success: true,
// //         data: users
// //     })
// // })
// router.post("/", addNewUser)
// /**
//  * Route: /users/:id
//  * Method: PUT
//  * Description: Updating a user by their ID
//  * Access: Public
//  * Parameters: ID
//  */
// // router.put('/:id', (req, res)=>{
// //      const {id} = req.params;
// //      const {data} = req.body;

// //     const user = users.find((each)=> each.id ===id);
// //     if(!user){
// //         return res.status(404).json({
// //     success: false,
// //     message: "User Not Found"
// //     })}

// //     const updateUser = users.map((each)=>{
// //         if(each.id===id){
// //             return {
// //                 ...each,
// //                 ...data
// //             }
// //         }
// //         return each;
// //     })
    
// //     return res.status(200).json({
// //         success: true,
// //         data: updateUser
// //     })
// // })
// router.put('/:id', updateUserById)
// /**
//  * Route: /users/:id
//  * Method: DELETE
//  * Description: Deleting a user by their ID
//  * Access: Public
//  * Parameters: ID
//  */
// router.delete("/:id", (req, res)=>{
//      const {id} = req.params;

//     const user = users.find((each)=> each.id ===id);
//     if(!user){
//         return res.status(404).json({
//     success: false,
//     message: "User Not Found"
//     })}

// // var arr = ["abc", "rohan", "rohit"];
//             // 0,      1,       2

//     const index = users.indexOf(user);
//     //  const index = users.reduce((each, i)=>{
//     //     if(each.id===id){
//     //         return i  
//     //     }
//     //     console.log(i)
//     // })
//     // console.log(index)
//     users.splice(index,1);

//     return res.status(200).json({
//         success: true,
//         data: users
//     })
// })
// // var arr = ["abc", "rohan", "rohit"];
//             // 0,      1,       2

// module.exports = router;