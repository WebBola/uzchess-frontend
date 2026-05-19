import { useEffect, useState } from "react";
import Anonis from "./Anonis"
import Support_rek from "./Support_rek";
import axios from "axios";

function CoursesItem({
    title, desc, price, newPrice, section, level, levelIcon, language, category, rating, image, authorName
}: {
    title: string, desc: string, price: number, newPrice: number, section: number, level: string, language: string, category: string, rating: number, image: string, authorName: string, levelIcon: string,
}) {
    const [liked, setLiked] = useState(false);

    return <div className="bg-[#1A1D1F] flex gap-4 rounded-[8px] p-5 w-[676px] hover:border-[#1498F3] border border-[#1A1D1F] cursor-pointer">
        <div className="relative w-[185px] h-[141px] border border-[#F7F9FA14] rounded-[8px]">
            <img src={`http://localhost:3000/${image}`} className="absolute w-full h-full" alt="" />
            <div className="absolute top-2 left-2 flex items-center bg-[#0B141899] border border-[#F7F9FA29] py-2 px-2 h-[29px] gap-1.5 rounded-[8px]"><img src="/Star 1.svg" alt="" /><p className="text-[#F7F9FA] font-[500] font-poppins text-[14px]">{rating}</p></div>
            <div className="absolute bottom-2 left-2 flex items-center bg-[#1A1D1F] border border-[#F7F9FA29] py-1 px-2 rounded-[8px]"><p className="text-[#F7F9FA] font-[500] font-poppins text-[12px]">{language}</p></div>
        </div>
        <div className="flex flex-col justify-between">
            <div className="flex flex-col">
                <h1 className="font-poppins font-[700] text-[20px] text-[#F7F9FA] hover:text-[#1498F3] hover:cursor-pointer">{title}</h1>
                <p
                    className="text-[#F7F9FA99] font-poppins text-[12px]"
                >
                    {authorName}
                </p>
                <p className="text-[#F7F9FA99] font-[400] font-poppins text-[14px]">{desc}</p>
            </div>
            <div className="flex flex-col gap-1">
                {price && <p className="text-[#F7F9FAA3] font-poppins text-[12px] line-through decoration-[#DC2D2DCC] ">{price}</p>}
                <p className="text-[#82CC27] text-[16px] font-[700] font-poppins">{newPrice || price} uzs</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <img src={`http://localhost:3000/${levelIcon}`} className="w-4 h-4" alt="" />
                    <p className="text-[#F7F9FA99] font-[400] font-poppins text-[14px]">{level}</p>
                </div>
                <div className="h-[20px] w-[1px] border border-[#F7F9FA29] "></div>

                <div className="flex items-center gap-1.5">
                    <img src="/Group 427318394.svg" alt="" />
                    <p className="text-[#F7F9FA99] font-[400] font-poppins text-[14px]">{section || 0} ta bo‘lim</p>
                </div>
                <div className="h-[20px] w-[1px] border border-[#F7F9FA29] "></div>
                <div className="flex items-center gap-1.5">
                    <img src="/Group 427318468.svg" alt="" />
                    <p className="text-[#F7F9FA99] font-[400] font-poppins text-[14px]">{category}</p>
                </div>

                <button
                    onClick={() => setLiked(!liked)}
                    className="w-[24px] h-[24px] flex items-center justify-center hover:scale-110 transition-transform ml-3 cursor-pointer"
                >
                    <img src={liked ? "/Vector heart liked.svg" : "/Vector copy.svg"} className="w-full h-full" alt="wishlist" />
                </button>
            </div>
        </div>
    </div>
}

