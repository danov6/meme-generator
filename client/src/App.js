import React from 'react';
import './App.css';

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
    var imageLoader = document.getElementById('img');
    imageLoader.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    function handleImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                var width = img.width;
                var height = img.height;
                var ratio = (height/width);
                if(width > 500){
                    width = 500;
                    height = 500 * ratio;
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img,0,0);

                ctx.font = "30px Arial";
                ctx.fillText("Hello World", 10, 50);
            }
            img.src = event.target.result;
            console.log(img)
            // img.width = 500;
        }
        console.log(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);     
    }
  }

  render(){

    return(
      <div className='App'>
        <header className='App-header'>
          <h1>Meme Generator</h1>
          <canvas id="canvas">
          </canvas>
          <input type="file" id="img" />
        </header>
      </div>
    )
  }
}

export default App;
