import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons"
import { FeaturesCardValues } from "@/types/forms";
import { Button } from "@/components/ui/button";

const PricingCard = ({ type, desc, price, credits, upload, download_speed, video_length, ai_powered, year }: FeaturesCardValues) => {
    return (
        <div className={`text-black bg-white p-5 flex flex-col items-center justify-start my-5 rounded-md md:w-[27vw] ${(type == "Standard") ? "border-2 border-[#5D14A6]": (type == "Premium" ? "border-2 border-[#F22E76]" : "border-2 border-black")}`}>
            <div className="text-center">
                <h1 className="font-bold text-3xl mb-1">{type}</h1>
                <p className="text-[#6B7280]">{desc}</p>
            </div>
            <div className="text-center py-5 flex-grow-1">
                <span className="font-bold text-5xl">${!year ? price : (((price * 12) - ((price * 12) * 0.2)) / 12).toFixed(2)}</span><span>/mounth</span><br />
                <span>billed annually</span>
            </div>
            <div className="flex flex-col justify-center items-start py-5 pl-5 w-full gap-y-2">
                <div className="flex justify-center items-center gap-2">
                    <CheckCircledIcon width={25} height={25} color="green" />
                    <p className="text-lg">Credits: {credits}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <CheckCircledIcon width={25} height={25} color="green" />
                    <p className="text-lg">Upload: {upload}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <CheckCircledIcon width={25} height={25} color="green" />
                    <p className="text-lg">Download speed: {download_speed}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <CheckCircledIcon width={25} height={25} color="green" />
                    <p className="text-lg">Video length: {video_length}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div>
                        {ai_powered ?
                            <CheckCircledIcon width={25} height={25} color="green" /> :
                            <CrossCircledIcon width={25} height={25} color="red" />
                        }
                    </div>
                    <p className="text-lg">AI-Powered auto description with hashtags</p>
                </div>
            </div>
            <div className="">
                {/* <button className={`text-white bg-[#5D14A6] rounded-full px-5 py-3 mt-5`}>Upgrade plan</button> */}
                <Button variant={"secondary"}>Upgrade plan</Button>
            </div>
        </div>
    )
}

export default PricingCard
