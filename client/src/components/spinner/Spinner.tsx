import classes from "./Spinner.module.scss"

export const Spinner = () => {
  return (
    <div className={classes.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}
