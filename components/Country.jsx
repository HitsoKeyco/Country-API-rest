import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Button, Form, FormControl} from 'react-bootstrap';


const Country = ({data, handleSubmit}) => {   


    return (
        <>
            <div className="app">
                <div className="name_Country">Rest Country Random</div>
                <div className="flag">
                    <img className="img" src={`${data?.flags.svg}`} alt="img" />
                </div>
                <div className="inf">
                    <ul>
                        <li><b>Pais: </b>{`${data?.name.common}`}</li>
                        <li><b>Poblacion: </b>{`${data?.population}`}</li>
                        <li><b>Capital: </b>{`${data?.capital}`}</li>
                        <li><b>Area: </b>{`${data?.area}`} Km2</li> 
                    </ul>
                    <div className="element">
                    <Form onSubmit={handleSubmit}>
                        <FormControl type="text" id="inputValue" placeholder="ingrese un pais" />
                        <Button className="button" type="submit">
                            Generar
                        </Button>
                    </Form>
                    </div>    
                </div>           
            </div>
        </>
    );
};

export default Country;
