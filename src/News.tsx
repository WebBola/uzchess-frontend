import axios from "axios";
import { useEffect, useState } from "react";
import TopBooks from "./top-books";
import Anonis from "./Anonis";

function NewsItem({ date, title, desc, img }: { date: string, title: string, desc: string, img: string }) {
    return <div className='max-w-[335px] w-full bg-[#1A1D1F] rounded-[8px] p-4'>
        <img src={`http://localhost:3000/${img}`} alt="" />
        <p className="text-[14px] font-[400] font-poppins text-[#F7F9FA66] my-2">{date}</p>
        <h1 className="text-[#F7F9FA] text-[14px] font-[500] font-inter my-2 hover:text-[#1498F3] hover:cursor-pointer">{title}</h1>
        <p className="text-[#9DA1A3] text-[14px] font-[500] font-inter">{desc}</p>
    </div>
}

export default function News() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function getAllNews() {
            const response = await axios.get(`http://localhost:3000/public/news?search=${search}`)
            setNews(response.data)
        }
        getAllNews()
    }, [search]);

    return <div className="container flex gap-3 items-start">
        <div className="w-full flex flex-col gap-8">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-[32px] font-[700] font-poppins"> Yangiliklar </h1>
                <div className="relative">
                    <img src="/search-outline 1.svg" alt="" className="absolute top-1/2 left-2 -translate-y-1/2" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Izlash"
                        className="border border-[#9DA1A3] rounded-[8px] p-2 pl-[40px] text-[16px] font-[500] font-poppins text-[#F7F9FA] bg-transparent outline-none focus:border-[#1498F3]"
                    />
                </div>
            </div>
            <div className="flex justify-around gap-5 flex-wrap">
                {news.map((item: any) =>
                    <NewsItem key={item.id} date={item.date} title={item.title} desc={item.content} img={item.image} />
                )}
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-[#1A1D1F] border border-[#1F272A] text-[#F7F9FA] px-12 py-3 rounded-[8px] font-poppins text-[16px] font-medium hover:bg-[#262A2D] transition-colors cursor-pointer">
                    Ko'proq
                </button>
            </div>
        </div>

        <div className="flex flex-col gap-6">
            <Anonis />
            <TopBooks />
        </div>
    </div>
}