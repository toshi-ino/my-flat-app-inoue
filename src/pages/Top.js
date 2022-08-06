import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { lists } from '../recoil/atoms'

const Top = () => {
  const [flatLists, setFlatLists] = useState([]);
  const [recoilLists, setRecoilLists] = useRecoilState(lists);
  
  console.log("recoilLists=", recoilLists);

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
