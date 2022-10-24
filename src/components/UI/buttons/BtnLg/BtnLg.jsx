import classes from './btn-lg.module.scss'

const BtnLg = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.BtnLg}>
            { children }
        </button>
    )
}

export default BtnLg