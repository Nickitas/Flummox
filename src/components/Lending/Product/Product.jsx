import { useState } from 'react'
import Alert from '../../UI/Alert/Alert'
import CopyBtn from '../../UI/buttons/CopyBtn/CopyBtn'
import classes from './product.module.scss'


const Product = ({ data }) => {

    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState('')

    const handlerCopy = (url, susses, error) => {
        setShowAlert(true)
        navigator.clipboard.writeText(url)
        .then(() => setMessage(susses))
        .catch(err => setMessage(`${error}\n[ ${err} ]`))
    }

    return (
        <section className={classes.product} id='product'>
            <div className='container'>
                <div className={classes.col}>

                    <h2 className='title'>{ data.title }</h2>
                    
                    <div className={classes.banner}>
                        <div className={classes.mask}>
                            <p>{ data.subtitle }</p>
                            <div className={classes.qr_fade}>
                                <div className={classes.qr_block}>
                                    <div className={classes.qr_img} style={{
                                        background: `no-repeat url(${data.qr}) center`,
                                        backgroundSize: 'cover'
                                    }}></div>
                                </div>
                                <div className={classes.btn_wrapper} onClick={() => handlerCopy(data.url, data.susses, data.error)}>
                                    <CopyBtn/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
            <Alert 
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                message={message}
            />

        </section>
    )
}

export default Product