// write your CatList component here
import React from 'react'

export default function CatList(props) {

    debugger 

  return (
    <div>
        {props.catPics.map( (pic) => {
          return <img src={pic.url} alt={pic.source_url}></img>  
        })}


    </div>
  )
}
