import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [lists, setLists] = useState([]);
  const [address, setAddress] = useState("aiueo");
  const [type, setType] = useState("flat");

  const handleAddAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleClickCreate = () => {
    const newLists = [
      {
        address: address,
        type: type,
        id: Math.floor(Math.random() * 100),
      },
      ...lists,
    ];

    console.log("newLists=", newLists);
    setLists(newLists);

    //画面遷移処理
  };

  console.log(lists);
  return (
    <>
      <h2>Address</h2>
      <input type="text" value={address} onChange={handleAddAddress} />
      <h2>Type</h2>
      <select onChange={handleChangeType}>
        <option value="flat">Flat</option>
        <option value="detached">Detached</option>
        <option value="semi-detached">Semi-detached</option>
        <option value="Terraced">Terraced</option>
      </select>

      <Link to="/" state={{ lists: lists }}>
        <button
          onClick={() => {
            handleClickCreate();
          }}
        >
          Create
        </button>
      </Link>
    </>
  );
};

export default Create;
