import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    console.log(id)
    return (
        <div className="card animate__animated animate__flash">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
