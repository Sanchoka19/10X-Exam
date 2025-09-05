import footerImg1 from "../../../assets/images/footer-img1.png";
import footerImg2 from "../../../assets/images/footer-img2.png";
import Button from "../../common/Button";

const Subscribe = () => {
    return (
        <div className="flex justify-center py-[120px] px-[10px] bg-white">
            <img src={footerImg1} alt="footerImg1" className="hidden xl:flex" />
            <div className="flex flex-col justify-center items-center gap-[32px]">
                <div className="flex flex-col justify-center gap-[24px]">
                    <h1 className="font-bold text-center">Subscribe To Our Newsletter</h1>
                    <p className="max-w-[631px] w-full text-center self-center">Join our growing community and never miss important news, product launches, or expert tips that help you stay informed. </p>
                    <span className="text-2xl text-[#8A8A8A] mt-[8px]">veloura@gmail.com</span>
                </div>

                <Button colorClass="bg-black px-[20px] text-white w-[207px]" value="Subscribe Now" />
            </div>
            <img src={footerImg2} alt="footerImg2" className="hidden xl:flex" />
        </div>
    )
}

export default Subscribe;