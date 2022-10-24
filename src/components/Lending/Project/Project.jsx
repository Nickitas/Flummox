import classes from './project.module.scss'

const Project = ({ data }) => {
    return (
        <section className={classes.project} id='project'>
            <div className='container'>
                <div className={classes.row}>
                    {
                        data.map((item, key) => (
                            <div key={key} className={classes.card}>
                                <div className={classes.icon_wrapp}>
                                    { item.icon }
                                </div>
                                <h3 className='subtitle'>{ item.head }</h3>
                                <p className='text'>{ item.text }</p>
                            </div>  
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project