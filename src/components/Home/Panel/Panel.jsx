import Logo from '../../UI/Logo/Logo'
import classes from './panel.module.scss'


const navItems = [
    {
        title:'Весь',
        link:'all_traffic'
    },
    {
        title:'Проверенный',
        link:'verified_traffic'
    },
    {
        title:'Подозрительный',
        link:'suspicious_traffic'
    },
    {
        title:'Неопределенный',
        link:'сertain_traffic'
    }
]

const Panel = ({ way, setWay }) => {

    const handlerWayСhosen = (link) => {
        setWay(link)
    }

    return (
        <div className={classes.panel}>
            <div className='container'>
                <div className={classes.row}>
                    <Logo/>
                    <ul className={classes.list}>
                        {
                            navItems.map((item, key) => (
                                <li className={way === item.link ? `${classes.item} ${classes.active}` : classes.item} key={key} onClick={() => handlerWayСhosen(item.link)}>
                                    { item.title }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Panel