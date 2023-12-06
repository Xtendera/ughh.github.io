import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>AI Researcher</button>
                    <h1 className="white">Artificial Intelligence</h1>
                    <h1 className="white">Robotics</h1>
                    <p className="gray">Two fields I strive to learn and improve as I research novel algorithms!</p>
                    <a className="green" href="mailto:kshahuas@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/blaiti.png" width={415} height={601} alt="krishna"  /> 
            </div>
        </header>
    )
}
