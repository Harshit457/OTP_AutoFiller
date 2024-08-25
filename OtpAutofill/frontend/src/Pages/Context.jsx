import { FaHeart , FaBookmark} from "react-icons/fa"

const Context = () => {
  return (<>
  
    <div className="w-10/12 ml-32  flex flex-col pt-20   h-screen border-black overflow-hidden" >
    
      <div className="container flex mx-auto px-10 bg-customContextblack  rounded-3xl h-5/6">
      <div className="flex-col m-4 mt-10">
      <div className="text-gray-500  w-3/12 rounded-md flex justify-center items-center border-2 border-cyan-300 bg-cyan-100">
      FREE</div>
      <header className="w-full py-5 font-serif text-white mr-auto">
        <h1 className="text-5xl">AUTO FILL -  </h1>
        <h1 className="text-5xl mt-3">Extension for auto</h1>
        <h1 className="text-5xl mt-3">filling the OTP </h1>
      </header>
      <div>
      <div className="flex flex-row justify-align items-center space-x-2 pt-14  ">
      <button className="bg-customBlue w-2/3 p-2 font-semibold rounded-md">ADD TO CHROME</button>
      <div className=" border-2 rounded-md w-8 h-8 flex justify-center items-center "><FaHeart fill="white" /></div>
      <div className=" border-2 rounded-md w-8 h-8 flex justify-center items-center "><FaBookmark fill="white" /></div>
      </div>
      <div className=" text-slate-200 text-lg pt-6" >100+ Active Users</div>
      </div>
      </div>
      
      </div>
      
    </div>
    </>
  );
}

export default Context;