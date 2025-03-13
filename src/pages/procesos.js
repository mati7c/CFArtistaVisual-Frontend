import React from 'react';
import "../styles/styles.css";

const Slider = () => (
  <div>
    <h2>Procesos</h2>
    <input type="radio" id="trigger1" name="slider" />
    <label htmlFor="trigger1">
      <span className="sr-only">Slide 1 of 5. A photo of a mountain pass with a winding path along the river and a view of distant mountains hiding in the mist.</span>
    </label>
    <div className="slide bg1"></div>

    <input type="radio" id="trigger2" name="slider" checked autoFocus />
    <label htmlFor="trigger2">
      <span className="sr-only">Slide 2 of 5. A photo of a bird eating sunflower seeds from an open hand.</span>
    </label>
    <div className="slide bg2"></div>

    <input type="radio" id="trigger3" name="slider" />
    <label htmlFor="trigger3">
      <span className="sr-only">Slide 3 of 5. A photo of a concrete bridge over the river with high voltage power lines on both banks.</span>
    </label>
    <div className="slide bg3"></div>

    <input type="radio" id="trigger4" name="slider" />
    <label htmlFor="trigger4">
      <span className="sr-only">Slide 4 of 5. A photo of a lake surrounded by the forest with mountains in the background.</span>
    </label>
    <div className="slide bg4"></div>

    <input type="radio" id="trigger5" name="slider" />
    <label htmlFor="trigger5">
      <span className="sr-only">Slide 5 of 5. A photo of a forest.</span>
    </label>
    <div className="slide bg5"></div>
  </div>
);




export default Slider;
