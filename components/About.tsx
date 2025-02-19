import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Computer Vision"
                        icon="/icons/cv.png"
                        description="I have developed many powerful applications and algorithms like a novel, unsupervised object detector using heatmaps and a sub-image search technique."
                        projects={9} />
                    <AboutCard
                        title="Computational Neurology"
                        icon="/icons/ai.png"
                        description="I developed a novel algorithm to model hippocampal-entorhinal interactions on a computer with ground-breaking results (a research paper will publish soon)!"
                        projects={4} />
                    <AboutCard
                        title="Robotics"
                        icon="/icons/robot.png"
                        description="From holonomic swerve drives to quadrupedal robot dogs to autonomous vehicles, I have experience across many realms of robotics. "
                        projects={20} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Krishna Shah</h1>
                    <h3 className="white">Research is not a goal but a process.</h3>
                    <p className="gray">I have always strived to research the intricacies of the human brain to understand the genesis of human intelligence better. All my robotics projects and AI algorithms serve as a stepping stone to a new era of generally intelligence machines and a nuanced understanding of the human brain.</p>
                </div>
            </div>

            <div className="flex partners justify-space justify-center">
                <Image src="/images/partners/dsl.png" height={180} width={180} alt="dsl" />
                <Image src="/images/partners/utd.png" height={180} width={180} alt="utd" />
                <Image src="/images/partners/b4d.png" height={180} width={180} alt="b4d" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}
