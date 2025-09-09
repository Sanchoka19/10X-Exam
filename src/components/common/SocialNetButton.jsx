const SocialNetButton = (props) => {

    return (
        <button
            className="p-[12px] flex gap-[8px] items-center border-1 border-[#9D9D9D] rounded-md w-full mb-2 md:mb-0 justify-center transition duration-300 hover:bg-gray-100">
            <img src={props.src} alt={props.alt} />
            {props.value}
        </button>
    )

}

export default SocialNetButton;