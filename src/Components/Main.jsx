import React from 'react'

function Main() {
  return (
    <div>
      <div className="main">
        <div className="main-right">
            <div className="headerC">
                <h1>CONTACT</h1>
                <h1>US</h1>
            </div>
            <div className="contact-info">
                <p>CONTACT INFO : +62 81 314 928 595</p>
            </div>
        </div>
        <div className="main-left">
            <form>
                <input type="text" placeholder='NAME' />
                <input type="email" placeholder='EMAIL'/>
                <input type="tel" placeholder='CONTACT NO'/>
                <input type="text" placeholder='MESSAGE'/>
                <div className="btns">
                    <button className="cancel-btn">CANCEL</button>
                    <button className="send-btn">SEND</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Main
