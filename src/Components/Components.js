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
                <section className = "content">
                    <h1 className = "title">{data.title}</h1>
                    <h4 className = "date">{data.date}</h4>
                    <img className = "picture" alt = {data.title} src = {data.url} />
                    <p className = "description">{data.explanation}</p>
                    <p className = "copyright">{data.copyright}</p>
                </section>
            </div>
        )
}

export default NasaCard;