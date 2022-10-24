import { useState } from 'react'
import { Sun, Moon } from '../../svg.module'
import classes from './theme_btn.module.scss'


const ThemeBtn = () => {

    const [them, setThem] = useState(false)

    const html = document.querySelector('html')
    localStorage.setItem('them', them)
    html.setAttribute('data-them', them)

    const handlerToggleTheme = () => {
        setThem(e => !e)
    }

    return (
        <div className={classes.theme_btn} 
            title={`Вкл. ${!them ? 'светлую' : 'темную'} тему`}
            onClick={handlerToggleTheme}
        >
            { 
                them ? <Moon/> : <Sun/> 
            }
        </div>
    )
}

export default ThemeBtn