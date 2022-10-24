// import ScrollAnimation from 'react-animate-on-scroll'
import Nav from './NavBar/NavBar'
import Header from './Header/Header'
import Project from './Project/Project'
import About from './About/About'
import Product from './Product/Product'
import Perspective from './Perspective/Perspective'
import Team from './Team/Team'
import Footer from './Footer/Footer'
import { navigation, header, project, about, product, perspective, team } from '../../data'
import './animation.scss'


const animType = [ 'bounceInRight', 'bounceInLeft' ]

const sections = [
    <Project data={project}/>,
    <About data={about} />,
    <Product data={product} />,
    <Perspective data={perspective} />,
    <Team data={team} />
]

const Lending = () => {
    return (
        <div className='Lending'>
            <Nav data={navigation} />
            {/* <ScrollAnimation
                animateIn='zoomIn'
                animateOut='fadeOut'
                duration={0.45}
            > */}
                <Header data={header}/>
            {/* </ScrollAnimation> */}
            <main>
                {
                    sections.map((item, index) => (
                        // <ScrollAnimation key={index}
                        //     animateIn={animType[Math.floor(Math.random() * 2)]}
                        //     animateOut='zoomOutLeft'
                        //     duration={0.8}
                        // >
                            <div key={index}>{ item }</div>
                        // </ScrollAnimation>
                    ))
                }
            </main>
            <Footer />
        </div>
    )
}

export default Lending