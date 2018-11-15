import React from 'react'

export default class ScrollMonitor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCallBack: true
        }
        this.bindScroll = this.bindScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.bindScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindScroll.bind(this))
    }

    bindScroll(event) {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0)
        // 视窗高度
        const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight
        // 页面高度
        const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        // 距离页面底部的高度
        const height = scrollHeight - scrollTop - clientHeight
        // 判断距离页面底部的高度
        if (height <= (this.props.num || 0)){
            // 判断执行回调条件
            if (this.state.isCallBack) {
                this.props.scrollCallback();
                this.setState(
                    {
                        isCallBack: false
                    }
                )
            } else {
                this.setState(
                    {
                        isCallBack: true
                    }
                )
            }
        }

    }

    render() {
        return (
            <div />
        )
    }
}