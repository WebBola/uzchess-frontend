import './index.css'
export default function TopBooks() {
  return <div className="bg-[#1A1D1F] p-4 w-[326px] rounded-[8px]">
    <div className='flex w-full justify-between items-center'>

      <h1 className="text-[18px] font-poppins font-500 text-[#FCFCFC]">Top kitoblar</h1>
        
      <p className='text-[#9DA1A3] flex font-poppins text-[16px] font-[400]'>Barchasi <img src="./chevron-forward-outline 1.svg" alt="" /></p>
    </div>
    <div className='flex w-full gap-4 mt-4'>
      <img src="./Frame 20820.svg" alt="" />
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#FCFCFC] font-poppins text-[13px] font-[700]'>Shaxmatdagi qobiliyatliringizga qayta baxo bering</h1>
        <p className='text-[#F0F0F0B8] flex font-poppins text-[13px] font-[400]'>J.Silman </p>
      </div>
    </div>
    <div className='w-full h-[1px] bg-[#1F272A] m-2'></div>

    <div className='flex w-full gap-4 mt-4'>
      <img src="./Frame 20820 (1).svg" alt="" />
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#FCFCFC] font-poppins text-[13px] font-[700]'>Mening tizimim</h1>
        <p className='text-[#F0F0F0B8] flex font-poppins text-[13px] font-[400]'>A.Nimzowitsch</p>
      </div>
    </div>
    <div className='w-full h-[1px] bg-[#1F272A] m-2'></div>

    <div className='flex w-full gap-4 mt-4'>
      <img src="./Frame 20820 (2).svg" alt="" />
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#FCFCFC] font-poppins text-[13px] font-[700]'>Zurixdagi shaxmat <br /> musobaqasi</h1>
        <p className='text-[#F0F0F0B8] flex font-poppins text-[13px] font-[400]'>D.Bronstein </p>
      </div>
    </div>
    <div className='w-full h-[1px] bg-[#1F272A] m-2'></div>
    <div className='flex w-full gap-4 mt-4'>
      <img src="./Frame 20820 (3).svg" alt="" />
      <div className='flex flex-col gap-2'>
        <h1 className='text-[#FCFCFC] font-poppins text-[13px] font-[700]'>Mening esdaqolarlik <br /> o'yinlarim</h1>
        <p className='text-[#F0F0F0B8] flex font-poppins text-[13px] font-[400]'>B.Fischer </p>
      </div>
    </div>
  </div>

}