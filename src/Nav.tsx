import { useState } from "react";

export default function Navbar() {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("O'zbekcha");

    const languages = [
        { label: "O'zbekcha", code: "uz" },
        { label: "Ўзбекча", code: "uz_cyr" },
        { label: "Русский", code: "ru" }
    ];

    return <header className="h-[100px] mb-10! container ">
        <nav className="w-full bg-[#1A1D1F] border-[#1F272A] border-[1px] rounded flex justify-between items-center h-[76px] px-6 rounded-[16px] mt-4 relative">
            <div className="flex items-center gap-4 text-[#F7F9FA] font-poppins">
                <a href="#"><img src="/Frame 427318621.svg" alt="UzChess" /></a>
                
                <div className="h-[32px] border-l border-[#3D4549]"></div>

                <div className="relative">
                    <button 
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-2 cursor-pointer text-[16px] font-medium hover:text-white transition-colors"
                    >
                        {selectedLang}
                        <svg 
                            className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} 
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isLangOpen && (
                        <div className="absolute top-[50px] left-0 w-[180px] bg-[#1A1D1F] border border-[#1F272A] rounded-xl overflow-hidden z-50 shadow-2xl">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setSelectedLang(lang.label);
                                        setIsLangOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 text-[14px] transition-colors hover:bg-[#262A2D] ${
                                        selectedLang === lang.label ? 'text-[#1C92E0] bg-[#262A2D]' : 'text-[#9DA1A3]'
                                    }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center text-[#F7F9FA] text-[14px] font-medium font-poppins">
                <ul className="flex items-center gap-7">
                    <li>
                        <a href="#" className="hover:border-b-2 hover:border-[#1498F3] pb-1">Asosiy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-b-2 hover:border-[#1498F3] pb-1">Yangiliklar</a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-b-2 hover:border-[#1498F3] pb-1">Kurslar</a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-b-2 hover:border-[#1498F3] pb-1">Kutubxona</a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-b-2 hover:border-[#1498F3] pb-1">Jamoa</a>
                    </li>
                </ul>
            </div>

            <div className="flex justify-center gap-4 items-center">
                <div className="flex items-center gap-4">
                    <a href="#"><img className="h-[24px]" src="/search-outline 2.svg" alt="" /></a>
                    <a href="#"><img className="h-[24px]" src="/Component 1.svg" alt="" /></a>
                    <a href="#"><img className="h-[24px]" src="/notifications-outline 1.svg" alt="" /></a>
                </div>
                <div className="h-[24px] border-l border-[#3D4549]"></div>
                <button className="flex gap-1 bg-[#1C92E0] text-[14px] text-white rounded-[4px] py-2 px-5 items-center h-[40px] cursor-pointer hover:bg-[#1676b5] transition-colors">
                    Kirish <img src="/log-in.svg" alt="" />
                </button>
            </div>
        </nav>

        <div className="flex items-center gap-2 text-[#F7F9FA] text-[14px] font-[500] font-poppins ml-5 mt-2">
            <img src="/home 1.svg" alt="" />
            <p className="text-[#6D7274] font-[500] font-poppins text-[14px]">Asosiy</p>
            <img src="/Frame 427318565.svg" alt="" />
            <p className="text-[#fff] font-[500] font-poppins text-[14px]">Yangiliklar</p>

        </div>
    </header>

    
}