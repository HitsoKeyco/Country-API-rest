import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import { Button, Form, FormControl} from 'react-bootstrap';



const Country = () => {
    const [data, setData] = useState()
    const [inputValue, setInputValue] = useState('deutschland')


    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${inputValue}`
        axios.get(url)
            .then(res => setData(res.data[0]))
            .catch(err => console.log(err))
    }, [inputValue])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(setInputValue(e.target.inputValue.value)); 
    }
    
    
    return (
        <>
        <div className="app">
            <div className="name_Country">Rest Country Random</div>
            <div className="flag">
                <img className='img' src={`${data?.flags.svg}`} alt="img" />
            </div> 
            <div className="inf">
                <ul>
                    <li><b>Pais: </b>{`${data?.name.common}`}</li>
                    <li><b>Poblacion: </b>{`${data?.population}`}</li>
                    <li><b>Capital: </b>{`${data?.capital}`}</li>
                    <li><b>Superficie: </b>{`${data?.area}`} m2</li>
                </ul>                
            </div>
            <div className="element">
                <Form onSubmit={handleSubmit}>
                    <FormControl type="text" id='inputValue' placeholder='ingrese un pais'/>
                    <Button className='button' type='submit'>Generar</Button>
                </Form>
            </div>
        </div>
        </>
        
    )
}

export default Country