/* eslint-disable */
import React from "react"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div className="headerLeft">
                <img className="header__icon" src="https://github.com/wanyyyy/movie/blob/main/ERPLOGO.png?raw=true"
                onClick={()=>{navigate('/');}}/>
            </div>
        </div>
    )
}

export default Header