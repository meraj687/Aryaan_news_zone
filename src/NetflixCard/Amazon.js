import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Amazon() {
  return (
    <>
      <Card
        key={Sdata[4].id}
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        sname={Sdata[4].sname}
        link={Sdata[4].link}
      />
    </>
  )
}

export default Amazon
