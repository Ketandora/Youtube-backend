import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)  return null

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        console.log("file is uploaded ", response.url);

        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the local saved one
    }
}



export {uploadOnCloudinary}


// cloudinary.v2.uploader.upload(
//   "https://imgs.search.brave.com/aNAP1ybKW68ukN1LxlT3BhllOLHkVwQ0dXMttLSWHo4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy95b3VuZy13b21h/bi1lbmpveWluZy1t/b21lbnQtYW5kLWxv/b2tpbmctb3Zlci10/aGUtc2FuLWZyYW5j/aXNjby1mcmVlLXBo/b3RvLmpwZz93PTYw/MCZxdWFsaXR5PTgw",
//   {
//     public_id: "nature_landscape"
//   },
//   function(error, result) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(result);
//     }
//   }
// );