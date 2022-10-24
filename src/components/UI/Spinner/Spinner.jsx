import classes from './spinner.module.scss'

const Spinner = () => {
    return (
        <div className={classes.spin_wrapp}>
            <div className={classes.spinner}>
                { Array.from({ length: 5 }).map((_, key) => <div key={key}></div>) }
            </div>
        </div>
    )
}

export default Spinner