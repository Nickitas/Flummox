import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BtnLg from '../../UI/buttons/BtnLg/BtnLg'
import { User } from '../../svg.module'
import classes from './header.module.scss'


const Header = ({ data }) => {

    const [count, setCount] = useState(100)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 11)
            if(count > 50_000) {
                setCount(count)
            }
        }, 2)
    }, [count])
    
    return (
        <header className={classes.header}>
            <div className='container'>
                <div className={classes.row}>
                    <div className={classes.blok}>
                        <h1 className='main_title'>{ data.title }</h1>
                        <p className='text'>{ data.text }</p>
                        <Link to='/home'>
                            <BtnLg>{ data.btn }</BtnLg>
                        </Link>
                    </div>
                    <div className={classes.blok}>
                        <img className={classes.phone} src={data.phone} />
                        <div className={classes.short}>
                            <div className={classes.acc}>{ data.bnft1[0] }</div>
                            <div className={classes.text}>{ data.bnft1[1] }</div>
                        </div>
                        <div className={classes.short}>
                            <div className={classes.text}>{ data.bnft2[0] }</div>
                            <div className={classes.acc}>{ data.bnft2[1] }</div>
                        </div>
                        <div className={classes.plaza}>
                            <p><User/>{ data.bnft3 }</p>
                            <summary>{ count }</summary>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header