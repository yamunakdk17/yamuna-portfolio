// import React from "react";
// import {
//     // GithubIcon,
//     // LinkedinIcon,
    
    
//     Heart
// } from "lucide-react";

// // import {
// //     PERSONAL_INFO,
// //     SOCIAL_LINKS,
// //     NAV_LINKS,
// // } from "../../utils/constants";

// import { scrollToSection } from "../../hooks/useScrollSpy";
// import FadeIn from "../animations/FadeIn";

// // const Footer = () => {
//     // const socialIcons = {
//     //     github: GithubIcon,
//     //     linkedin: LinkedinIcon,

//     // };

//     return (
//         // <footer className="relative bg-black overflow-hidden border-t border-white/10">
//         //     <div className="absolute inset-0 overflow-hidden  ">
//         //         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl"></div>
//         //         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl"></div>
//         //     </div>

//         //     <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
//         //             {/* <FadeIn delay={0}>
//                 //         <h3 className="text-3xl font-bold bg-linear-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent md-1">
//                 //             {PERSONAL_INFO.name.split(" ")[0]}
//                 //         </h3>

//                 //         <p className="text-white/60 leading-relaxed">
//                 //             {PERSONAL_INFO.tagline}
//                 //         </p>
//                 //         <div className="space-y-3">
//                 //             <a
//                 //                 href={`mailto:${PERSONAL_INFO.email}`}
//                 //                 className="group flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300"                            >
//                 //                 <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center">
//                 //                     <Mail className="w-4 h-4 text-primary" />
//                 //                 </div>

//                 //                 <span className="text-white/70 text-sm group-hover:text-white transition-cols">
//                 //                     {PERSONAL_INFO.email}
//                 //                 </span>
//                 //             </a>

//                 //             <div className="flex item-start gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
//                 //                 <div className="p-2 bg-primary/10 rounded-lg">
//                 //                     <MapPin className="w-4 h-4 text-primary" />
//                 //                 </div>

//                 //                 <span className="text-white/70 text-sm">
//                 //                     {PERSONAL_INFO.location}
//                 //                 </span>
//                 //             </div>
//                 //         </div>



//                 //     </FadeIn> */}
//                 // </div>



                





//                     {/* <div className="space-y-3">
//                         <h3 className="text-white font-semibold text-lg">Quick Links</h3>

//                         <ul className="space-y-2">
//                             <li>
//                                 <a href="#home" className="text-white/60 hover:text-primary transition-colors duration-300">
//                                     Home
//                                 </a>
//                             </li>

//                             <li>
//                                 <a href="#about" className="text-white/60 hover:text-primary transition-colors duration-300">
//                                     About
//                                 </a>
//                             </li>

//                             <li>
//                                 <a href="#projects" className="text-white/60 hover:text-primary transition-colors duration-300">
//                                     Projects
//                                 </a>
//                             </li>

//                             <li>
//                                 <a href="#contact" className="text-white/60 hover:text-primary transition-colors duration-300">
//                                     Contact
//                                 </a>
//                             </li>
//                         </ul>
//                     </div> */}





//                 <FadeIn delay={300}>
//                     <div className="pt-8 border-t border-white/10">
//                         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//                             <p className="text-white/70 text-sm">
//                                 © {new Date().getFullYear()} {PERSONAL_INFO.name}
//                             </p>

//                             <p className="flex items-center gap-2 text-white/50 text-sm">
//                                 Built with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> using React
//                             </p>
//                         </div>
//                     </div>
//                 </FadeIn>





// //             </div>
// //         </footer>
// //     );
// // };

// export default Footer;


import React from "react";
import { Heart } from "lucide-react";

import { PERSONAL_INFO } from "../../utils/constants";

import FadeIn from "../animations/FadeIn";

const Footer = () => {
    return (
        <footer className="relative bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <FadeIn delay={300}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/70 text-sm">
                            © {new Date().getFullYear()} {PERSONAL_INFO.name}
                        </p>

                        <p className="flex items-center gap-2 text-white/50 text-sm">
                            Built with{" "}
                            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
                            using React
                        </p>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;