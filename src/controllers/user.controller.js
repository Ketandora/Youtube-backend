import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";

const registerUser = asyncHandler( async(req, res) => {
    
    const {fullName, email, username, password} = req.body
    console.log("ajf", email);

    if(
        [!fullName || !email || !username || !password].some((feild) => feild?.trim() === "")
    )
    {
        throw new ApiError(400, " all feilds are required ")
    }
});

export { registerUser };