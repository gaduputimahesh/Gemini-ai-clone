import React, { useContext } from 'react'
import { assets } from './../../assets/assets';
import './Main.css';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent, recentPrompt, showResult,loading,resultData,setInput,input } = useContext(Context)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSent();
        }
    }
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon2} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
                <div className="greet">
                <p><span>Hello, This is mahesh.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Help me find the latest trends</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help me draft a response to a friend</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Explain the following code step-by-step in detail</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                </div>
            </>
            : <div className="result">
                 <div className="result-title">
                    <img src={assets.user_icon2} alt="" />
                    <p>{recentPrompt}</p>
                 </div>
                 <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                    
                 </div>
            </div>
            }
            
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' 
                    onKeyDown={handleKeyDown}/>
                    <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> :null
                    }
                    
                    </div>
                </div>
                <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
