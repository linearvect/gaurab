import Jokes from "../components/Jokes";
import SkillDescription from "../components/SkillDescription";
import TypingText from "../components/TypingText"
import useJokes from "../hooks/useJokes";
import myImage from "/Me standing view.webp"
import { FaLinkedin, FaGithub, FaTwitter , FaYoutube, FaInstagram } from 'react-icons/fa';
import BlogButton from "../components/BlogButton";


const Home = () => {

    const {joke, loading, showJoke, handleToggle, ReFetchJoke} = useJokes()

    return (
            <div className="min-h-screen bg-cyan-950 pt-15 md:pt-20">
                {/* Single Centered Layout for all screen sizes */}
                <div className="flex flex-col items-center justify-center px-4 py-8 gap-5 max-w-4xl mx-auto">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <img
                            className="h-50 m-5 sm:h-72 md:h-80 lg:h-96 w-auto object-cover rounded-lg shadow-xl border-1 border-yellow-300/80 hover:border-fuchsia-400 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20"
                            src={myImage}
                            alt="Cover picture"
                            loading="lazy"
                        />
                    </div>

                    {/* Typing Text */}
                    <div className="text-center">
                        <TypingText/>
                    </div>
            
                    {/* Social Icons */}
                    <div className="flex gap-4 sm:gap-6 mt-4">
                        <a href="https://www.linkedin.com/in/gaurab-wagle-35a402229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" 
                        className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform">
                            <FaLinkedin size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </a>
                        <a href="https://github.com/gxaurab" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </a>
                        <a href="https://x.com/Gxaurab" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </a>
                        <a href="https://www.youtube.com/@windx805" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </a>
                        <a href="instagram.com/gxaurab" className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 transform" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </a>
                    </div>
                    <p className="text-white font-sans">oe.gaurav@gmail.com</p>
                    
                    {/* Joke Section */}
                    <div className="pt-2 text-center max-w-md">
                        {showJoke ? (
                            <div className="space-y-4">
                                <Jokes joke={joke} loading={loading} />
                                <button 
                                    onClick={ReFetchJoke}
                                    className="bg-green-600 px-4 py-2 font-mono text-sm sm:text-base text-yellow-200 hover:bg-red-400 rounded-md transition-colors duration-300 transform hover:scale-105">
                                    Get New Joke
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={handleToggle}
                                disabled={loading}
                                className="bg-green-700 px-4 py-2 font-mono text-sm sm:text-base text-yellow-200 hover:bg-green-500 rounded-md transition-colors duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed">
                                {loading ? "Loading..." : "Get Jokes!"}
                            </button>
                        )}
                    </div>
                </div>
                <div className="text-center">
                    <BlogButton text="Writings/Blogs"/>
                </div>
                    <SkillDescription/>
            </div>
    )
}

export default Home