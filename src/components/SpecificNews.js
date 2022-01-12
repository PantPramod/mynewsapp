import React from 'react'

const SpecificNews = ({ particularNews, close }) => {
    return (
        <div className='specificNews'>
            <button className='close' onClick={() => close()}>X</button>
            <p className="sp__title">{particularNews.title}</p>
            <p className='sp__description'>{particularNews.description}</p>
            <img className="sp__img" src={particularNews.urlToImage} alt="image" />

            <p className='sp__content'>{particularNews.content}</p>
            <a href={particularNews.url}>Show More</a>
        </div>
    )
}

export default SpecificNews
