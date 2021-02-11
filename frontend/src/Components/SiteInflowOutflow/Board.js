import React from 'react';
import '../App.css'
//import './style.css'
import mapImage from './map.PNG'

console.log("hi there");

class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: false,
            isRedOn: false,
            isOrangeOn: false,
            isGreenOn: false,
            isYellowOn: false,
            points: [],
            pathsry: [],
            save: false,
            img: null,
            image2: null,
            imageResized: null,
            saved: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.setRed = this.setRed.bind(this);
        this.setOrange = this.setOrange.bind(this);
        this.setGreen = this.setGreen.bind(this);
        this.setYellow = this.setYellow.bind(this);
        this.clearCanvas = this.clearCanvas.bind(this);
        this.save = this.save.bind(this);
        this.load = this.load.bind(this);
        this.passbackImg = this.passbackImg.bind(this);
        this.calculateAspectRatioFit = this.calculateAspectRatioFit.bind(this);
        //this.setState = this.setState.bind(this);

        
    }

    pathsry = [];
    
    

    componentDidMount() {

        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        // const pic = new Image();
        // pic.src = mapImage;
        // pic.onload = function() {
        //     ctx.drawImage(pic, 0, 0);
        // }
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.8;
        const pic = new Image();
        pic.src = this.props.uploadedImage;
        pic.onload = () => {
            console.log("wait")
            var r = this.calculateAspectRatioFit(pic.width, pic.height, canvas.width, canvas.height)
            pic.width = r.width;
            pic.height = r.height;
            canvas.width = r.width;
            canvas.height = r.height;
            ctx.drawImage(pic, 0, 0, r.width, r.height);
            ctx.lineWidth = 5;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            this.setState({
                imageResized: pic,
                saved: false
            })
        }
        console.log("wait2")
        
        
        //pic.onload = function() {
            //ctx.drawImage(pic, 0, 0, pic.width, pic.height, 0, 0, canvas.width, canvas.height);            
            
            
            // canvas.width = pic.width;
            // canvas.height = pic.height;
        
        //}
        //this.load();
        this.drawOnCanvas();
        
        ctx.lineWidth = 5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
        if (this.state.isToggleOn === true) {
            ctx.strokeStyle = "blue";
        } else if (this.state.isToggleOn === false) {
            ctx.strokeStyle = "orange";
        }
        
        
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    drawOnCanvas() {
        
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);


        //canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        //canvas.height = parseInt(sketch_style.getPropertyValue('height'));

        // i dont trust this code below very much 

        // const pic = new Image();
        // pic.src = this.props.uploadedImage;
        // pic.onload = function() {
        //     // canvas.width = pic.width;
        //     // canvas.height = pic.height;
            
        //     ctx.drawImage(pic, 0, 0)
        //     ctx.lineWidth = 5;
        //     ctx.lineJoin = 'round';
        //     ctx.lineCap = 'round';
        
        
        // }

        
        // ^^^

        
        let points = [];

        var mouse = {x: 0, y: 0};
        var last_mouse = {x: 0, y: 0};

        /* Mouse Capturing Work */
        canvas.addEventListener('mousemove', function(e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            // mouse.x = e.pageX - this.offsetLeft;
            // mouse.y = e.pageY - this.offsetTop;
            mouse.x = e.layerX;
            mouse.y = e.layerY;
            // points.push({x:mouse.x, y:mouse.y})
        }, false);


        /* Drawing on Paint App */
        //ctx.globalAlpha = 0.7;
        ctx.lineWidth = 20;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
        if (this.state.isToggleOn === true) {
            ctx.strokeStyle = "blue";
        } else if (this.state.isToggleOn === false) {
            ctx.strokeStyle = "orange";
        }
        

        canvas.addEventListener('mousedown', function(e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', onPaint, false);
                
        }, false);

        var onPaint = function() {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();
            points.push(mouse.x, mouse.y);
        };

        this.setState(prevState => ({
            pathsry: prevState.pathsry.push(points)
            
        }))
        
        

        
    }

    setRed() {
        this.setState(prevState => ({
            isRedOn: true,
            isOrangeOn: false,
            isGreenOn: false,
            isYellowOn: false,
            helpMessage: "Draw the outflow of traffic from your site"
          }));
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        
    }

    setOrange() {
        this.setState(prevState => ({
            isRedOn: false,
            isOrangeOn: true,
            isGreenOn: false,
            isYellowOn: false,
            helpMessage: "Draw the pedestrian zone(s)"
          }));
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "orange";
    }

    setGreen() {
        this.setState(prevState => ({
            isRedOn: false,
            isOrangeOn: false,
            isGreenOn: true,
            isYellowOn: false,
            helpMessage: "Draw the inflow of traffic coming into your site"
          }));
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "green";
    }

    setYellow() {
        this.setState(prevState => ({
            isRedOn: false,
            isOrangeOn: false,
            isGreenOn: false,
            isYellowOn: true,
            helpMessage: "Draw the location of the loading zones"
          }));
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "yellow";
    }

    clearCanvas() {
        this.setState({
            saved: false            
        })
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pic = new Image();
        pic.src = this.props.uploadedImage;
        pic.onload = () => {
            console.log("wait")
            var r = this.calculateAspectRatioFit(pic.width, pic.height, canvas.width, canvas.height)
            pic.width = r.width;
            pic.height = r.height;
            canvas.width = r.width;
            canvas.height = r.height;
            ctx.drawImage(pic, 0, 0, r.width, r.height);
            ctx.lineWidth = 5;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
        
        ctx.drawImage(pic, 0, 0, r.width, r.height);
    }
}

    /**
  * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
  * images to fit into a certain area.
  *
  * @param {Number} srcWidth width of source image
  * @param {Number} srcHeight height of source image
  * @param {Number} maxWidth maximum available width
  * @param {Number} maxHeight maximum available height
  * @return {Object} { width, height }
  */
    calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }

    save() {
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');
        
        
        //const imageData = canvas.toDataURL('image/png');
        var save = canvas.toDataURL('image/png');
        //var img = new Image(save);
        console.log(save);
        this.setState({
            image: save,
            saved: true,
            helpMessage: "Successfully saved!"
          }, () => {

              this.passbackImg(this.state.image)

          });
        
        var pic2 = new Image()
        pic2.src = save;
        // pic2.onload = function() {
        //     ctx.drawImage(new Image(save), 0, 0);
        // }
        
    }

    passbackImg(image) {
        
        this.props.setImg(image);
    }


    load() {
        // var pic = new Image();
        // pic.src = this.props.uploadedImage
        // var canvas = document.querySelector('#board');
        // var ctx = canvas.getContext('2d');
        // pic.onload = function() {
        //     ctx.drawImage(pic, 0, 0);
        //   }
        
    }


    

    

    render() {

        let stylee = {
            
            background: 'white',
            borderRadius: '10px',
            margin: '10px'
        }
        let styleFocus = {
            
            background: 'rgba(229, 229, 229, 1)',
            
            borderRadius: '10px',
            margin: '10px'
        }
        let styleSave = {
            background: 'rgba(104, 228, 170, 1)',
            borderRadius: '10px',
            margin: '10px'
        }
        
        

        return (
            <div id="sketch" className="sketch">
                
                <div className="buttonContainer">
                    <p className="helpMessage">{this.state.helpMessage}</p>
                    <button className="drawButtons" onClick={this.setGreen} style = {this.state.isGreenOn ? styleFocus : stylee}>
                    Inflow
                    <div class = 'box green'></div>
                    </button>
                    <button className="drawButtons" onClick={this.setRed} style = {this.state.isRedOn ? styleFocus : stylee}>
                    Outflow
                    <div class = 'box red'></div>
                    </button>
                    <button className="drawButtons" onClick={this.setYellow} style = {this.state.isYellowOn ? styleFocus : stylee}>
                    Loading Zone
                    <div class = 'box yellow'></div>
                    </button>
                    <button className="drawButtons" onClick={this.setOrange} style = {this.state.isOrangeOn ? styleFocus : stylee}>
                    Pedestrian Area
                    <div class = 'box orange'></div>
                    </button>
                    <div className="gap" style = {{minHeight:'50px'}}></div>
                    <button className="drawButtons" onClick={this.clearCanvas} style = {stylee}>
                    Clear Screen
                    </button>
                    {/* onClick={() => { func1(); func2();}} */}{/*()=>this.passbackImg(this.state.image) */}
                    {/* onClick={this.save}*/}
                    <button className="drawButtons" onClick={this.save} style = {this.state.saved ? styleSave : stylee}>
                    Save
                    </button>
                    {/* <button className="drawButtons" onClick={() => this.passbackImg(this.state.image)} style = {stylee}>
                    Save2
                    </button> */}
                    {/* <button className="drawButtons" onClick={() => this.load(this.state.image)} style = {stylee}>
                    Load
                    
                    </button> */}
                </div>
                <canvas className="board" id="board"></canvas>
                {/*this.state.save ? <h1>saved</h1> : <h1>notsaved</h1>*/}
            </div>
            //() => clickHazard(hazard.id)
        )
    }
}
export default Board;