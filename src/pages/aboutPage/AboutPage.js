import React from 'react';
import {Header} from "../../components/header/Header";
import Footer from "../../components/footer/Footer";




function AboutPage  ({info}) {

    return (
        <div>
                <Footer/>
            <h1>{info.title}</h1>
            <p>{info.body}</p>
        </div>
    );
};



export default AboutPage;