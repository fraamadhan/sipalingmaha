import React from 'react'

export default function Dashboard() {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 p-2 mt-0 fixed w-full z-10 top-0">
                <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/dashboard/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="mt-28 text-center"> 
                <h1 className="text-5xl font-bold"> GeeksforGeeks </h1> 
                <h2 className="text-4xl  
                    text-green-600  
                    mt-4 mb-4"> sticky Navbar Tailwind CSS</h2> 
                
                <div>
                    <p className="text-2xl"> 
                        GeeksforGeeks is a widely recognized 
                        and popular online learning platform 
                        that focuses on providing quality 
                        programming tutorials and coding 
                        challenges. It is one of the largest 
                        and most comprehensive computer science 
                        portals globally, catering to students, 
                        software developers, and tech 
                        enthusiasts alike. 
                    <br /> 
                    </p> 
                    <div className="text-3xl  
                        font-bold  
                        py-5"> 
                Key features of GeeksforGeeks include: 
                    </div> 
                    <br /> 
                    <p className="text-2xl"> 
                        Coding Practice: GeeksforGeeks offers an 
                        extensive collection of coding challenges 
                        and practice problems across various 
                        programming languages, data structures, 
                        algorithms, and other computer science 
                        topics. These practice exercises help 
                        individuals improve their 
                        problem-solving and coding skills. 
                        <br /><br /> 
                        Technical Articles and Tutorials: 
                        GeeksforGeeks provides a vast repository 
                        of technical articles and tutorials on a 
                        wide range of topics, including 
                        programming languages 
                        (such as C++, Java, Python), 
                        algorithms, data structures, web 
                        development, machine learning, and more. 
                        These articles are written in a concise 
                        and easy-to-understand manner, making 
                        complex concepts accessible to learners 
                        of all levels. 
                    </p> 
                </div>
            </div>
        </div>

    )
}
