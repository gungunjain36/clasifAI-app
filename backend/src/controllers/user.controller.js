// import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/ApiErrro.js";
// import { User } from "../models/user.model.js";
// import { ApiResponse } from "../utils/ApiResponse";

const registerUser = asyncHandler( async(req,res) => {

    const {fullname,email,username,password} = req.body;
    // if(fullName === ""){
    //     throw new ApiError(400, "Fullname is required")
    // }

    if(
        [fullname,email,username,password].some((field)=>{
            return field?.trim() === "";
        })
    ){
        throw new ApiError(400,"All fields are required")
    }


    const existedUser =  await User.findOne({
        $or: [{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"user with username or email already exists")
    }

    const user = await User.create({
        fullname,
        email,
        password,
        username: username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"Sommething went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )



})


export { registerUser } 


import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"; // Corrected the import for ApiError
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js"; // Added .js extension

// const registerUser = asyncHandler(async (req, res) => {
//     const { fullName, email, username, password } = req.body;

//     if (
//         [fullName, email, username, password].some((field) => {
//             return field?.trim() === "";
//         })
//     ) {
//         throw new ApiError(400, "All fields are required");
//     }

//     // Await the query to find an existing user
//     const existedUser = await User.findOne({
//         $or: [{ username }, { email }],
//     });

//     if (existedUser) {
//         throw new ApiError(409, "User with username or email already exists");
//     }

//     // Create the user
//     const user = await User.create({
//         fullName,
//         email,
//         password,
//         username: username.toLowerCase(),
//     });

//     // Find the created user without the password and refreshToken fields
//     const createdUser = await User.findById(user._id).select(
//         "-password -refreshToken"
//     );

//     if (!createdUser) {
//         throw new ApiError(500, "Something went wrong while registering the user");
//     }

//     return res.status(201).json(
//         new ApiResponse(200, createdUser, "User registered successfully")
//     );
// });

// export { registerUser };
