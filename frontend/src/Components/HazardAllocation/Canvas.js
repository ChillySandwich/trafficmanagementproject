import React, { Component, createRef, useCallback, useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect, Text, Ellipse, Image, Transformer } from "react-konva";
import Konva from "konva";
import useImage from 'use-image';
import { v4 as uuidv4 } from 'uuid';
import { FaSave } from "react-icons/fa";

class URLImage extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = 'images/SitePlan.jpg';
    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        //image={this.props.image}
        image={this.state.image}
        ref={node => {
          this.imageNode = node;
        }}
        onClick={this.props.onClick}
      />
    );
  }
}

const STANDARD_FORKLIFT_DRAG = (
  e, idx, ImagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  var imag = draggableRef.current;
  imag.position({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  let userHazardsUpdate = {
    ...userHazards,
    forklifts: userHazards.forklifts.map((eachImage, currentIdx) => {
      if (currentIdx !== idx) {
        return eachImage;
      }
      return {
        x: e.target._lastPos.x,
        y: e.target._lastPos.y,
        width: 35,
        height: 35,
        idx: uuidv4()
      }
    })
  }
  setUserHazards(userHazardsUpdate);
}

const TOOLBAR_FORKLIFT_DRAG = (
  e, idx, imagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: imagePosition.x,
    y: imagePosition.y
  });

  var imag = draggableRef.current;
  imag.position({
    x: imagePosition.x,
    y: imagePosition.y
  });

  let newImag = {
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
    width: 35,
    height: 35,
    idx: uuidv4()
  }

  let userHazardsUpdate = {
    ...userHazards,
    forklifts: [...userHazards.forklifts, newImag]
  }

  setUserHazards(userHazardsUpdate);
}

const STANDARD_TRUCK_DRAG = (
  e, idx, ImagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  var imag = draggableRef.current;
  imag.position({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  let userHazardsUpdate = {
    ...userHazards,
    trucks: userHazards.trucks.map((eachImage, currentIdx) => {
      if (currentIdx !== idx) {
        return eachImage;
      }
      return {
        x: e.target._lastPos.x,
        y: e.target._lastPos.y,
        width: 35,
        height: 35,
        idx: uuidv4()
      }
    })
  }
  setUserHazards(userHazardsUpdate);
}

const TOOLBAR_TRUCK_DRAG = (
  e, idx, imagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: imagePosition.x,
    y: imagePosition.y
  });

  var imag = draggableRef.current;
  imag.position({
    x: imagePosition.x,
    y: imagePosition.y
  });

  let newImag = {
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
    width: 35,
    height: 35,
    idx: uuidv4()
  }

  let userHazardsUpdate = {
    ...userHazards,
    trucks: [...userHazards.trucks, newImag]
  }

  setUserHazards(userHazardsUpdate);
}


// const STANDARD_RECTANGLE_DELETE = (
//   e, idx, eachRect, userHazards, setUserHazards) => {
//   console.log('Delete idx: ', idx);

//   // update the user hazards
//   let userHazardsUpdate = {
//     ...userHazards,

//     // loop through all the rectangles
//     rectangles: userHazards.rectangles.filter(rectangle => {
//       // if the rectangle ID is not equal to the idx which was clicked, return
//       return rectangle.idx !== idx;
//     })
//   }

//   console.log('Pre-delete update: ', userHazardsUpdate)
//   setUserHazards(userHazardsUpdate);
// }

const STANDARD_CONE_DRAG = (
  e, idx, ImagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  var imag = draggableRef.current;
  imag.position({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  let userHazardsUpdate = {
    ...userHazards,
    cones: userHazards.cones.map((eachImage, currentIdx) => {
      if (currentIdx !== idx) {
        return eachImage;
      }
      return {
        x: e.target._lastPos.x,
        y: e.target._lastPos.y,
        width: 35,
        height: 35,
        idx: uuidv4()
      }
    })
  }

  setUserHazards(userHazardsUpdate);
}

const TOOLBAR_CONE_DRAG = (
  e, idx, imagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: imagePosition.x,
    y: imagePosition.y
  });

  var imag = draggableRef.current;
  imag.position({
    x: imagePosition.x,
    y: imagePosition.y
  });

  let newImag = {
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
    width: 35,
    height: 35,
    idx: uuidv4()
  }

  let userHazardsUpdate = {
    ...userHazards,
    cones: [...userHazards.cones, newImag]
  }

  setUserHazards(userHazardsUpdate);
}

