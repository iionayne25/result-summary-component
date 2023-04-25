import { getLocalData } from "@/lib/localdata";
import Head from "next/head";
import Link from "next/link";
import ResultScore from "@/components/ResultScore";
import BtnContinue from "@/components/BtnContinue";
import Summary from "@/components/Summary";
export default function Home({ localData }) {
  console.log(localData);
  return (
    <>
    <Head>
      <title>Result Summary </title>
        <link rel="icon" href="favicon.png" />
    </Head>
    <main className="min-h-screen ">
      <div className="xl:h-screen flex justify-center items-center place-items-center">
        <div className="flex flex-col gap-4 h-full bg-white xl:shadow-2xl xl:shadow-[#2E2BE9]/20 xl:rounded-3xl xl:flex-row xl:gap-0 xl:w-1/2 xl:h-[500px]  ">
          <ResultScore/>
          <div className="px-7 gap-3 xl:w-1/2 flex flex-col xl:px-8 xl:gap-5">
          <p className="text-lg text-[#303B5A] font-extrabold">Summary</p>
            {localData.map(data=>
            <Summary 
            icon={data.icon}
            category = {data.category}
            score={data.score}/>
              )}
            <div className="pt-2 pb-5 xl:pb-0 xl:pt-0">
              <BtnContinue/>
            </div>
          </div>
        </div>
      </div>
    </main></>
    
  );
}

export async function getStaticProps() {
  const localData = await getLocalData();

  return {
    props: { localData },
  };
}
