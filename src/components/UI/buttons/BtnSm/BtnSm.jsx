import classes from './btn-sm.module.scss'

const BtnSm = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.BtnSm}>
            { children }
        </button>
    )
}

export default BtnSm