const STANDARD_ROBOTARM_DRAG = (
  e, idx, ImagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  var imag = draggableRef.current;
  imag.position({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  let userHazardsUpdate = {
    ...userHazards,
    images: userHazards.robotarms.map((eachImage, currentIdx) => {
      if (currentIdx !== idx) {
        return eachImage;
      }
      return {
        x: e.target._lastPos.x,
        y: e.target._lastPos.y,
        width: 35,
        height: 35,
        idx: uuidv4()
      }
    })
  }
}

const TOOLBAR_ROBOTARM_DRAG = (
  e, idx, imagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: imagePosition.x,
    y: imagePosition.y
  });

  var imag = draggableRef.current;
  imag.position({
    x: imagePosition.x,
    y: imagePosition.y
  });

  let newImag = {
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
    width: 35,
    height: 35,
    idx: uuidv4()
  }

  let userHazardsUpdate = {
    ...userHazards,
    robotarms: [...userHazards.robotarms, newImag]
  }

  setUserHazards(userHazardsUpdate);
}

const TOOLBAR_CHEMICALBARREL_DRAG = (
  e, idx, imagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: imagePosition.x,
    y: imagePosition.y
  });

  var imag = draggableRef.current;
  imag.position({
    x: imagePosition.x,
    y: imagePosition.y
  });

  let newImag = {
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
    width: 35,
    height: 35,
    idx: uuidv4()
  }

  let userHazardsUpdate = {
    ...userHazards,
    chemicalBarrels: [...userHazards.chemicalBarrels, newImag]
  }

  setUserHazards(userHazardsUpdate);
}

const STANDARD_CHEMICALBARREL_DRAG = (
  e, idx, ImagePosition, setImagePosition,
  userHazards, setUserHazards, draggableRef) => {

  setImagePosition({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  var imag = draggableRef.current;
  imag.position({
    x: e.target._lastPos.x,
    y: e.target._lastPos.y,
  });

  let userHazardsUpdate = {
    ...userHazards,
    images: userHazards.chemicalBarrels.map((eachImage, currentIdx) => {
      if (currentIdx !== idx) {
        return eachImage;
      }
      return {
        x: e.target._lastPos.x,
        y: e.target._lastPos.y,
        width: 35,
        height: 35,
        idx: uuidv4()
      }
    })
  }
}

// const STANDARD_IMAGE_DELETE = (e, idx, eachImg, userHazards, setUserHazards) => {
//   console.log(idx);

//   let userHazardsUpdate = {
//     ...userHazards,
//     images: userHazards.images.filter(images => {
//       return images.idx !== idx;
//     })
//   }
//   setUserHazards(userHazardsUpdate);
// }


//creating a functional component here of the Draggable Rectangle


const DraggableReferenceForklift = (props) => {

  const [img] = useImage('https://static.thenounproject.com/png/1654948-200.png', 'Anonymous');

  const [imagePosition, setImagePosition] = useState(props.initialPosition);
  const draggableRef = useRef(null);
  const transformRef = useRef();

  useEffect(() => {
    if (props.isSelected) {
      // -------------------------------
      transformRef.current.nodes([draggableRef.current]);
      console.log(transformRef.current.getLayer());
      transformRef.current.getLayer().batchDraw();
    }

  }, [props.isSelected]);


  return (
    <>
      <Image
        onClick={props.onSelect}
        onTap={props.onSelect}
        ref={draggableRef}
        {...props.shapeProps}
        image={img}
        ref={draggableRef}
        x={imagePosition.x}
        y={imagePosition.y}
        width={30}
        height={30}
        draggable
        onDragEnd={(e) => { props.onDragEnd(e, props.idx, imagePosition, setImagePosition, props.userHazards, props.setUserHazards, draggableRef) }}
      />
      {props.isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )
      }
    </>
  )
}

const DraggableReferenceTruck = (props) => {

  const [img] = useImage('https://img.icons8.com/android/452/truck.png', 'Anonymous');

  const [imagePosition, setImagePosition] = useState(props.initialPosition);
  const draggableRef = useRef(null);
  const transformRef = useRef();

  useEffect(() => {
    if (props.isSelected) {
      // -------------------------------
      transformRef.current.nodes([draggableRef.current]);
      console.log(transformRef.current.getLayer());
      transformRef.current.getLayer().batchDraw();
    }

  }, [props.isSelected]);


  return (
    <>
      <Image
        onClick={props.onSelect}
        onTap={props.onSelect}
        ref={draggableRef}
        {...props.shapeProps}
        image={img}
        ref={draggableRef}
        x={imagePosition.x}
        y={imagePosition.y}
        width={30}
        height={35}
        draggable
        onDragEnd={(e) => { props.onDragEnd(e, props.idx, imagePosition, setImagePosition, props.userHazards, props.setUserHazards, draggableRef) }}
      />
      {props.isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )
      }
    </>
  )
}

