import { useState } from 'react'
import classes from './team.module.scss'


const Team = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [startAnimate, setStartAnimate] = useState(true)

    const goToPrevious = (slides) => {
        setStartAnimate(true)
        setTimeout(() => {
            setStartAnimate(false)
        }, 750)
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    
    const goToNext = (slides) => {
        setStartAnimate(true)
        setTimeout(() => {
            setStartAnimate(false)
        }, 750)
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    

    return (
        <section className={classes.team} id='about'>
            <div className='container'>
                <div className={classes.row}>
                    
                    <div className={classes.persons}>
                        <div className={classes.rectangle}>
                            {
                                data.slides.map((item, key) => (
                                    <img className={key===currentIndex ? `${classes.persons_img} ${classes.active}` : classes.persons_img}
                                        key={key}
                                        src={item.img}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className={classes.slider_wrapp}>

                        <h2 className='title'>{ data.title }</h2>

                        <div className={classes.slider}>
                            <div className={classes.slide}>
                                
                                <div className={!startAnimate ? classes.head : `${classes.head} ${classes.animated}`}>
                                    <img className={classes.person_img} src={data.slides[currentIndex].img} />
                                    <div className={classes.info}>
                                        <h4 className='headline'>{ data.slides[currentIndex].name }</h4>
                                        <small>{ data.slides[currentIndex].role }</small>
                                    </div>    
                                </div>

                                <div className={classes.body}>
                                    <p className={!startAnimate ? null : classes.animated}>
                                        { data.slides[currentIndex].disc }
                                    </p>
                                </div>

                            </div>

                            <div className={classes.control_btns}>
                                <div className={classes.arrow_btn} onClick={() => goToPrevious(data.slides)}>
                                    { data.arrowLeft }
                                </div>
                                <div className={classes.arrow_btn} onClick={() => goToNext(data.slides)}>
                                    { data.arrowRight }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team