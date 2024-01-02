import { useEffect, useRef } from 'react';
import './App.css';
import image from "./image.jpg";
import { handleLandMarks } from './utilities';

const App = () => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (imageRef.current && canvasRef.current) handleLandMarks(imageRef.current, canvasRef.current);
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <img ref={imageRef} src={image}/>
      <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            opacity: "35%"
          }}
        />
    </div>
  )
}

export default App;
