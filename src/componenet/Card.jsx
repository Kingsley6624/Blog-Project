import React from 'react'
import { Link} from 'react-router-dom'

const Card = ({style, key, img, detail, date, head, body, linkName, link}) => {

 
  return (
      <div Key={key}
          className="flex flex-col items-start justify-center gap-4 max-w-[402px]">
        <img src={img} alt="" />
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs text-[#333333]">{detail}</span>
          <span className="text-[#999999] text-xs font-medium">{date}</span>
        </div>
        <h2 className="text-2xl font-bold text-[#333333] font-['Raleway',_sans-serif]">{head}</h2>
        <p className="text-base font-normal text-[#666666]">{body}</p>
        <Link className="font-bold text-[#7C4EE4] text-lg underline" to={link}>{linkName}</Link>
        
      </div>
  )
}

export default Card