import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

import './App.css'
import Country from '../components/Country'
import { Modal } from 'react-bootstrap';

function App() {
  const [data, setData] = useState();
  const [inputValue, setInputValue] = useState('ecuador');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${inputValue}`;

    axios.get(url)
      .then(res => {
        setData(res.data[0]);
        setIsOpen(false);
      })
      .catch(err => {
        console.log(err);
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 2000); 
      });

  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.inputValue.value.trim());
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal show={isOpen} onHide={handleCloseModal}>
          {`El país ${inputValue} no existe.`}
        </Modal>
      )}
      <Country data={data} handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
