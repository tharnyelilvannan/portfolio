'use client'
import React from 'react'
import { motion } from "motion/react"
import GitHub from "../images/github-logo/github-mark/github-mark-white.png";
import Image from "next/image";
import LinkedIn from "../images/in-logo/in-logo/InBug-Black.png";
import MEC from '../components/MEC';
import Altimeter from '../components/Altimeter';
import DARE from '../components/DARE';
import Portfolio from '../components/Portfolio';
import MASS from '../components/MASS';
import RescueMission from '../components/RescueMission';

const experiences = [
    {
        title: 'MEC',
        description: `I was a Programming Co-Lead for the McMaster Engineering Competition. In this role, I hosted a competition for 80+ competitors, allowing them to showcase their software engineering skills.

My duties included preparing competition materials, including a briefing presentation, competition package, rubric, and welcome message using G Suite.`
    },
    {
        title: 'DARE',
        description: `I am a Software Team Member for the McMaster Deep-space Analogue Research Expedition. In this role, I developed a web app with React that allows us to remotely control our ROV, BELUGA. 
        
BELUGA's mission is to simulate exploring the Galilean moon Europa, known for potential oceans beneath its ice. BELUGA will be able to explore underwater, recording data that it will be able to bring home.`
    },
    {
        title: 'MASS',
        description: `I am a CAN-SBX Co-Lead for McMaster Advanced Space Systems. I supervise our submission for the 2026 CAN-SBX competition, and lead the Software subteam to develop mission critical systems.
        
Additionally, I am Co-VP Communications for McMaster Advanced Space Systems. In this role, I monitor the club email, ensure team communication is seamless, and handle communication with the MES.`
    },
    {
        title: 'Character Driver',
        description: 'I implemented a character driver for Linux, using a circular buffer for read/write, and mutexes for thread safety. I plan to implement blocking I/O soon!'
    },
    {
        title: '',
        description: ''
    }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-[#022D33] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-[Georgia] font-bold text-[#D9D3D7] mb-3">Experience & Projects</h1>
                    <div className="w-20 h-1 bg-[#D9D3D7]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#0d3838] rounded-2xl border border-[#D9D3D7] p-8 transition-all duration-300 hover:border-[#D9D3D7] hover:shadow-lg hover:shadow-[#D9D3D7] hover:-translate-y-1"
                        >
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#022D33] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#022D33] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <h2 className="text-2xl font-mono font-semibold text-[#D9D3D7] mb-6 tracking-wide">
                                {exp.title}
                            </h2>
                            <p className="font-mono text-sm text-[#D9D3D7] leading-relaxed whitespace-pre-line">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}