const DraggableReferenceCone = (props) => {


  const [img] = useImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kdUik0koRv9ycRFf539VK5lW0q9TEj91OQ&usqp=CAU', 'Anonymous');

  const [imagePosition, setImagePosition] = useState(props.initialPosition);
  const draggableRef = useRef(null);
  const transformRef = useRef();

  useEffect(() => {
    if (props.isSelected) {
      // -------------------------------
      transformRef.current.nodes([draggableRef.current]);
      console.log(transformRef.current.getLayer());
      transformRef.current.getLayer().batchDraw();
    }

  }, [props.isSelected]);


  return (
    <>
      <Image
        onClick={props.onSelect}
        onTap={props.onSelect}
        ref={draggableRef}
        {...props.shapeProps}
        image={img}
        ref={draggableRef}
        x={imagePosition.x}
        y={imagePosition.y}
        width={30}
        height={35}
        draggable
        onDragEnd={(e) => { props.onDragEnd(e, props.idx, imagePosition, setImagePosition, props.userHazards, props.setUserHazards, draggableRef) }}
      />
      {props.isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )
      }
    </>
  )
}

const DraggableReferenceRobotArm = (props) => {


  const [img] = useImage('https://static.thenounproject.com/png/175817-200.png', 'Anonymous');

  const [imagePosition, setImagePosition] = useState(props.initialPosition);
  const draggableRef = useRef(null);
  const transformRef = useRef();

  useEffect(() => {
    if (props.isSelected) {
      // -------------------------------
      transformRef.current.nodes([draggableRef.current]);
      console.log(transformRef.current.getLayer());
      transformRef.current.getLayer().batchDraw();
    }

  }, [props.isSelected]);

  return (
    <>
      <Image
        onClick={props.onSelect}
        onTap={props.onSelect}
        ref={draggableRef}
        {...props.shapeProps}
        image={img}
        ref={draggableRef}
        x={imagePosition.x}
        y={imagePosition.y}
        width={30}
        height={35}
        draggable
        onDragEnd={(e) => { props.onDragEnd(e, props.idx, imagePosition, setImagePosition, props.userHazards, props.setUserHazards, draggableRef) }}
      />
      {props.isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )
      }
    </>
  )
}

const DraggableReferenceChemicalBarrel = (props) => {

  const [img] = useImage('https://static.thenounproject.com/png/3317201-200.png', 'Anonymous');

  const [imagePosition, setImagePosition] = useState(props.initialPosition);
  const draggableRef = useRef(null);
  const transformRef = useRef();

  useEffect(() => {
    if (props.isSelected) {
      // -------------------------------
      transformRef.current.nodes([draggableRef.current]);
      console.log(transformRef.current.getLayer());
      transformRef.current.getLayer().batchDraw();
    }

  }, [props.isSelected]);

  return (
    <>
      <Image
        
        onClick={props.onSelect}
        onTap={props.onSelect}
        ref={draggableRef}
        {...props.shapeProps}
        image={img}
        ref={draggableRef}
        x={imagePosition.x}
        y={imagePosition.y}
        width={40}
        height={40}
        draggable
        onDragEnd={(e) => { props.onDragEnd(e, props.idx, imagePosition, setImagePosition, props.userHazards, props.setUserHazards, draggableRef) }}
      />
      {props.isSelected && (
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )
      }
    </>
  )
}


