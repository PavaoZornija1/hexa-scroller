"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./css/cube.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Cube = props => {
  const [dragging, setDragging] = (0, _react.useState)(false);
  const [xAngle, setXAngle] = (0, _react.useState)(0);
  const [yAngle, setYAngle] = (0, _react.useState)(0);
  const initDragRotate = () => setDragging(true);
  const dragRotate = (0, _react.useCallback)(e => {
    if (!dragging) {
      return;
    }
    setXAngle(e.pageX / window.innerWidth * 1440);
    setYAngle(e.pageY / window.innerWidth * 1440);
  }, [dragging]);
  const endDragRotate = (0, _react.useCallback)(e => {
    setDragging(false);
  }, []);
  (0, _react.useEffect)(() => {
    if (!dragging) {
      return;
    }
    let rotateParam = "";
    rotateParam += " rotateY(" + xAngle + "deg)";
    rotateParam += " rotateX(" + yAngle + "deg)";
    document.querySelector("#cube").style.transform = rotateParam;
  }, [xAngle, yAngle, setXAngle, setYAngle, dragging]);
  (0, _react.useEffect)(() => {
    const cube = document.querySelector("#cube");
    cube.addEventListener("mousedown", e => {
      initDragRotate();
    });
    cube.addEventListener("mousemove", e => {
      dragRotate(e);
    });
    cube.addEventListener("mouseup", e => {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "cube"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "face one"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "face two"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "face three"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "face four"
  }, " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "face five"
  }, " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "face six"
  }));
};
var _default = Cube;
exports.default = _default;