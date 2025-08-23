import React from "react";
import linkedin from "../assets/linkedin.png"


const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-17">
            <a className="hover:opacity-50 transition duration-500" href="https://www.linkedin.com/ishanphadke/" target="_blank" rel="noreferrer">
                <img alt="linkedin-link" src={linkedin}></img>
            </a>
        </div>
    )
}

export default SocialMediaIcons;