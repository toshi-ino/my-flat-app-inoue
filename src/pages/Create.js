import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { lists } from '../recoil/atoms';

const Create = () => {
  const [address, setAddress] = useState("aiueo");
  const [type, setType] = useState("flat");
  const [recoilLists, setRecoilLists] = useRecoilState(lists);

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
      ...recoilLists,
    ];

    setRecoilLists(newLists);
  };

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

      <Link to="/">
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
