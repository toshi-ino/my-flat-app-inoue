import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Top = () => {
  const location = useLocation();
  const [flatLists, setFlatLists] = useState([]);
  console.log("location=", location.state);

  return (
    <>
      <Link to="/create">
        <button>Add</button>
      </Link>
      <ul>
        {/* {lists.map((list) => {
          return (
            <li key={list.id}>
              {list.id},{list.address},{list.type}
            </li>
          );
        })} */}
      </ul>
    </>
  );
};

export default Top;
