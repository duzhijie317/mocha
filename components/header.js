import React from 'react'

const personalHeader = () => (
    <div>
        <div className="logo shake-chunk">
            <img className="logo-image" src="http://localhost:3000/static/images/bear-white.png"/>
        </div>
        <div className="title">
            <a className="title-text">mocha</a>
        </div>
        <div className="navigation">
            <a className="navigation-text" href="#home">Home</a>
            <a className="navigation-text" href="#blog">Blog</a>
            <a className="navigation-text" href="#book">Book</a>
            <a className="navigation-text" href="#contact">contact</a>
            <a className="navigation-text" href="#">Login</a>
        </div>
        <style jsx>{`
              .logo{
                display: inline-block;
                cursor: pointer;
              }
              .logo-image{
                vertical-align: middle;
              }
              .title{
                display: inline-block;
                padding: 0 5px;
                cursor: pointer;
                color: #fff;
              }
              .title-text{
                position: absolute;
                line-height: 12px;
                font-size: 12px;
                color: white;
                font-weight: 600;
              }
              .navigation{
                float: right;
                display: inline-block;
                cursor: pointer;
                font-size: 15px;
              }
              .navigation-text {
                color: white;
                padding: 0 10px;
                font-weight: 700;
              }
            `}</style>
    </div>
)

export default personalHeader