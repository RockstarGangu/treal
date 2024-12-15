import {
  Award,
  BicepsFlexed,
  ChartSpline,
  GlassWater,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import macros from "../../public/macros.svg";
import stats from "../../public/stats.svg";
import badge from "../../public/badge.svg";

// const features = [
//   {
//     id: 1,
//     title: "Track Calories",
//     description:
//       "Track your daily nutrition and get personalized recommendations",
//     icon: Salad,
//     span: 1,
//   },
//   {
//     id: 2,
//     title: "Earn Badges",
//     description: "Plan your meals and snacks for the week",
//     icon: Award,
//     span: 1,
//   },
//   {
//     id: 3,
//     title: "Macros Count",
//     description: "Keep track of your meals and snacks",
//     icon: BicepsFlexed,
//     span: 1,
//   },
//   {
//     id: 4,
//     title: "Privacy-First",
//     description: "Find and save your favorite recipes",
//     icon: ShieldCheck,
//     span: 1,
//   },
//   {
//     id: 5,
//     title: "Weekly Analytics",
//     description: "Plan your meals and snacks for the week",
//     icon: ChartSpline,
//     span: 2,
//   },
// ];

export default function Features() {
  return (
    <div id="features" className="flex flex-col gap-4 bg-[#09240f] items-center justify-center min-h-screen overflow-hidden">
      <div className="mt-10 flex flex-col text-center items-center justify-center gap-5">
        <h1 className="sm:text-4xl text-2xl font-semibold text-white">
          Everything you need
          <br />
          to track your<span className="text-yellow-200"> nutrition</span>
        </h1>
        <p className="sm:text-2xl text-md text-gray-300">
          Powerful features to help you achieve your health goals
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-3 flex flex-col mb-10 gap-2 sm:grid-rows-3 w-[80%]">
        <div className=" bento_bg col-span-1 row-span-1">
          <div className="flex flex-col gap-2 items-start justify-end p-4">
            <div className="p-1 border-2 rounded-xl border-green-500">
              <GlassWater className="text-yellow-400 w-10 h-10" />
            </div>
            <p className="sm:text-2xl text-lg font-semibold">Hydrate Smart</p>
            <p className="leading-1 tracking-wide text-md sm:text-[16px]  opacity-60">
              Stay on top of your water intake with personalized push
              notifications and keep your body hydrated
            </p>
          </div>
        </div>
        <div className=" bento_bg col-span-2 row-span-1">
          <div className="flex flex-row items-center justify-center gap-2">
            <div className=" sm:block hidden mt-4 ml-5">
              <Image src={macros} alt="macros" width={250} height={250} />
            </div>
            <div className="flex flex-col items-start justify-start gap-3 p-4">
              <div className="p-1 border-2 rounded-xl border-green-500">
                <BicepsFlexed className="text-yellow-400 w-10 h-10" />
              </div>
              <p className=" sm:text-2xl text-lg font-semibold">
                Fuel Your Body
              </p>
              <p className="leading-1 tracking-wide sm:text-lg text:md opacity-60">
                Track your macro nutrients with our extensive database and
                optimize your diet for a healthier you.
              </p>
            </div>
          </div>
        </div>
        <div className="bento_bg col-span-3 row-span-1">
          <div className="flex sm:flex-row flex-col items-center justify-around pb-2">
            <Image src={stats} alt="stats" width={200} height={200} className="sm:block hidden"  />
            <div>
              <div className="flex flex-col items-center justify-start gap-3 p-2 sm:p-4">
                <div className="p-1 border-2 rounded-xl border-green-500">
                  <ChartSpline className="text-yellow-400 w-10 h-10" />
                </div>
                <p className="text-center sm:text-2xl text-lg font-semibold">
                  Analyze Your Progress
                </p>
                <p className="text-center leading-1 tracking-wide sm:text-lg opacity-60 text:md">
                  Get weekly and monthly insights into your nutrition and
                  <br className="sm:block hidden" />
                  stay motivated to reach your health goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <button className="bg-green-500 text-sm hover:scale-110 transition-all duration-300 sm:text-md font-bold text-white rounded-lg p-2 sm:px-4 sm:py-2">
                Get Started Now
              </button>
              <button className="border-yellow-500 border-2 font-semibold text-black rounded-lg py-1 px-2 sm:px-10 sm:py-1">
                Try Now
              </button>
            </div>
          </div>
        </div>
        <div className="bento_bg col-span-2 row-span-1 p-2">
          <div className="flex sm:flex-row flex-col items-center justify-around">
            <div className=" flex flex-col gap-2 place-items-start justify-center p-3">
              <div className="p-1 border-2 rounded-xl border-green-500">
                <Award className="text-yellow-400 w-10 h-10" />
              </div>
              <p className=" sm:text-2xl text-lg font-semibold">
                Unlock Your Achievements
              </p>
              <p className="leading-1 tracking-wide sm:text-lg text-md opacity-60 ">
                Earn badges for reaching your nutrition milestones
                <br className="sm:block hidden"  /> and enjoy your progress towards a healthier lifestyle.
              </p>
            </div>
            <Image src={badge} alt="badge" width={200} height={200} className="sm:block hidden"  />
          </div>
        </div>
        <div className=" bento_bg col-span-1 row-span-1">
          <div className="flex flex-col gap-2 items-start justify-start p-4">
            <div className="p-1 border-2 rounded-xl border-green-500">
              <ShieldCheck className="text-yellow-400 w-10 h-10" />
            </div>
            <p className="sm:text-2xl text-lg font-semibold">
              Your Data, Secure
            </p>
            <p className="leading-1 tracking-wide text-sm sm:text-[18px] opacity-60 ">
              Rest assured that your personal data is stored securely
              and protected with the highest standards of encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// box col-span-1 row-span-1 border-2 rounded-xl
