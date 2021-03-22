import React, { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Bg = (props) => {
  const [width, height] = useWindowSize();
  //pseudorandom function
  const getBit = () => Math.round(Math.random());
  //color constants
  const active1 = "magenta";
  const active2 = "#ff00ff73";
  const noactive = "#3a405734";
  //create matrix
  const cellSize = 50;
  const x = Math.round(window.innerWidth / (cellSize + 1));
  const y = Math.round(window.innerHeight / (cellSize + 1));
  const cells = [];
  console.log("Current matrix:", x, y);
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      cells.push({ i, j });
    }
  }
  //get i and j by id
  const getIndexes = (id) => {
    const match = id.match(/\w+/g);
    return { i: parseInt(match[0]), j: parseInt(match[1]) };
  };
  //event handlers
  const mouseEnterHandler = (ev) => {
    const el = ev.target;
    const { i, j } = getIndexes(el.id);
    if (i >= 1 && j >= 1 && i <= y - 2 && j <= x - 2) {
      if (i >= 2 && j >= 2 && i <= y - 3 && j <= x - 3) {
        //Условие второго радиуса
        for (let x = i - 2; x <= i + 2; x++) {
          for (let y = j - 2; y <= j + 2; y++) {
            document.getElementById(`${x}.${y}`).style.color = active2;
          }
        }
      }
      //Условие первого радиуса
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          document.getElementById(`${x}.${y}`).style.color = active1;
        }
      }
    } else {
      //обработка углов
      el.style.color = active1;
    }
  };
  const mouseLeaveHandler = (ev) => {
    const el = ev.target;
    const { i, j } = getIndexes(el.id);
    if (i >= 1 && j >= 1 && i <= y - 2 && j <= x - 2) {
      if (i >= 2 && j >= 2 && i <= y - 3 && j <= x - 3) {
        //Условие второго радиуса
        for (let x = i - 2; x <= i + 2; x++) {
          for (let y = j - 2; y <= j + 2; y++) {
            document.getElementById(`${x}.${y}`).style.color = noactive;
          }
        }
      }
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          document.getElementById(`${x}.${y}`).style.color = noactive;
        }
      }
    } else {
      //обработка углов
      el.style.color = noactive;
    }
  };
  return (
    <div id="bg">
      {cells.map((el) => (
        <div
          id={`${el.i}.${el.j}`}
          key={`${el.i}.${el.j}`}
          style={{ width: cellSize, height: cellSize }}
          className="cell"
          onMouseEnter={(ev) => mouseEnterHandler(ev)}
          onMouseLeave={(ev) => mouseLeaveHandler(ev)}
          onClick={(ev) => console.error(ev.target.id)}
        >
          {getBit()}
        </div>
      ))}
    </div>
  );
};
export default Bg;
