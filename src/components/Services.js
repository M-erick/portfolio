const Services = () => {
    return ( 
        <div className="font-sans bg-white">
              <section className="bg-white py-15"> {/*changed py from 20 to py-15  */}

                    <div className="max-w-5xl px-6 mx-auto text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">SKILLS</h2>
        
                        <div className="flex flex-col items-center justify-center mt-6">
                            <a className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div className=" items-center px-4 py-2">
                                    <h3 className="text-lg font-medium text-gray-700 underline ">WEB DEVELOPMENT</h3>
                                    <span className="block text-gray-600 font-light text-sm">HTML,CCS,PHP , REACT AND LARAVEL FRAMEWORK</span>
                                </div>
                            </a>
        
                            <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div className=" items-center  px-4 py-2">
                                    <h3 className="text-lg font-medium text-gray-700">NETWORKING</h3>
                                    <span className="block text-gray-600 font-light text-sm">CCNA </span>
                                </div>
                            </a>
        
                            {/* <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div className="flex items-center justify-between px-4 py-2">
                                    <h3 className="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                                    <span className="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                                </div>
                            </a>
        
                            <a className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div className="flex items-center justify-between px-4 py-2">
                                    <h3 className="text-lg font-medium text-gray-700">Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                                    <span className="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                                </div>
                            </a> */}
                        </div>
        
                        <div className="flex items-center justify-center mt-12">
                            <a className="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="#">
                               
                            </a>
                        </div>
                    </div>
                </section> 

        </div>
     );
}
 
export default Services;