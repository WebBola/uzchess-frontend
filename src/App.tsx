import News from "./News";
import Courses from "./Courses";

export default function App() {
    return (
        <div className="w-full bg-[#131313] min-h-screen flex flex-col">
            <Courses />
            <News />
        </div>
    );
}








// import { useState } from "react";

// interface Props {
//     page: number | any;
//     currentPage: number;
//     setCurrentPage: (currentPage: number) => void;
//     onClick?: () => void;
// }

// function PaginationItem({ page, currentPage, setCurrentPage, onClick }: Props) {
//     const isActive = currentPage === page;
//     return <button onClick={onClick || (() => setCurrentPage(page))}
//         className={`min-w-7 px-1 h-7 ${isActive ? 'bg-[#26FF8E]! text-black' : ''} ${isActive ? 'hover:bg-[#333] text-black' : 'hover:bg-[#333] '} rounded-sm`}>
//         {page}
//     </button>
// }


// export default function App() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const lastPage = 5;
//     return <div>
//         <PaginationItem page="Prev" currentPage={currentPage} setCurrentPage={setCurrentPage} onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} />
//         <PaginationItem page={1} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <PaginationItem page={2} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <PaginationItem page={3} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <PaginationItem page={4} currentPage={currentPage} setCurrentPage={setCurrentPage} />  
//         <PaginationItem page={5} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <PaginationItem page={6} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <PaginationItem page={7} currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <PaginationItem page="Next" currentPage={currentPage} setCurrentPage={setCurrentPage} onClick={() => currentPage < lastPage && setCurrentPage(currentPage + 1)} />

//     </div>;
// }
