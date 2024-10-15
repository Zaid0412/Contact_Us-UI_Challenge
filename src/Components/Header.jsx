import React from 'react'
import { Circle } from 'lucide-react'


function Header() {
  return (
    <div className="header">
        <div className="header-right">
          <Circle size={9} color='#ED1C6F' fill='#ED1C6F'/>
          <Circle size={9} color='#E8E925' fill='#E8E925'/>
          <Circle size={9} color='#74C54F' fill='#74C54F'/>
        </div>
        <div className="header-left">
          <Circle size={3.5} color='#999' fill='#999'/>
          <Circle size={3.5} color='#999' fill='#999'/>
          <Circle size={3.5} color='#999' fill='#999'/>
        </div>
      </div>
  )
}

export default Header
