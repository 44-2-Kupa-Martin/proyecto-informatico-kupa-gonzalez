const sizeOf = require('image-size')
const fs = require("fs")
const path = require("path")

sizeOf('images/funny-cats.png', function (err, dimensions, cb) {
    if( dimensions.width > 300 && dimensions.height > 300)
        {
        return  cb('the image must be 300x300 or lower')
    } else{
      return cb(null, true)
    } 
})

const currentPath = path.join(__dirname, "funny-cats.png")
const newPath = path.join(__dirname, "images", "funny-cats.png")

fs.rename(currentPath, newPath, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully moved the file!")
  }
})
