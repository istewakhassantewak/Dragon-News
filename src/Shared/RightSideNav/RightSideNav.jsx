import { FaGoogle, FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-4 mb-6">
                <h2 className="text-2xl">Login With</h2>
                <button className="btn w-full text-sky-300 border-sky-300">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn w-full border">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="p-4 space-y-4 mb-6">
                <h2 className="text-2xl">Find Us on</h2>
                <div>
                    <a href="" className="p-4 flex  items-center gap-3 text-2xl border rounded-t-lg  ">
                        <FaFacebook className="mr-2"></FaFacebook>
                        Facebook
                    </a>
                    <a href="" className="p-4 flex  items-center gap-3 text-2xl border-x  ">
                        <FaTwitter className="mr-2"></FaTwitter>
                        Twitter
                    </a>
                    <a href="" className="p-4 flex  items-center gap-3 text-2xl border rounded-b-lg  ">
                        <FaInstagram className="mr-2"></FaInstagram>
                        Instagram
                    </a>
                </div>

            </div>
            <div className="p-4 space-y-4 mb-6">
                <h2 className="text-2xl">Q Zone</h2>
                <button className="btn w-full text-sky-300 border-sky-300">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn w-full border">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;