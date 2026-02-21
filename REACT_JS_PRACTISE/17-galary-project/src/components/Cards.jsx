import React from 'react'

const Cards = (props) => {
  return (
    <div> <a href={props.elem.url} target="_blank">
            <img
              src={props.elem.download_url}
              alt={props.elem.author}
              className="w-64 h-64 object-cover rounded-lg"
            />
            <p className="text-center text-xl mt-2">{props.elem.author}</p>
          </a>  </div>
  )
}

export default Cards