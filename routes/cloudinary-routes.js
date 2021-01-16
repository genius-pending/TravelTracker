const express = require('express');
const cloudinary = require('cloudinary').v2; 
const multer = require('multer');
const router = express.Router(); 
const upload = multer();

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/photos/upload"), upload.single('image'), (req,res) => {
  const cld_upload_stream = cloudinary.uploader.upload_stream(
    {
      folder: 'images',
    },
    (err, result) => {
      if (err)
        return res.status(500).json({
          success: false,
          payload: { message: 'Unable to upload image' },
        });
      return res.json({ success: false, payload: result });
    }
  );
  streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
};

module.exports = router;

//thoughts: our front end will make a call to this url on submission and wait for the response - then it will take the result (see line 25) and add the urlor id of the imageuploaded to the database
