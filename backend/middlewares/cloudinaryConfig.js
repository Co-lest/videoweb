import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Set up Cloudinary storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'your-folder-name', // optional folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'], // allowed file formats
    transformation: [{ width: 500, height: 500, crop: 'limit' }] // optional transformations
  }
});

export default { cloudinary, storage };