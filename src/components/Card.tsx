import cardImg from '../assets/images/cardImg.png'

const Card = () => {
  return (
    <div className="w-[15.625rem] h-[20rem] rounded-[0.625rem] bg-primary_white">
      <div className="z-0 relative w-[15.625rem] h-[9.375rem]">
        <img src={cardImg} alt="cardImg" className=" w-full h-full object-cover rounded-t-[0.625rem] p-[1px]" />
        <p className='absolute top-0 right-0 mr-[0.625rem] mt-[0.625rem] bg-greenTagBg text-greenTagText text-[0.688rem] font-PoppinsBold w-[6.25rem] h-[1.25rem] rounded-tr-[0.625rem] rounded-l-[0.625rem] flex justify-center items-center'>technology</p>
        {/* Author Name and post data */}
        <div className=' ml-[10px] mt-[5px]'>
          <h6 className='pb-[1px]  font-PoppinsRegular text-[9.89px] text-secondary_black'>Nishant Gaharwar • April 23</h6>
          <div>
            <h4 className='pb-[1px]  font-PoppinsBold text-[1.25rem] text-secondary_black leading-[22px]'>Manage multiple models using single timeline</h4>
            <p className=' font-PoppinsRegular text-[0.618rem] text-customGray'>In this blog you will learn how to manage multiple model with same timeline</p>
          </div>
          <button className=' mt-[13px] w-[6.25rem] h-[1.875rem] text-[0.688rem] font-PoppinsBold rounded-r-[0.625rem] bg-customGray rounded-bl-[0.625rem]'>read more</button>
        </div>
      </div>
    </div>
  )
}

export default Card