import React from 'react'

const CampCards = ({title, description, imgUrl}) => {
  return (
    <div>
        <img src={imgUrl} alt={title} />
        {title}
        {description}
    </div>
  )
}

export default CampCards