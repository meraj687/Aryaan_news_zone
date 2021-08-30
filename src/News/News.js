import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

function News() {
  const [input, output] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(
  //       'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b83b4638a7ab4deabe49128ec3acca23'
  //     )
  //     const response = await res.json()
  //     // output(response.data)
  //     console.log(response.data.articles)
  //   }
  //   getData()
  // }, [input])

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b83b4638a7ab4deabe49128ec3acca23'
      )
      console.log(res.data.articles)
      output(res.data.articles)
    }
    getData()
  })

  return (
    // <div>
    //   {input.map(({ title, description, url, urlToImage }) => (
    //     <NewsItem
    //       title={title}
    //       description={description}
    //       url={url}
    //       urlToImage={urlToImage}
    //     />
    //   ))}
    // </div>
    <>
      <ul>
        {input.map(
          ({ title, description, url, urlToImage }) => {
            return (
              <div class='imagebox'>
                <img src={urlToImage} width='auto' height='auto' />

                <p>
                  Title : <a href={url}>{title}</a>
                </p>
                <p style={{ color: 'black' }}>{description}</p>
              </div>
            )
          }

          // <NewsItem
          //   title={title}
          //   description={description}
          //   url={url}
          //   urlToImage={urlToImage}
          // />
        )}
      </ul>
    </>
  )
}

export default News
