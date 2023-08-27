import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Krishna</Link> - All rights reserved. (Template by Blaiti)</span>
            <ul className="flex">
                <li>
                    <a href="https://www.linkedin.com/in/krishna-shah-193b0a255/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/DragonflyRobotics" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UC6nu2aGbAEX3yy5b0W9GBIg" target="_blank" rel="noreferrer">
                        <Image src="/icons/youtube.svg" width={24} height={24} alt="youtube-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
