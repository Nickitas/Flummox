import { useEffect } from 'react'
import { Lightning, Close } from '../../svg.module'
import classes from './alert.module.scss'


const Alert = ({ showAlert, setShowAlert, message }) => {

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 2_500)
    }, [showAlert])

    const handleCloseAlert = () => {
        setShowAlert(false)
    }

    return (
        <div className={`${classes.alert} ${showAlert ? classes.animation : ''}`}>
            <div className={classes.icon}>
                <Lightning/>
            </div>
            <div className={classes.message}>
                <h4 className='headline'>Информация</h4>
                <p className='text'>{ message }</p>
            </div>
            <div className={classes.close} onClick={handleCloseAlert}>
                <Close/>
            </div>
        </div>
    )
}

export default Alert