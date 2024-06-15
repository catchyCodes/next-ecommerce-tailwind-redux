"use client";
import CartsGroup from "@/components/card-groups/general";
import Slider from "@/components/sliders/general";
// import { addLoading, notifeColors, reduceLoading, setNotife } from "@/redux/Layout/reducer";
// import { loadData } from "@/redux/UserData/actions";
import Image from "next/image";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const dispatch = useDispatch();

  // useEffect(() => {
    // dispatch(addLoading());
    // setTimeout(() => {
    //   dispatch(reduceLoading());
    //   dispatch(setNotife({ message: 'Loading complete!', color: notifeColors.success }));
    // }, 1000);
  //   dispatch(loadData())
  // }, [dispatch]);

  return (
    <main className="flex bg-gray-100  flex-col items-center justify-between py-24">
      <div className="pt-10 bg-white">
        {/* Content to make page scrollable */}
        <Slider/>
        <CartsGroup />
      </div>
    </main>
  );
}
