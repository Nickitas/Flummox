import classes from './about.module.scss'


const About = ({ data }) => {
    return (
        <section className={classes.about}>
            {
                data.map((item, key) => { return (
                    <div key={key} className={classes.row}>
                        <div className={classes.picture}>
                            <div className={classes.img} style={{
                                background:`no-repeat url(${item.pic})`,
                                backgroundSize:'cover'
                            }}></div>
                        </div>
                        <article className={classes.article}>
                            <h2 className='title'>{ item.head }</h2>
                            <p className='text'>{ item.text }</p>
                        </article>
                    </div>
                )})
            }
        </section>
    )
}

export default About