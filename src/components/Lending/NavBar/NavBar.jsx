import { useState } from 'react'
import Logo from '../../UI/Logo/Logo'
import BtnSm from '../../UI/buttons/BtnSm/BtnSm'
import { Close, Menu } from '../../svg.module'
import classes from './nav_bar.module.scss'


const NavBar = ({ data }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className={classes.nav_bar}>
            <div className='container'>
                <div className={classes.row}>
                    
                    <div className={classes.wrapp}>
                        <Logo/>
                        <ul className={classes.list}>
                            {
                                data.list.map((item, key) => (
                                    <li className={classes.item} key={key}>
                                        <a href={item.link}>{ item.title }</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                        
                    <a href='#product'>
                        <BtnSm>{ data.btn }</BtnSm>
                    </a>
           
                    <div className={classes.menu_btn} onClick={() => setMenuOpen(e => !e)}>
                        { menuOpen ? <Close/> : <Menu/> }
                    </div>

                    <div className={`${classes.dropdown} ${menuOpen&&classes.open}`}>
                        <div className='container'>
                            <div className={classes.col}>
                                {
                                    data.list.map((item, key) => (
                                    <a key={key} href={item.link} onClick={() => setCam(item.link)}>
                                        { item.title }
                                    </a>
                                ))}
                                <a href='#product'>{ data.btn }</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav> 
    )
}

export default NavBar