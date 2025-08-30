const Button = (props) => {
    return (
        <>
            <button
                className={
                    `px-7 py-4 rounded rounded-md transition duration-150 font-bold hover:bg-[#7a9595] active:bg-black ease-in 
                    ${props.colorClass} 
                    ${props.sizeClass} 
                    ${props.fontSizeClass}`}
                onClick={props.onClick}
                type={props.type}
            >{props.value}</button >
        </>
    )
}

export default Button;