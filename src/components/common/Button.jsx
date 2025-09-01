const Button = (props) => {
    return (
        <>
            <button
                className={
                    `px-7 py-4 rounded rounded-md transition duration-100 font-bold hover:bg-[#3c3c3c] hover:text-white active:bg-black active:text-white ease-in 
                    ${props.colorClass} 
                    ${props.sizeClass} 
                    ${props.fontSizeClass}`}
                onClick={props.onClick}
                type={props.type}
                key={props.key}
            >{props.value}</button >
        </>
    )
}

export default Button;