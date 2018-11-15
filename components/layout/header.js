import React from 'react'

const links = [
    {label: 'Home', href: '#home'},
    {label: 'Blog', href: '#blog'},
    {label: 'Books', href: '#book'},
    {label: 'Contact', href: '#contact'},
]

const mochaHeader = props => (
    <div>
        <div className="logo shake-chunk">
            <img className="logo-image" src="/static/images/bear-white.png"/>
        </div>
        <div className="title">
            <a className="title-text">mocha</a>
        </div>
        <div className="navigation">
            {links.map((link, index) => {
                return (
                    <a key={index} className={ props.current === index ? 'navigation-text active':'navigation-text'} href={link.href}>{link.label}</a>
                )
            })}
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
                display: inline-block;
                text-decoration: none;
              }
              .navigation-text.active {
                color: #fff900;
              }
            `}</style>
    </div>
)

export default mochaHeader