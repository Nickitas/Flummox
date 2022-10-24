import { useState } from 'react'
import Logo from '../../UI/Logo/Logo'
import Alert from '../../UI/Alert/Alert'
import { navigation, contacts, copywrite } from '../../../data'
import classes from './footer.module.scss'


const Footer = () => {

    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')

    const handleClick = (link) => {
        setShowAlert(true)
        navigator.clipboard.writeText(link)
        .then(() => setMessage(`${contacts.tg} ${link} ${contacts.susses}`))
        .catch(err => setMessage(`${contacts.error}\n[ ${err} ]`))
    }

    return (
        <footer className={classes.footer}>
            <div className='container'>
                <div className={classes.row}>
                    <div className={classes.block}>
                        <Logo />
                        <p className='text'>{ copywrite.text }<br/>{copywrite.city}</p>
                    </div>
                    <div className={classes.block}>
                        <div className={classes.navigation}>
                            <h3 className='subtitle'>{ navigation.title }</h3>
                            <ul className={classes.list}>
                                {
                                    navigation.list.map((item, key) => (
                                        <li key={key}>
                                            <a href={item.link}>{ item.title }</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={classes.contacts}>
                            <h3 className='subtitle'>{ contacts.title }</h3>
                            <ul className={classes.list}>
                                {
                                    contacts.list.map((item, key) => (
                                        <li key={key} onClick={() => handleClick(item.link)}>
                                            <a>{ item.name }</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
            <Alert 
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                message={message}
            />
            

        </footer>
    )
}

export default Footer