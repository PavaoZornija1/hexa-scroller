import React, { useCallback, useEffect, useState } from "react";
import "./css/cube.css";

const Cube = (props) => {
  const [dragging, setDragging] = useState(false);
  const [xAngle, setXAngle] = useState(0);
  const [yAngle, setYAngle] = useState(0);

  const initDragRotate = () => setDragging(true);

  const dragRotate = useCallback(
    (e) => {
      if (!dragging) {
        return;
      }

      setXAngle((e.pageX / window.innerWidth) * 1440);
      setYAngle((e.pageY / window.innerWidth) * 1440);
    },
    [dragging]
  );

  const endDragRotate = useCallback((e) => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (!dragging) {
      return;
    }

    let rotateParam = "";
    rotateParam += " rotateY(" + xAngle + "deg)";
    rotateParam += " rotateX(" + yAngle + "deg)";
    document.querySelector("#cube").style.transform = rotateParam;
  }, [xAngle, yAngle, setXAngle, setYAngle, dragging]);

  useEffect(() => {
    const cube = document.querySelector("#cube");

    cube.addEventListener("mousedown", (e) => {
      initDragRotate();
    });

    cube.addEventListener("mousemove", (e) => {
      dragRotate(e);
    });

    cube.addEventListener("mouseup", (e) => {
      endDragRotate();
    });

    // document.addEventListener(
    //   "keydown",
    //   function (e) {
    //     switch (e.keyCode) {
    //       case 37: // for left key
    //         yAngle -= 90;
    //         break;

    //       case 38: // for up key
    //         xAngle += 90;
    //         break;

    //       case 39: // for right key
    //         yAngle += 90;
    //         break;

    //       case 40: // for down key
    //         xAngle -= 90;
    //         break;

    //       default:
    //     }
    //     cube.style.transform =
    //       "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
    //   },
    //   false
    // );
  }, [dragRotate, endDragRotate]);

  return (
    <div id="cube">
      <div className="face one"></div>
      <div className="face two"></div>
      <div className="face three"></div>
      <div className="face four"> </div>
      <div className="face five"> </div>
      <div className="face six"></div>
    </div>
  );
};

export default Cube;
