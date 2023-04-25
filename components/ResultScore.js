import React from 'react'

const ResultScore = () => {
  return (
    <>
      <div className="flex py-8 px-5 w-1/2 h-[500px] rounded-3xl bg-gradient-to-b from-[#7857FF] to-[#2E2BE9]">
            <div className="flex flex-col justify-between items-center  w-full ">
              <div>
                <p className="text-[#C8C7FF]  font-bold">Your Result</p>
              </div>
              <div className="">
                <div className="flex justify-center w-40 h-40 rounded-full bg-gradient-to-b from-[#4E21CA] to-trasparent">
                  <div className="flex flex-col justify-center self-center ">
                    <p className="text-white text-[80px] font-extrabold leading-tight">
                      76
                    </p>
                    <p className="text-[#C8C7FF]/50 font-medium text-[18px] text-center">of 100</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  text-center  gap-4">
                <p className="font-bold text-2xl text-white leading-tight">
                  Great
                </p>
                <p className="text-[18px] font-medium px-5 text-[#C8C7FF]">
                  You scored higher than 65% of ofthe people who have taken
                  these tests.
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default ResultScore
