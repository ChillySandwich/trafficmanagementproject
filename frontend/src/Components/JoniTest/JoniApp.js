import React, { Component, createRef } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Text, Ellipse } from "react-konva";
import Konva from "konva";
 
export default class JoniApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rectangles: [], ellipses: [] };
    this.stageRef = null;
    this.draggableRef = null;
    this.newRectRef = null;
 
  }
 
  render() {
    return (
      //creates background stage (like canvas)
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={(ref) => this.stageRef = ref}
      >
        {/* add a layer for the canvas */}
        <Layer>
          {/* loop through all the rectangles, and draw them on the screen */}
          {this.state.rectangles.map((eachRect) => (
            <Rect
              x={eachRect.x}
              y={eachRect.y}
              strokeWidth={eachRect.strokeWidth}
              stroke={eachRect.stroke}
              width={eachRect.width}
              height={eachRect.height}
            />
          ))}
        </Layer>
 
        {/* Making toolbar draggable */}
        <Layer draggable height={window.innerHeight} width={window.innerwidth}>
          <Rect
            x={10}
            y={window.innerHeight / 2 - 200 / 2}
            width={50}
            height={200}
            stroke="black"
            strokeWidth={1.5}
          />
 
          {/* create base rectangle */}
          <Rect
            x={22.5}
            y={window.innerHeight / 2 - 50}
            width={25}
            height={25}
            stroke="black"
            strokeWidth={0.5}
          />
{/* rectangle which is going to be dragged */}
<Rect
            ref={(ref) => this.draggableRef = ref}
            x={22.5}
            y={window.innerHeight / 2 - 50}
            width={25}
            height={25}
            stroke="black"
            strokeWidth={0.5}
            draggable
            //onDragEnd method
            onDragEnd={(e) => {
 
              // puts rectangle back to original position (on top of static rectangle)
              var rect = this.draggableRef;
              rect.position({ x: 22.5, y: window.innerHeight / 2 - 50 });
              rect.getStage().draw();
 
              let stage = this.stageRef;
              stage.draw();
            
 
              //creates a new rectangle, using the last coordinates of where the mouse was let go
              let newRect = {
                x: 100 + Math.random(),
                y: 90,
                strokewidth: 0.5,
                stroke: "black",
                width: 25,
                height: 25,
 
              }
              this.setState(prevState => ({
                rectangles: [...prevState.rectangles, newRect],
                
              }))
              console.log(this.state.rectangles)
 
            }}
 
          />
          
          <Ellipse
            x={35}
            y={window.innerHeight / 2}
            radiusX={12.5}
            radiusY={12.5}
            stroke="black"
            strokeWidth={0.5}
          />
        </Layer>
      </Stage >
    );


 
  }
}