import { useState } from 'react'
import Panel from './Panel/Panel'
import Spinner from '../UI/Spinner/Spinner'
import AllTraffic from './AllTraffic/AllTraffic'
import VerifiedTraffic from './VerifiedTraffic/VerifiedTraffic'
import SuspiciousTraffic from './SuspiciousTraffic/SuspiciousTraffic'
import CertainTraffic from './CertainTraffic/CertainTraffic'
import classes from './home.module.scss'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const [way, setWay] = useState('')

    return (
        <section className={classes.home}>
            <Panel way={way} setWay={setWay} />
            <div className='container'>
                <div className={classes.col}>
                    <div className={classes.content}>
                        {
                            way === 'all_traffic' && (
                                <AllTraffic setWay={setWay} />
                            ) ||
                            way === 'verified_traffic' && (
                                <VerifiedTraffic setWay={setWay} />
                            ) ||
                            way === 'suspicious_traffic' && (
                                <SuspiciousTraffic setWay={setWay} />
                            ) ||
                            way === 'сertain_traffic' && (
                                <CertainTraffic setWay={setWay} /> 
                            ) || (
                                <div>
                                    <h3 className='subtitle'>Выберете интересующий объем сетевого трафика</h3>
                                    <Spinner/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home