const ToolBar = (props) => {
  // ---------------------------------------//creating a functional component of the Draggable Toolbar
  const [toolbarAttributes, setToolbarAttributes] = useState(null);

  const toolbarRef = useCallback(node => {
    if (node !== null) {
      setToolbarAttributes(node.attrs);
    }
  }, []);

  return (
    <Layer height={window.innerHeight} width={window.innerwidth}>
      <Rect
        ref={toolbarRef}
        x={750}
        y={65}
        width={50}
        height={50}
        fill="white"
        cornerRadius={[10, 10, 10, 10]}
      />

<Rect
        ref={toolbarRef}
        x={750}
        y={125}
        width={50}
        height={50}
        fill="white"
        cornerRadius={[10, 10, 10, 10]}
      />

<Rect
        ref={toolbarRef}
        x={750}
        y={185}
        width={50}
        height={50}
        fill="white"
        cornerRadius={[10, 10, 10, 10]}
      />

<Rect
        ref={toolbarRef}
        x={750}
        y={250}
        width={50}
        height={50}
        fill="white"
        cornerRadius={[10, 10, 10, 10]}
      />


<Rect
        ref={toolbarRef}
        x={750}
        y={310}
        width={50}
        height={50}
        fill="white"
        cornerRadius={[10, 10, 10, 10]}
      />


      <DraggableReferenceForklift
        draggable
        key={`TOOLBAR_FORKLIFT`}
        x={18}
        y={window.innerHeight / 2 + 30}
        width={35}
        height={30}
        setUserHazards={props.setUserHazards}
        userHazards={props.userHazards}
        onDragEnd={TOOLBAR_FORKLIFT_DRAG}
        initialPosition={{ x: 760, y: 75}}
      />

      <DraggableReferenceTruck
        draggable
        key={`TOOLBAR_TRUCK`}
        x={18}
        y={window.innerHeight / 2 + 30}
        width={35}
        height={35}
        setUserHazards={props.setUserHazards}
        userHazards={props.userHazards}
        onDragEnd={TOOLBAR_TRUCK_DRAG}
        initialPosition={{ x: 760, y: 130 }}
      />

      <DraggableReferenceCone
        draggable
        key={`TOOLBAR_CONE`}
        x={18}
        y={window.innerHeight / 2 + 30}
        width={35}
        height={35}
        setUserHazards={props.setUserHazards}
        userHazards={props.userHazards}
        onDragEnd={TOOLBAR_CONE_DRAG}
        initialPosition={{ x: 760, y: 190 }}
      />

      <DraggableReferenceRobotArm
        draggable
        key={`TOOLBAR_ROBOTARM`}
        x={18}
        y={window.innerHeight / 2 + 30}
        width={35}
        height={35}
        setUserHazards={props.setUserHazards}
        userHazards={props.userHazards}
        onDragEnd={TOOLBAR_ROBOTARM_DRAG}
        initialPosition={{ x: 760, y: 255}}
      />


      <DraggableReferenceChemicalBarrel
        draggable
        key={`TOOLBAR_CHEMICALBARREL`}
        x={18}
        y={window.innerHeight / 2 + 30}
        width={40}
        height={40}
        setUserHazards={props.setUserHazards}
        userHazards={props.userHazards}
        onDragEnd={TOOLBAR_CHEMICALBARREL_DRAG}
        initialPosition={{ x: 755, y: 315}}
      />

    </Layer>
  )
}

