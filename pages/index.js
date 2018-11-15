import React from 'react'
import {SectionsContainer, Section, ScrollToTopOnMount} from 'react-fullpage'
import stylesheet from '../styles/index.less'
import { Layout, Button } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import Link from 'next/link'
import Head from '../components/common/head'
import MochaHeader from '../components/layout/header'
import MochaFooter from '../components/layout/footer'
import BookHome from '../components/book/bookHome'
import HomePage from '../components/home'
import Nav from '../components/nav'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '' ,
            height: '',
            current: 0
        }
    }

    resize() {
        try {
            const parentDom = document.body;
            this.canvasContainer.style.height = document.body.offsetHeight
            let { width, height } = this.props;
            if (!width) {
                width = parentDom.offsetWidth;
            }
            if (!height) {
                height = parentDom.offsetHeight - 64;
            }
            this.setState({ width, height });
        } catch (ignore) {

        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.resize()
        window.addEventListener('resize', () => this.resize())
    }
    componentDidUpdate() {

    }

    componentWillReceiveProps() {
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.resize());
    }

    render () {
        const options = {
            sectionClassName:     'section',
            anchors:              ['home', 'blog', 'book', 'contact'],
            arrowNavigation:      true,
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '20px',
            sectionPaddingBottom: '0px',
            arrowNavigation:      true,
            loopBottom:           true,
            scrollCallback: (states) => {
                this.setState({current: states.activeSection})
                if ( states.activeSection===2 ) {
                    this.bookHome.animate()
                }else {
                    this.bookHome.removeAnimate()
                }
            }
        };

        const { current, height } = this.state

        return (
          <Layout>
            <Head title="Mocha" />
             <Header style={{
                 position: "fixed",
                 width: "100%",
                 zIndex: "99" }}>
                 <MochaHeader current={ current }/>
             </Header>
            <Content style={{ background:'black'}}>
                <SectionsContainer className="container" {...options}>
                    <Section style={{ overflow: "hidden" }} className="custom-section1">
                        <HomePage />
                    </Section>
                    <Section>
                        <h2 style={{ color: "white" }}>blog</h2>
                    </Section>
                    <Section>
                        <BookHome height={ height } onRef={ (ref) => this.bookHome = ref} />
                    </Section>
                    <Section>
                        <h2 style={{ color: "white" }}>contact</h2>
                    </Section>
                </SectionsContainer>
            </Content>
            <Footer>
                <MochaFooter content="Design by Du"/>
            </Footer>

            <style jsx>{`

            `}</style>
            <style jsx global>
              { stylesheet }
            </style>
          </Layout>
        )
    }
}
