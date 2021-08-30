import React from 'react'
import '../News/News.css'

function NewsItem({ title, description, url, urlToImage }) {
  return (
    <>
      <div class='imagebox'>
        <img src={urlToImage} width='auto' height='auto' />

        <p>
          <a href={url}>{title}</a>
        </p>
        <p style={{ color: 'black' }}>{description}</p>
      </div>
    </>
  )
}

export default NewsItem
