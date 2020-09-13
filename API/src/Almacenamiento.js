import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/Contenedor')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() +'.png')
    }
  })
   
  const subir = multer({ storage: storage })

  module.exports = subir