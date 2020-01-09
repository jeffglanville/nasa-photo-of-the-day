import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Components.scss';


function NasaCard() {
    const [data, setData] = useState({});

        useEffect(() => {
            axios
            .get('https://api.nasa.gov/planetary/apod?api_key=IFDclCU8HdqHjiSHAu3SarGsBtQ9swYDgkdSXbJj')
            .then((res) => setData(res.data))
            .catch((error) => {
                console.log('Please check the information')
            })
        }, []);

        return (
            <div className = 'container'>
                <h1>{data.title}</h1>
                <h4>{data.date}</h4>
                <img alt = {data.title} src = {data.url} />
                <p>{data.explanation}</p>
                <p>{data.copyright}</p>
            </div>
        )
}

export default NasaCard;