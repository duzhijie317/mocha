import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    initCanvas() {
        let ox = 250
        let oy = 150
        let w = 100
        let h = 100
        let th = 1
        let imgArr = new Array()
        let bottom
        let posData = new Array()
        let oldPos = new Array()
        let currentData = new Array();
        let targetData = posData

        let reversed = false

        let canvas = this.canvas
        if(document.body.offsetWidth>400) {
            canvas.width = 400
        }else {
            canvas.width = document.body.offsetWidth;
        }
        if(document.body.offsetHeight>400) {
            canvas.height = document.body.offsetHeight - 112
        }else {
            canvas.height = 400
        }

        ox = canvas.width*0.42
        oy = canvas.height*0.2
        let context = canvas.getContext('2d')
        bottom = canvas.height - 1

        for(let i=0;i<h;i++){
            posData[i] = new Array();
            oldPos[i] = new Array();
            currentData[i] = new Array();
            for(let j=0;j<w;j++){
                posData[i][j] = {x:ox+j,y:oy+i};
                oldPos[i][j] = {x:Math.random()*800,y:Math.random()*600};
                currentData[i][j] = {x:Math.random()*800,y:Math.random()*600,vx:0,vy:0,ax:.16-Math.random()*.08,ay:.16-Math.random()*.08,nx:.4+Math.random()*.3,ny:.3+Math.random()*.2};

            }
        }

        let onClick = ()=> {
            reversed = !reversed;
            if(reversed){
                for(var i=0;i<h;i++){
                    for(var j=0;j<w;j++){
                        var current = currentData[i][j];
                        current.vx = (Math.random()-Math.random())*3;
                        current.vy = -Math.random()*10;
                    }
                }
            } else {
                th=1;
                targetData = posData
            }
        }
        this.canvasContainer.onclick = onClick

        let img = new Image()
        img.src = 'http://localhost:3000/static/images/bear-white-50x50.png'
        let run = ()=> {
            context.clearRect(0,0,canvas.width,canvas.height);
            if(!reversed){
                if(th<h) th++;
                for(let i=0;i<h;i++){
                    for(let j=0;j<w;j++){
                        let target = targetData[i][j];
                        let current = currentData[i][j];
                        if(i<th){
                            let xdiff = target.x - current.x;
                            let ydiff = target.y - current.y;
                            if(Math.abs(xdiff)<.5) {
                                current.x = target.x;
                            } else {
                                current.x+= (target.x - current.x)*current.ax;
                            }
                            if(Math.abs(ydiff)<.5) {
                                current.y = target.y;
                            } else {
                                current.y+= (target.y - current.y)*current.ay;
                            }
                        }
                        context.putImageData(imgArr[i][j],current.x,current.y);
                    }
                }
            } else {
                for(let i=0;i<h;i++){
                    for(let j=0;j<w;j++){
                        let current = currentData[i][j];
                        current.x+=current.vx;
                        current.y+=current.vy;

                        if(current.y>=bottom){
                            current.y = bottom;
                            current.vy = -current.ny*current.vy;
                            if(Math.abs(current.vy)<=1) {
                                current.vy = 0;
                            }
                            current.vx*=current.nx;
                            if(Math.abs(current.vx)<=1) current.vx = 0;
                        } else {
                            current.vy+=1;
                        }
                        context.putImageData(imgArr[i][j],current.x,current.y);
                    }
                }
            }
        }
        img.onload = ()=> {
            setInterval(run,66);
            context.drawImage(img,0,0);
            for(let i=0;i<h;i++){
                imgArr[i] = [];
                for(let j=0;j<w;j++){
                    imgArr[i][j] = context.getImageData(j,i,1,1);
                }
            }
            context.clearRect(0,0,canvas.width,canvas.height);
        }

    }

    componentDidMount() {
        this.initCanvas()
    }

    render () {
        return (
            <div align="center" ref={(e) => this.canvasContainer = e}>
                <canvas ref={(e) => this.canvas = e} width="800" height="500"></canvas>
            </div>
        )
    }
}