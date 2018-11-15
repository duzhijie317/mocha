import React from 'react'
import { Button } from 'antd'

export default class bookHome extends React.Component {
    constructor(props) {
       super(props)
    }

    componentWillMount() {
        this.props.onRef(this)
    }

    componentDidMount() {
        this.title.style.paddingTop = this.props.height + 'px'
    }

    componentWillUpdate() {

    }


    componentDidUpdate() {

    }

    handleMouseMove = (event) => {
        let maskCircle1 = this.maskCircle1
        let maskCircle2 = this.maskCircle2
        event.preventDefault()
        let upX = event.clientX
        let upY = event.clientY
        maskCircle1.setAttribute("cy", (upY - 70) + 'px')
        maskCircle1.setAttribute("cx", (upX) + 'px')
        maskCircle2.setAttribute("cy", (upY - 70) + 'px')
        maskCircle2.setAttribute("cx", (upX) + 'px')
    }

    animate = () => {
        console.log(this.bookHomeWrap.style)
        let wrapTop = this.bookHomeWrap.offsetY
        this.title.style.top = wrapTop + 'px'
        this.title.className = 'animated zoomIn delay-1s'
    }

    removeAnimate = () =>  this.title.className = ''

    render() {
        return (
            <div name="book" ref={ (e) => this.bookHomeWrap = e } style={{ height: "100%", width: "100%", position: "relative" }}>
                <div className="background-picture" onMouseMove={this.handleMouseMove}>
                    <svg className="blur" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                         width="100%" height="100%" display="block">
                        <defs>
                            <filter id="filter2">
                                <feGaussianBlur stdDeviation="5"/>
                            </filter>
                            <mask id="mask1">
                                <circle ref={ (e) => this.maskCircle1 = e } cx="-50%" cy="-50%" r="100" fill="white" filter="url(#filter2)"/>
                            </mask>
                            <mask id="mask2">
                                <rect x="0" y="0" width="100%" height="600" fill="black"/>
                                <circle ref={ (e) => this.maskCircle2 = e } cx="-50%" cy="-50%" r="100" fill="black" filter="url(#filter2)"/>
                            </mask>
                        </defs>
                        <image mask="url(#mask1)" xlinkHref="/static/images/world-architecture.png" width="100%"
                               height="100%"/>
                        <image mask="url(#mask2)" xlinkHref="/static/images/world-architecture.png" width="100%" height="100%"
                               filter="url(#filter2)"/>
                    </svg>
                </div>
                <div ref={(e) => this.title = e} style={{ position: "absolute", top: "40%", left: "37.5%" }}>
                    <div className="bookHome-text">
                        <p>Subscribe to emotions and knowledge</p>
                        <p>to the pleasure that only reading provides</p>
                    </div>
                    <div className="bookHome-button">
                        <Button type="primary" size="large">Read More</Button>
                    </div>
                </div>
                <style jsx>{`
                    .bookHome-text {
                        color: white;
                        text-align: center;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    .bookHome-button {
                        color: white;
                        text-align: center;
                        font-size: 18px;
                        font-weight: 600;
                        padding-top: 30px;
                    }
                    .background-picture {
                        height: 100%;
                        background-color: black;
                        overflow: hidden;
                    }
                    .blur {
                        height: 100%;
                    }
                    .overlay {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        height: 100%;
                    }
                    .bookHome-btn-primary {
                        background: linear-gradient(to right, #251345, gray);
                        color: white;
                        font-size: 16px;
                        border-color: black;
                        padding: 0px 20px;
                        height: 45px;
                        border-radius: 20px;
                    }
                `}</style>
            </div>
        )
    }
}