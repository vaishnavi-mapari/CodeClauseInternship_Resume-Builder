import Link from "next/link";
import { GrTools } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { DiMobile } from "react-icons/di";
import { FcExport, FcImport } from "react-icons/fc";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
    return (
        <>
            <section className="bg-gray-200">
                <div className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex space-x-7">
                            <div>
                                <Link href="/" className="flex items-center py-4 px-2 text-gray-800 hover:text-gray-900">
                                    <Image src="/assets/new-logo.jpg" alt="logo" width={50} height={50} />
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link href="/features" className="py-4 px-2 text-gray-800 hover:text-gray-900">
                                    Features
                                </Link>
                                <Link href="/pricing" className="py-4 px-2 text-gray-800 hover:text-gray-900">
                                    Pricing
                                </Link>
                                <Link href="/contact" className="py-4 px-2 text-gray-800 hover:text-gray-900">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full text-center">
                        <h1 className="text-6xl font-bold text-gray-900 mb-2">
                            Transform Your Career with Our <br />
                            <span className="text-blue-600">
                                <Typewriter
                                    words={['Innovative', 'Creative', 'Tailored']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            <br />
                            Solutions.
                        </h1>
                        <p className="text-gray-700 mb-4">
                            Welcome to CareerElevate, your all-in-one platform for building exceptional resumes and portfolios that stand out in today’s competitive job market. Leverage our advanced tools to showcase your skills and impress employers effortlessly.
                        </p>
                        <Link href="/get-started" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-500 transition duration-200 hover:-translate-y-1 transform hover:shadow-lg">
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>
            <About />
        </>
    );
}

const About = () => {
    return (
        <section className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Key Features
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex bg-blue-500 rounded-lg shadow-lg p-4">
                            <GrTools className="text-8xl text-gray-900 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Customized Tools
                                </h1>
                                <p className="text-gray-600">
                                    Utilize our unique tools designed to create resumes that cater specifically to your career goals and industry standards.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-blue-500 rounded-lg shadow-lg p-4">
                            <MdSecurity className="text-8xl text-gray-900 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Secure Data
                                </h1>
                                <p className="text-gray-600">
                                    Your information is protected with our top-notch security measures, ensuring your data remains private and secure.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-blue-500 rounded-lg shadow-lg p-4">
                            <GiWallet className="text-8xl text-gray-900 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Affordable Plans
                                </h1>
                                <p className="text-gray-600">
                                    Choose from a variety of pricing plans that fit your budget without sacrificing quality. Quality service doesn't have to break the bank!
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-blue-500 rounded-lg shadow-lg p-4">
                            <DiMobile className="text-8xl text-gray-900 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Responsive Design
                                </h1>
                                <p className="text-gray-600">
                                    Our platform is optimized for all devices, allowing you to build and edit your resume seamlessly from anywhere, anytime.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-blue-500 rounded-lg shadow-lg p-4">
                            <FcExport className="text-8xl text-gray-900 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Export Options
                                </h1>
                                <p className="text-gray-600">
                                    Easily export your resume in multiple formats (PDF, Word) to suit your application needs and preferences.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-blue-500 rounded-lg shadow-lg p-4">
                            <FcImport className="text-8xl text-gray-900 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Import Feature
                                </h1>
                                <p className="text-gray-600">
                                    Import your existing resumes in various formats to easily update and enhance your information with our powerful tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
