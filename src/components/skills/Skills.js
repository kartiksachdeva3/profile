import React, {useEffect} from 'react'
import {Carousel } from 'react-responsive-carousel'
import {  Card, CardDeck } from 'react-bootstrap';
import python from '../../static/images/python.svg';
import "../styles/carousel.css";
import cpp from '../../static/images/c.svg'
import react from '../../static/images/react.svg'
import js from '../../static/images/javascript.svg'
import pt from '../../static/images/bug.svg'
import network from '../../static/images/networking.svg'
import cloud from '../../static/images/cloud.svg'
import iot from '../../static/images/iot.svg'
import mongo from '../../static/images/mongo.svg'
import dsa from "../../static/images/algorithm.svg"
import ml from "../../static/images/brain.svg"
import node from '../../static/images/nodejs.svg'
import style from './skills.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function CardsLay({photo1 , title1, photo2, title2, photo3, title3}) {
    return (
        <CardDeck  className={style.cardsdeck}>
        <Card >
            <Card.Img variant="Top" src={photo1} style={{width: "80px", height : "80px"}} />
            <Card.Body>
                <Card.Title>{title1}</Card.Title>
            </Card.Body>
        </Card>
        <Card >
        <Card.Img variant="Top" src={photo2} style={{width: "80px", height : "80px"}} />
            <Card.Body>
                <Card.Title>{title2}</Card.Title>
            </Card.Body> 
        </Card>
        <Card s>
        <Card.Img variant="Top" src={photo3} style={{width: "80px", height : "80px"}} />
            <Card.Body>
                <Card.Title>{title3}</Card.Title>
            </Card.Body> 
        </Card>
        </CardDeck>
    );
}
const Skills = () => {
    useEffect(() => {
        Aos.init({duration : 1500})
       }, [])
    return (
        <div data-aos="fade-left" className={style.container}>
            <Carousel className={style.carsouselskills} infiniteLoop={true} autoPlay={true} showIndicators={false} showStatus={false} interval={'2800'} stopOnHover={false} emulateTouch={true} useKeyboardArrows={true} swipeable={true}>
                <CardsLay photo1={python} title1={"Python"} photo2={cpp} title2={"C/C++"} photo3={js} title3={"JavaScript"} />
                <CardsLay photo1={pt} title1={"Penetration Testing"} photo2={network} title2={"Networking"} photo3={cloud} title3={"Cloud Computing"} />
                <CardsLay photo1={react} title1={"React"} photo2={node} title2={"NodeJs"} photo3={mongo} title3={"MongoDB"} />
                <CardsLay photo1={iot} title1={"Internet of Things"} photo2={ml} title2={"Data Analysis"} photo3={dsa} title3={"DataStructure & Algorithms"} />
            </Carousel>
        </div>

    );
}
export default Skills
