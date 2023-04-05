import Accordion from "@/components/Accordion/Accordion";
import Head from "next/head";
import UmlCards from "@/components/Card/Card";

// information display on help page
const FAQ = [
    {question: "Which is the current version?", answer: "Version 0.002"},
    {question: "Do you use transfer credits to get the pathway?", answer: "At the moment we do at a basic level"},
    {question: "What is Lorem Ipsum?", answer: "Lorem ipsum dolor sit amet, consectetur"},
];
const HelpCards = [
    { Title: "Overview", Content: "lorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.e " },
    { Title: "Generating Degree Pathways", Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { Title: "Accessing Reports", Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];
export default function HELP() {
    return (
        <>
            <Head>
                <title>HELP Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <UmlCards  Props={HelpCards}/>
                <br></br>
                <h1 className=" 
                    hover:uppercase 
                    w-1/2 
                    m-auto
                    flex
                    justify-center
                ">
                    <b>Frequently Asks Questions</b>
                </h1>
                <Accordion Items={FAQ} />
            </main>
        </>
      

    );
}
