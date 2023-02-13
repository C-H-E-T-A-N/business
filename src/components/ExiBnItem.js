import React from 'react'
import Login from './Login'

export default function ExiBnItem() {
  return (
    <div>
    <a href='/' style={{textDecoration: 'none', color: 'black'}}>
        <div className="card my-2">
        <div className="card-body" onClick={()=>{<Login/>}}>
            {/* Sr.no and name passed as prop*/} Name of business
        </div>
        </div>
    </a>
    </div>
  )
}
