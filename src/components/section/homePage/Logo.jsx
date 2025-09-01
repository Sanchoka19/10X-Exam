import chanelLogo from "../../../assets/images/Chanel.png"
import louisVuitonLogo from "../../../assets/images/louisVuiton.png"
import pradaLogo from "../../../assets/images/prada.png"
import calvinKleinLogo from "../../../assets/images/calvinKlein.png"
import denimLogo from "../../../assets/images/denim.png"

const Logo = () => {
    return (
        <div className="flex px-[20px] py-[120px] gap-[60px] w-full flex flex-wrap items-center justify-center bg-white">
            <img src={chanelLogo} alt="chanelLogo" className="h-[33px]" />
            <img src={louisVuitonLogo} alt="louisVuitonLogo" />
            <img src={pradaLogo} alt="pradaLogo" />
            <img src={calvinKleinLogo} alt="calvinKleinLogo" />
            <img src={denimLogo} alt="denimLogo" />
        </div>
    )
}

export default Logo;