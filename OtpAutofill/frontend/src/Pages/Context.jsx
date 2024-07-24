import { FaHeart , FaBookmark} from "react-icons/fa"

const Context = () => {
  return (<>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-500" >
      <div className="container flex-col mx-auto px-10 bg-gray-300 rounded-3xl h-80">
      FREE
      <header className="w-full py-5 text-white mr-auto">
        <h1 className="text-3xl font-bold">Gmail OTP Autofill</h1>
      </header>
      
      <main className="flex-grow flex flex-col justify-center mr-auto">
        <h2 className="text-2xl text-gray-800">DOWNLOAD NOW!!!</h2>
        <p className="text-lg text-gray-600">alwahuihawuheduhahjhihweuih</p>
      </main>
      <div className="flex flex-row justify-align items-center space-x-2 py-12">
      <button className="bg-blue-500 p-2">ADD TO CHROME</button>
      <h3><FaHeart /></h3>
      <h3><FaBookmark /></h3>
      </div>
      <h4>1678 Bn+ Active Users</h4>
      </div>
      
    </div>
    </>
  );
}

export default Context;