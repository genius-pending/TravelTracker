const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
require('dotenv').config();
const app = express();
const port = 3000;

// cloudinary configuration
cloudinary.config({
  cloud_Name: process.env.CLOUDINARY_CLOUD_NAME,
  api_Key: process.env.CLOUDINARY_API_KEY,
  api_Secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/', (req, res) => res.json({ message: 'Hello World!' }));

const upload = multer();

app.post('/photos/upload', upload.single('image'), (req, res) => {
  const cld_Upload_Stream = cloudinary.uploader.upload_stream(
    {
      folder: 'images',
    },
    (err, result) => {
      if(err)
        return res.status(500).json({
          success: false,
          payload: { message: 'Unable to upload image' },
        });
      return res.json({ success: false, payload: result });
    }
  );
  streamifier.createReadStream(req.file.buffer).pipe(cld_Upload_Stream);
});

app.listen(port, () =>
  console.log(`This is the beginning of the Node File Upload App`)
);