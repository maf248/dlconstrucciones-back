function assetTypeSetter (type) {
    const imageFormats = ["image/jpg","image/jpeg","image/png"];
    const videoFormats = ["video/mp4","video/quicktime","video/x-msvideo","video/x-ms-wmv","video/x-matroska"];
    if (imageFormats.includes(type)) {
        return "image"
    } else if (videoFormats.includes(type)) {
        return "video"
    } 
    return undefined;
};

module.exports = assetTypeSetter;