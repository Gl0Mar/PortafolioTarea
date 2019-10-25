import React, {Component} from "react"
import Header from './header';
import BarNav from './BarNav';
import Asaid from './asaid';
import Section from './Section';
import Footer from './footer'







class Layout extends Component{
    render() {
        return (
            <div className="container-padre-layout">
                <Header/>
                <BarNav/>
                <Asaid/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}


export default Layout