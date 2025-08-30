import Styles from "./Input.module.css"

const Input = (props) => {
    return (
        <div className={Styles.inputCon}>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required
            />
            <div className={Styles.inputLabel}>{props.inputVal}</div>
        </div>
    )
}

export default Input;