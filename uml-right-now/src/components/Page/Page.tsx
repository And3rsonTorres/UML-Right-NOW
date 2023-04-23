import Course from "@/classes/Course";
import PageInfo from "@/classes/PageInfo";
import { getAllCourses } from "@/utils";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import CoursesManager from "@/singletons/CoursesManager";

// Types
type PageProps = {
    children: ReactNode,
    courses: Course[]
};

// Pages
const defaultPages = [
    new PageInfo("Home", "/"),
    new PageInfo("Pathways", "/pathways"),
    new PageInfo("Help", "/help"),
    new PageInfo("About", "/about-us"),
];
const loggedOutPages = [
    new PageInfo("Login", "/login")
];
const loggedInPages = [
    new PageInfo("Profile", "/profile")
];

export default function Page({ children, courses }: PageProps) {
    // State
    const [pages, setPages] = useState<PageInfo[]>([]);

    // Auth
    const session = useSession();

    useEffect(() => {
        // Initialize the CourseManager if applicabe
        if (!CoursesManager.instance.courses) {
            CoursesManager.instance.courses = courses;
        }

        // Initialize the array of pages
        const newPages = session.status === "authenticated"
            ? defaultPages.concat(loggedInPages)
            : defaultPages.concat(loggedOutPages);

        // Set the pages
        setPages(newPages);
    }, [session, courses]);

    return (
        <>
            {/* Document Head */}
            <Head>
                <title>UML Right NOW</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Nav Bar */}
            <Nav pages={pages} />

            {/* Hamburger Menu */}
            {children}

            {/* Footer */}
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const courses = await getAllCourses();

    return {
        courses: courses
    };
}
