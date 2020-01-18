import React from 'react';
import './App.css';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css'
import FileUploadWithPreview from 'file-upload-with-preview'

class App extends React.Component{
  state={
    link: '',
    src: ''
  };

  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setImg = (src) => {
    this.setState({
      src
    });
    console.log('test')
  }
  componentDidMount(){
    var upload = new FileUploadWithPreview('GGG', {
      showDeleteButtonOnImages: true,
      text: {
          chooseFile: 'Custom Placeholder Copy',
          browse: 'Custom Button Copy',
          selectedCount: 'Custom Files Selected Copy',
      },
      images: {
          baseImage: '',
      }
    })
  }

  render(){

    return(
      <div className='App'>
        <header className='App-header'>
          <h1>Email Template Index</h1>
          <div className="custom-file-container" data-upload-id="GGG">
              <label>Upload File <a href="javascript:void(0)" className="custom-file-container__image-clear" title="Clear Image" style= {{textDecoration: 'none'}}>&times;</a></label>
  
              <label className="custom-file-container__custom-file" >
                  <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="*" multiple aria-label="Choose File" />
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                  <span className="custom-file-container__custom-file__custom-file-control"></span>
              </label>
              <div className="custom-file-container__image-preview"></div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
