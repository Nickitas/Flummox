import { CopyIcon } from '../../../svg.module'
import classes from './copy-btn.module.scss'

const CopyBtn = ({ ...props }) => {
    return (
        <button {...props} className={classes.copyBtn}>
            <CopyIcon/>
        </button>
    )
}

export default CopyBtn