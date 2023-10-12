import { UploadIcon } from "@radix-ui/react-icons"
import Image from "next/image"

const Features = () => {
    return (
        <section className="w-full h-auto px-5 flex flex-col justify-center pb-7">
            <h1 className="text-center font-bold text-2xl text-black py-10">
                Highly Accurate And Secure <span className="bg-gradient-to-r from-[#F22E76] to-[#5D14A6] text-transparent bg-clip-text">
                    Subtitling For Your Business
                </span>
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-5 md:flex-row">
                <div className="bg-[#5D14A6] bg-opacity-20 rounded-md p-5 flex flex-col items-center justify-start h-80 md:w-80">
                    <div className=" w-full h-30 flex flex-col items-center justify-center">
                        <Image
                            className="pb-2"
                            src="./landing-page-assets/upload.svg"
                            alt="upload"
                            width={50}
                            height={50}
                        />
                        <h1 className="font-bold text-black text-xl text-center">Upload Video</h1>
                    </div>
                    <p className="text-[#555A63] text-center p-5">
                        sign up for a free account and upload your video file onto our transcription platform
                    </p>
                </div>
                <div className="bg-[#5D14A6] bg-opacity-20 rounded-md p-5 flex flex-col items-center justify-start h-80 md:w-80">
                    <div className=" w-full h-30 flex flex-col items-center justify-center">
                        <Image
                            className="pb-2"
                            src="./landing-page-assets/caption.svg"
                            alt="upload"
                            width={50}
                            height={50}
                        />
                        <h1 className="font-bold text-black text-xl text-center">Transcription & Subtitling</h1>
                    </div>
                    <p className="text-[#555A63] text-center p-5">
                        We use industry leading artificial intelligence to transcribe and subtitle your file, we can transcribe as many files as you want
                    </p>
                </div>
                <div className="bg-[#5D14A6] bg-opacity-20 rounded-md p-5 flex flex-col items-center justify-start h-80 md:w-80">
                    <div className=" w-full h-30 flex flex-col items-center justify-center">
                        <Image
                            className="pb-2"
                            src="./landing-page-assets/export.svg"
                            alt="upload"
                            width={50}
                            height={50}
                        />
                        <h1 className="font-bold text-black text-xl">Review & Export</h1>
                    </div>
                    <p className="text-[#555A63]  text-center p-5">
                        sign up for a free account and upload your video file onto our transcription platform
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features