export default function Courses() {

    const [courses, setCourses] = useState([])
    const [difficulties, setDifficulties] = useState([])
    const [categories, setCategories] = useState([])
    const [languages, setLanguages] = useState([])
    const [authors, setAuthors] = useState([])
    const [search, setSearch] = useState("")
    const [difficultyId, setDifficultyId] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [languageId, setLanguageId] = useState("")
    const [rating, setRating] = useState("")

    useEffect(() => {
        async function getAllCourses() {
            const response = await axios.get(`http://localhost:3000/public/courses`, {
                params: {
                    search: search || undefined,
                    difficultyId: difficultyId || undefined,
                    categoryId: categoryId || undefined,
                    languageId: languageId || undefined,
                    rating: rating || undefined
                }
            })
            console.log(response);
            setCourses(response.data)
        }
        getAllCourses()
    }, [search, difficultyId, categoryId, languageId, rating])

    useEffect(() => {
        async function getAllDifficulties() {
            const response = await axios.get(`http://localhost:3000/public/difficulty`)
            console.log(response);
            setDifficulties(response.data)
        }
        getAllDifficulties()
    }, [])

    useEffect(() => {
        async function getAllCategories() {
            const response = await axios.get(`http://localhost:3000/public/courseCategory`)
            console.log(response);
            setCategories(response.data)
        }
        getAllCategories()
    }, [])

    useEffect(() => {
        async function getAllLanguages() {
            const response = await axios.get(`http://localhost:3000/public/language`)
            console.log(response);
            setLanguages(response.data)
        }
        getAllLanguages()
    }, [])

    useEffect(() => {
        async function getAllAuthors() {
            const response = await axios.get(`http://localhost:3000/public/author`)
            console.log(response);
            setAuthors(response.data)
        }
        getAllAuthors()
    }, [])

    return (
        <div className="container flex justify-between ">
            <div>

                <div className="flex-grow">
                    <div className="w-[334px] h-[80px] bg-[#1A1D1F] flex justify-center items-center gap-3 border border-[#1F272A] rounded-[16px] text-[#F7F9FA] text-[28px] font-bold mb-8">
                        <img src="/graduation-cap.3 1.svg" alt="" className="w-8" />
                        <p>Kurslar</p>
                    </div>

                </div>
                <div className="w-[334px] bg-[#1A1D1F] border border-[#1F272A] rounded-[16px] p-6 h-fit font-poppins">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-[#F7F9FA] text-[20px] font-bold">Filter</h2>
                        <button onClick={() => {
                            setDifficultyId("")
                            setCategoryId("")
                            setLanguageId("")
                            setRating("")
                            setSearch("")
                        }} className="text-[#1498F3] text-[14px] hover:underline cursor-pointer">Tozalash</button>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div>
                            <p className="text-[#9DA1A3] text-[12px] font-bold tracking-wider mb-3 uppercase">Darajani tanlang:</p>
                            <div className="relative">
                                <select value={difficultyId} onChange={(e) => setDifficultyId(e.target.value)} className="w-full bg-[#15181A] border border-[#1F272A] text-[#F7F9FA] p-3 rounded-[8px] appearance-none outline-none cursor-pointer">
                                    <option value="">Barchasi</option>
                                    {difficulties.map((diff: any) => (
                                        <option key={diff.id} value={diff.id}>{diff.title}</option>
                                    ))}
                                </select>
                                <img src="/chevron-down.svg" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 pointer-events-none" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className="text-[#9DA1A3] text-[12px] font-bold tracking-wider mb-3 uppercase">Kategoriya:</p>
                            <div className="relative">
                                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full bg-[#15181A] border border-[#1F272A] text-[#F7F9FA] p-3 rounded-[8px] appearance-none outline-none cursor-pointer">
                                    <option value="">Barchasi</option>
                                    {categories.map((cat: any) => (
                                        <option key={cat.id} value={cat.id}>{cat.title}</option>
                                    ))}
                                </select>
                                <img src="/chevron-down.svg" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 pointer-events-none" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className="text-[#9DA1A3] text-[12px] font-bold tracking-wider mb-3 uppercase">Darslik tili:</p>
                            <div className="relative">
                                <select value={languageId} onChange={(e) => setLanguageId(e.target.value)} className="w-full bg-[#15181A] border border-[#1F272A] text-[#F7F9FA] p-3 rounded-[8px] appearance-none outline-none cursor-pointer">
                                    <option value="">Barchasi</option>
                                    {languages.map((lang: any) => (
                                        <option key={lang.id} value={lang.id}>{lang.title}</option>
                                    ))}
                                </select>
                                <img src="/chevron-down.svg" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 pointer-events-none" alt="" />
                            </div>
                        </div>

                        <div>
                            <p className="text-[#9DA1A3] text-[12px] font-bold tracking-wider mb-3 uppercase">Reyting:</p>
                            <div className="flex gap-2 p-2 bg-[#15181A] border border-[#1F272A] rounded-[8px] justify-around">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <img key={star} src="/star.svg" onClick={() => setRating(rating === String(star) ? "" : String(star))} className={rating && star > Number(rating) ? "opacity-40 cursor-pointer" : "cursor-pointer"} alt="" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-5">
                <div className="relative">
                    <img src="/search-outline 1.svg" alt="" className="absolute top-1/2 left-2 -translate-y-1/2" />
                    <input
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Izlash"
                        className="border bg-[#1A1D1F]! border-[#1F272A]! rounded-[8px] p-2 pl-[40px] text-[16px] font-[500] font-poppins text-[#F7F9FA]! outline-none focus:border-[#1498F3] w-[676px]"
                    />
                </div>
                {courses.map((item: any) => {
                    return <CoursesItem
                        key={item.id}
                        title={item.title}
                        desc={item.description}
                        price={item.price}
                        newPrice={item.newPrice}
                        section={item.sectionCount}
                        level={difficulties.find((diff: any) => diff.id === item.difficultyId)?.title}
                        levelIcon={difficulties.find((diff: any) => diff.id === item.difficultyId)?.icon}
                        language={languages.find((lang: any) => lang.id === item.languageId)?.code}
                        category={categories.find((cat: any) => cat.id === item.categoryId)?.title}
                        rating={item.rating || 0}
                        image={item.image}
                        authorName={authors.find((author: any) => author.id === item.authorId)?.fullName}
                    />
                })}
                <button className="bg-[#1A1D1F] w-[200px] mx-auto border border-[#1F272A] text-[#F7F9FA] px-12 py-3 rounded-[8px] font-poppins text-[16px] font-medium hover:bg-[#262A2D] transition-colors cursor-pointer">
                    Ko'proq
                </button>
            </div>
            <div className="flex flex-col gap-5">
                <Anonis />
                <Support_rek />
            </div>

        </div>
    )
}