const Canvas = (props) => {

  const [userHazards, setUserHazards] = useState({
    rectangles: [], ellipses: [], cones: [], robotarms: [], chemicalBarrels: [], trucks: [],
    forklifts: [],
  });

  const stageRef = useRef(null);


  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    props.setdndImg(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    // 
  };


  const [selectedId, selectShape] = useState(null);
  // const [cross] = useImage("https://i.dlpng.com/static/png/6502802_preview.png");
  // const [crossPosition, setCrossPosition] = useState()


  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnStage = e.target === e.target.getStage();
    if (clickedOnStage) {
      selectShape(null);
      console.log(selectShape);
    }
  };

  console.log(`SELECTED SHAPE: ${selectedId}`)


 

  return (
    //creates background stage (like canvas)
    
    <Stage
      width={850}
      height={600}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
      ref={stageRef}
      onClick={handleExport}
    >
    <Layer>
        <URLImage 
          x={0}
          y={0}
          width={700}
          height={500}
          onClick={(e) => {selectShape(null);}}
          // image={this.props.uploadedImage}
        />

      </Layer>

      <Layer>

        {userHazards.forklifts.map((eachImg, idx) => (
          <DraggableReferenceForklift
            key={`USER_IMG_${eachImg.idx}`}
            idx={eachImg.idx}
            setUserHazards={setUserHazards}
            userHazards={userHazards}
            onDragEnd={STANDARD_FORKLIFT_DRAG}
            initialPosition={{ x: eachImg.x, y: eachImg.y }}
            isSelected={eachImg.idx === selectedId}
            onSelect={() => {
              selectShape(eachImg.idx);
            }}
            onChange={(newAttrs) => {
              const fork = userHazards.forklifts.slice();
              fork[eachImg.idx] = newAttrs;
              setUserHazards(fork);
            }}
          />
        )
        )}

        {userHazards.trucks.map((eachImg, idx) => (
          <>
            <DraggableReferenceTruck
              key={`USER_IMG_${eachImg.idx}`}
              idx={eachImg.idx}
              setUserHazards={setUserHazards}
              userHazards={userHazards}
              onDragEnd={STANDARD_TRUCK_DRAG}
              initialPosition={{ x: eachImg.x, y: eachImg.y }}
              isSelected={eachImg.idx === selectedId}
              onSelect={() => {
                selectShape(eachImg.idx);
              }}
              onChange={(newAttrs) => {
                const truck = userHazards.trucks.slice();
                truck[eachImg.idx] = newAttrs;
                setUserHazards(truck);
              }}
            />

            {/* <Image
                  image={cross}
                  idx={eachRect.idx}
                  crossPosition={crossPosition}
                  setCrossPosition={crossPosition}
                  setUserHazards={setUserHazards}
                  userHazards={userHazards}
                  x={eachRect.x + 30}
                  y={eachRect.y - 10}
                  width={20}
                  height={20}
              /> */}
          </>
        )
        )}

        {userHazards.cones.map((eachImg, idx) => (
          <DraggableReferenceCone
            key={`USER_IMG_${eachImg.idx}`}
            idx={eachImg.idx}
            setUserHazards={setUserHazards}
            userHazards={userHazards}
            onDragEnd={STANDARD_CONE_DRAG}
            initialPosition={{ x: eachImg.x, y: eachImg.y }}
            isSelected={eachImg.idx === selectedId}
            onSelect={() => {
              selectShape(eachImg.idx);
            }}
            onChange={(newAttrs) => {
              const cones = userHazards.cones.slice();
              cones[eachImg.idx] = newAttrs;
              setUserHazards(cones);
            }}
          />
        )
        )}

        {userHazards.robotarms.map((eachImg, idx) => (
          <DraggableReferenceRobotArm
            key={`USER_IMG_${eachImg.idx}`}
            idx={eachImg.idx}
            setUserHazards={setUserHazards}
            userHazards={userHazards}
            onDragEnd={STANDARD_ROBOTARM_DRAG}
            initialPosition={{ x: eachImg.x, y: eachImg.y }}
            isSelected={eachImg.idx === selectedId}
            onSelect={() => {
              selectShape(eachImg.idx);
            }}
            onChange={(newAttrs) => {
              const rb = userHazards.robotarms.slice();
              rb[eachImg.idx] = newAttrs;
              setUserHazards(rb);
            }}
          />
        )
        )}

        {userHazards.chemicalBarrels.map((eachImg, idx) => (
          <DraggableReferenceChemicalBarrel
            key={`USER_IMG_${eachImg.idx}`}
            idx={eachImg.idx}
            setUserHazards={setUserHazards}
            userHazards={userHazards}
            onDragEnd={STANDARD_CHEMICALBARREL_DRAG}
            initialPosition={{ x: eachImg.x, y: eachImg.y }}
            isSelected={eachImg.idx === selectedId}
            onSelect={() => {
              selectShape(eachImg.idx);
            }}
            onChange={(newAttrs) => {
              const cb = userHazards.chemicalBarrels.slice();
              cb[eachImg.idx] = newAttrs;
              setUserHazards(cb);
            }}
          />
        )
        )}

      </Layer>
      {/* Making toolbar draggable */}
      <ToolBar
        setUserHazards={setUserHazards}
        userHazards={userHazards}
      />

    </Stage>
    
  );
}


export default Canvas;