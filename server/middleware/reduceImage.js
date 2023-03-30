const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

const upload = multer({ dest: 'upload/' });

function resizeImage(req, res, next) {
    if (!req.file) {
        return next();
    }

    const { mimetype, path: imagePath } = req.file;
    if (mimetype.split('/')[0] === 'image') {
        const image = sharp(imagePath);
        image.metadata().then(metadata => {
            const maxWidth = 1024;
            const maxHeight = 1024;
            const ratio = Math.min(maxWidth / metadata.width, maxHeight / metadata.height);
            const newWidth = Math.round(metadata.width * ratio);
            const newHeight = Math.round(metadata.height * ratio);
            image
                .resize(newWidth, newHeight)
                .toFile(path.join('upload/', req.file.filename), (err, info) => {
                    if (err) {
                        return next(err);
                    }
                    req.file.path = info.path;
                    next();
                });
        });
    } else {
        next();
    }
}

module.exports = {
    upload,
    resizeImage,
}

