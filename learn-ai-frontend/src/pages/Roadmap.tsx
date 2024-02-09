import React, { useState } from 'react';
// import Flag from '../assets/flag.png';
import rightarrow from '../assets/right-arrow.png';
import leftarrow from '../assets/left-arrow.png';

const Roadmap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoSuggestions, setVideoSuggestions] = useState<string[]>([]); 

  const handleSearch = () => {
    const dummySuggestions = ['Video 1', 'Video 2', 'Video 3', 'Video 4', 'Video 5'];
    setVideoSuggestions(dummySuggestions);
  };

  return (
    <div className="h-screen w-full bg-gray-200 ">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Roadmap Page</h1>
        <div className="flex items-center py-10">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search videos..."
            className="border border-gray-300 px-3 py-2 w-full mr-2"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>
         {/* <div className="relative">
          <div className="absolute top-4 left-0 w-full "></div>
          <div className="absolute bottom-4 left-0 w-full"></div>
         <div className="flex justify-between mt-4 h-8 w-full bg-black">
            {videoSuggestions.map((video, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-8 h-8  text-white flex items-center justify-center my-1">
                  <img src={Flag} alt="" className="w-6 h-6 mb-2"/>
                 
                </div>
                <div>{video}</div>
              </div>
            ))}
          </div>  
    </div>*/}
      <div className="w-full h-full">
          <div className="py-5 px-10 h-full ">
            <div className="w-full h-full">
              <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2 h-full">
              <div className="h-1/5 w-full flex border-l-rounded-full border-black">
                <div className="rounded-full bg-black w-20 h-20 ml-3 text-white flex justify-center items-center text-xl border-8 border-white"> 1</div>
                <div className="h-full w-20 bg-red">
                  <img className='flex justify-center items-center h-15 w-full' src={rightarrow}/>
                </div>
                <div className="h-[8rem] w-2/3 bg-black">

                </div>
               </div>
               </div>
              </div>

                <div className="flex">
                  <div className="w-1/2 h-full"> 
                <div className="h-1/5 w-full flex justify-end flex-row-reverse border-l-rounded-full border-black">
                    <div className="rounded-full bg-black w-20 h-20 ml-3 text-white flex justify-center items-center text-xl border-8 border-white"> 1</div>
                <div className="h-full w-20 bg-red">
                  <img className='flex justify-center items-center h-15 w-full' src={leftarrow}/>
                </div>
                <div className="h-[8rem] w-2/3 bg-black"></div>
                </div>
                </div>
              <div className=" w-1/2 "></div>
              </div>

                  <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2 h-full">
              <div className="h-1/5 w-full flex border-l-rounded-full border-black">
                <div className="rounded-full bg-black w-20 h-20 ml-3 text-white flex justify-center items-center text-xl border-8 border-white"> 1</div>
                <div className="h-full w-20 bg-red">
                  <img className='flex justify-center items-center h-15 w-full' src={rightarrow}/>
                </div>
                <div className="h-[8rem] w-2/3 bg-black"></div>
               </div>
               </div>
              </div>

                  <div className="flex">
                  <div className="w-1/2 h-full"> 
                <div className="h-1/5 w-full flex justify-end flex-row-reverse border-l-rounded-full border-black">
                    <div className="rounded-full bg-black w-20 h-20 ml-3 text-white flex justify-center items-center text-xl border-8 border-white"> 1</div>
                <div className="h-full w-20 bg-red">
                  <img className='flex justify-center items-center h-15 w-full' src={leftarrow}/>
                </div>
                <div className="h-[8rem] w-2/3 bg-black"></div>
                </div>
                </div>
              <div className=" w-1/2 "></div>
              </div>

                 <div className="flex">
                <div className="w-1/2"></div>
                <div className="w-1/2 h-full">
              <div className="h-1/5 w-full flex border-l-rounded-full border-black">
                <div className="rounded-full bg-black w-20 h-20 ml-3 text-white flex justify-center items-center text-xl border-8 border-white"> 1</div>
                <div className="h-full w-20 bg-red">
                  <img className='flex justify-center items-center h-15 w-full' src={rightarrow}/>
                </div>
                <div className="h-[8rem] w-2/3 bg-black"></div>
               </div>
               </div>
              </div>
            </div>
          </div>
         </div>

        </div>
  );
};

export default Roadmap;

