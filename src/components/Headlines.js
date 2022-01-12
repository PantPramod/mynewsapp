import React, { useEffect, useState } from 'react'
import './Headlines.css';
const Headlines = () => {
    const [headlines, setHeadlines] = useState([]);
    useEffect(() => {

        async function fetchAPI() {

            fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8a1baab295f043b193381d2782661e05')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.articles);
                    setHeadlines(data.articles)
                })
                .catch((err) => console.log("err...." + err))





        }
        fetchAPI();

    }, [])
    console.log("showing headlines .....")
    return (
        <div className='headlines'>
            {headlines.map((item, id) => (<div key={id} className='h__a' href={item.url}>

                <img src={item.urlToImage} alt="image" />
                <p>{item.title}</p>
            </div>))}
        </div>
    )
}

export default Headlines
