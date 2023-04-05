import TranscriptInput from "@/components/TranscriptInput/TranscriptInput";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect } from "react";
import { BsRocketTakeoffFill, BsSafe2Fill } from "react-icons/bs";
import SearchBar from "../components/SearchBar/SearchBar";

// Contexts
import { TranscriptContext, TranscriptContextType } from "@/contexts/TranscriptContext";

export default function Home() {
    const backgroundimage1 = "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    // Contexts
    const { setTranscript, setMajor } = useContext(TranscriptContext) as TranscriptContextType;

    // Initialize router
    const router = useRouter();
    const textSafe = [{ text: "Creating an account or logging in is essential to make the most of our website. You'll get access to features such as saving searches and preferences, personalized recommendations, and our comprehensive pathway generator. Sign up today and enjoy a seamless experience." }, { text: "Your data privacy and security are our top priority. We use robust encryption and adhere to data protection laws to keep your personal information confidential and secure." }];

    useEffect(() => {
        // Reset the transcript and major each time the home page is visited
        setTranscript(null);
        setMajor(null);
    }, [setTranscript, setMajor]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        router.push("/pathways");
    }

    return (
        <main>
            <div className="w-full backdrop-brightness-50 h-screen flex bg-rowdy-blue bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundimage1})` }} >
                <form onSubmit={handleSubmit} className="absolute w-full h-full">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-sans mt-20 text-center text-white mb-9">Enter Your <em className="text-rowdy-blue underline">major</em>  to get started</h1>
                    <div className="flex flex-col justify-center w-auto mt-px p-10 bg-black border-white border-t-1 bg-opacity-20">
                        <div className=" flex justify-center mt-px">
                            <SearchBar />
                        </div>
                        <div className=" flex justify-center" >
                            <h1 className="text-4xl m-8 text-white">Optionally</h1>
                        </div>
                        <div className=" flex justify-center m-8" >
                            <Tooltip content={"Upload Your UML transcript so we can help you better with your degree path"} color="primary" placement="rightEnd">
                                <TranscriptInput />
                            </Tooltip>
                        </div>
                        <div className=" flex justify-center mt-px">
                            <input type="submit" value="Generate" className="bg-rowdy-blue w-32 h-10 hover:w-36 hover:bg-rowdy-blue-variation border-white border-2 text-white mt-6 rounded-3xl cursor-pointer " />
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-rowdy-blue h-3/6 p-6 justify-center bg-opacity-80">
                <h1 className="text-3xl font-bold text-center text-white">Join UML-right-now</h1>
                <div className="grid grid-cols lg:grid-cols-2 justify-center p-5">
                    <div className="border-white border-b-2 p-5 lg:border-r-2 lg:border-b-0">
                        <div className="flex justify-center m-4"><BsRocketTakeoffFill size={50} color="white" /></div>
                        <h1 className="text-center text-white font-bold lg:text-left">{textSafe[0].text}</h1>
                    </div>
                    <div className="p-5">
                        <div className="flex justify-center m-4"><BsSafe2Fill size={50} color="white" /></div>
                        <h1 className="text-white font-bold text-center lg:text-left">{textSafe[1].text}</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href="/sign-up" className="bg-white rounded-full hover:w-36 p-3 m-6 text-center cursor-pointer">Sign Up Now</Link>
                </div>
            </div>
        </main>
    );
}
