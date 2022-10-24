import { useState } from 'react'
import classes from './perspective.module.scss'


const Perspective = ({ data }) => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <section className={classes.perspective} id='perspective'>
            <div className='container'>
                <div className={classes.col}>
                    <h2 className='title'>{ data.title }</h2>
                    <div className={classes.accordion}>
                        {
                            data.list.map((item, index) => (
                                <div className={classes.section} key={index}>
                                    <div className={classes.wrap} key={index} onClick={() => toggle(index)}>
                                        <h3 className='subtitle'>
                                            { item.question }
                                        </h3>
                                        <div className={clicked === index ? `${classes.iconRot}` : `${classes.icon}`}>
                                            { data.arrow }
                                        </div>
                                    </div>
                                    <div className={clicked === index ? `${classes.dropdown} ${classes.open}` : classes.dropdown}>
                                        <p className='text'>{ item.answer }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Perspective