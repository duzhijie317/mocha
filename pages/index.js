import React, { Component }from 'react'
import {SectionsContainer, Section, ScrollToTopOnMount} from 'react-fullpage'
import stylesheet from '../styles/index.less'
import { Layout, Button } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import Link from 'next/link'
import Head from '../components/head'
import PersonalHeader from '../components/header'
import PersonalFooter from '../components/footer'
import HomePage from '../components/home'
import Nav from '../components/nav'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: props.width ,
            height: props.height
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
        let options = {
            sectionClassName:     'section',
            anchors:              ['home', 'blog', 'book', 'contact'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        false,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true,
            loopBottom:           true,
        };
        return (
          <Layout>
            <Head title="Mocha" />
             <Header style={{
                 position: "fixed",
                 width: "100%",
                 zIndex: "99" }}>
                 <PersonalHeader />
             </Header>
            <Content style={{ background:'black'}}>
                <ScrollToTopOnMount />
                <SectionsContainer className="container" {...options}>
                    <Section className="custom-section1">
                        <HomePage />
                    </Section>
                    <Section></Section>
                    <Section></Section>
                    <Section></Section>
                </SectionsContainer>
            </Content>
            <Footer>
                <PersonalFooter content="Design by Du  2018"/>
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
