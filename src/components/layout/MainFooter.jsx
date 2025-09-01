const MainFooter = () => {
    return (
        <div className="py-[40px] px-[64px] border-t-[4px] border-[#f9f9f9] bg-white flex flex-col gap-[32px] items-center">
            <div className="flex justify-between w-full">
                <span className="font-black text-[40px] text-black cursor-pointer">VELOURA</span>
                <ul className="flex gap-[16px]">
                    <li className="cursor-pointer">Support Center</li>
                    <li className="cursor-pointer">Invoicing</li>
                    <li className="cursor-pointer">Contract</li>
                    <li className="cursor-pointer">Careers</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">FAQ</li>
                </ul>
            </div>
            <span className="text-[#484848]">Copyright © 2025 Sanchoka. All Rights Reseved.</span>
        </div>
    )
}

export default MainFooter;