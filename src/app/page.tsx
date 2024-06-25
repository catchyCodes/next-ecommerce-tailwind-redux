import CartsGroup from "@/components/card-groups/general";
import Slider from "@/components/sliders/general";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex bg-gray-100  flex-col items-center justify-between py-24">
      <div className="pt-10 bg-white">
        <Slider />
        <CartsGroup />
      </div>
    </main>
  );
};
export default Home;
