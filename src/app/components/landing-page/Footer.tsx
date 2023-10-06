import { GitHubLogoIcon, TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

const Footer = () => {
    return (
        <footer className="w-full h-auto px-5 pt-7">
            <h1 className="font-bold text-2xl text-center bg-gradient-to-r from-[#F22E76] to-[#5D14A6] text-transparent bg-clip-text pb-5">SUBFAST</h1>
            <div className="text-black flex flex-wrap justify-center items-center gap-5 pb-5">
                <a href="#">Mission</a>
                <a href="#">Pricing</a>
                <a href="#">Merch</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </div>
            <div className=" flex items-center justify-center gap-5 pb-5">
                <GitHubLogoIcon color="#F22E76" width={30} height={30} />
                <TwitterLogoIcon color="#F22E76" width={30} height={30} />
                <InstagramLogoIcon color="#F22E76" width={30} height={30} />
                <LinkedInLogoIcon color="#F22E76" width={30} height={30} />
            </div>
            <hr className="w-full h-px mb-5 border border-[#F22E76]" />
                <p className="text-gray-500 text-center pb-5">© 2023 subfast. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
