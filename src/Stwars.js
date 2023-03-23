import {useParams} from "react-router-dom";
import axios from "axios";
import {useState} from 'react';

export default function Stwars(){

    const p = useParams();

    const charData = axios.get("https://swapi.dev/api/people/" + p.c_id);
    const [name, setName] = useState("");

    charData.then(
        response => {
            //console.log(response.data);
            setName(response.data.name);
        }
    )


    return(
        <h2 className = "titleText">{name}</h2>
    );
}