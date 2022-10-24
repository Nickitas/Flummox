import { Link } from 'react-router-dom'
import { hero } from '../../../data'
import classes from './logo.module.scss'

const Logo = () => {

    const handlerClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Link to='/' onClick={handlerClick}>
            <div className={classes.logo}>
                <img src={ hero.logo } alt={`${hero.brand} logo`} />
                <h6>{ hero.brand }</h6>
            </div>
        </Link>
    )
}

export default Logo