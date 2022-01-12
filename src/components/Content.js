import { useEffect, useState } from 'react'
import './Content.css';
import SpecificNews from './SpecificNews';
const Content = ({ menuItem }) => {
    const [data, setData] = useState([]);
    const [particularNews, setParticularNews] = useState(null);
    const [showDetailedNews, setShowDetailedNews] = useState(false);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=health&apiKey=8a1baab295f043b193381d2782661e05')
            .then((res) => res.json())
            .then((result) => {
                console.log(result.articles);
                setData(result.articles)
            })
            .catch(err => console.log("err>...." + err))
    }, [])

    const openHandler = (i) => {
        setShowDetailedNews(true);
        setParticularNews(i);
    }
    console.log("showing home .....")
    if (!showDetailedNews)
        return (
            <section className='section'>
                {data.map((item, id) => (<div className='news' key={id} onClick={() => openHandler(item)}>
                    <div className='container'>
                        <div className='image'>
                            <img src={item.urlToImage} />
                        </div>

                        <p className='title'>{item.title}</p>
                    </div>
                </div>))}


            </section>
        )
    else {
        return <>{particularNews && <SpecificNews particularNews={particularNews} close={() => setShowDetailedNews(false)} />}</>

    }
}

export default Content
