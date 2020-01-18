import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
    onDrop = (img) => {
        console.log(img)
        this.props.setImg(img);
    }
 
    render() {
        
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Upload Image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                singleImage={true}
            />
        );
    }
}

export default ImageUpload;
