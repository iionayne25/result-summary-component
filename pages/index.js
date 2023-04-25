import { getLocalData } from "@/lib/localdata";
import Image from "next/image";
import ResultScore from "@/components/ResultScore";
import BtnContinue from "@/components/BtnContinue";
import Summary from "@/components/Summary";
export default function Home({ localData }) {
  console.log(localData);
  return (
    <main className="min-h-screen ">
      <div className="h-screen flex justify-center items-center place-items-center">
        <div className="flex w-1/2 h-[500px] bg-white shadow-2xl shadow-[#2E2BE9]/20 rounded-3xl">
          <ResultScore/>
          <div className="w-1/2 flex flex-col px-8 gap-5">
          <p className="text-lg text-[#303B5A] font-extrabold">Summary</p>
            {localData.map(data=>
            <Summary 
            icon={data.icon}
            category = {data.category}
            score={data.score}/>
              )}
            <div>
              <BtnContinue/>
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
