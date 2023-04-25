import { getLocalData } from "@/lib/localdata";
import Image from "next/image";
export default function Home({ localData }) {
  console.log(localData);
  return (
    <main className="min-h-screen ">
      <div className="h-screen flex justify-center items-center place-items-center">
        <div className="flex w-1/2 h-[500px] bg-white shadow-2xl shadow-[#2E2BE9]/20 rounded-3xl">
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
          <div className="w-1/2 flex flex-col px-8 gap-5">
            <p className="text-lg text-[#303B5A] font-extrabold">Summary</p>
            <div className="flex flex-col gap-4 text-[18px] font-bold ">
              {localData.map((data) =>
                data.category == "Reaction" ? (
                  <div className="flex gap-2 items-center px-4 py-3 rounded-lg justify-between w-full bg-[#FF5757]/10 text-black">
                    <div className="flex-none">
                      <img src={data.icon}></img>
                    </div>
                    <div className="flex-1 w-24  text-[#FF5757]">
                      {data.category}
                    </div>
                    <div className="text-[#303B5A]">
                      {data.score} <span className="text-[#303B5A]/50">/ 100</span>
                    </div>
                  </div>
                ) : data.category == "Memory" ? (
                  <div className="flex gap-2 items-center px-4 py-3 rounded-lg justify-between w-full bg-[#FFB01F]/10 text-black">
                    <div className="flex-none">
                      <img src={data.icon}></img>
                    </div>
                    <div className="flex-1 w-24  text-[#FFB01F]">
                      {data.category}
                    </div>
                    <div className="text-[#303B5A]">
                      {data.score} <span className="text-[#303B5A]/50">/ 100</span>
                    </div>
                  </div>
                ) : data.category == "Verbal" ? (
                  <div className="flex gap-2 items-center px-4 py-3 rounded-lg justify-between w-full bg-[#00BD91]/10 text-black">
                    <div className="flex-none">
                      <img src={data.icon}></img>
                    </div>
                    <div className="flex-1 w-24  text-[#00BD91]">
                      {data.category}
                    </div>
                    <div className="text-[#303B5A]">
                      {data.score} <span className="text-[#303B5A]/50">/ 100</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center px-4 py-3 rounded-lg justify-between w-full bg-[#1125D4]/10 text-black">
                    <div className="flex-none ">
                      <img src={data.icon}></img>
                    </div>
                    <div className="flex-1 w-24 text-sm  text-[#1125D4]">
                      {data.category}
                    </div>
                    <div className="text-[#303B5A]">
                      {data.score} <span className="text-[#303B5A]/50">/ 100</span>
                    </div>
                  </div>
                )
              )}
              ;
            </div>
            <div>
              <button className="w-full bg-[#303B59] font-semibold text-sm rounded-3xl py-3 text-white hover:bg-gradient-to-b from-[#7857FF] to-[#2E2BE9]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const localData = await getLocalData();

  return {
    props: { localData },
  };
}
