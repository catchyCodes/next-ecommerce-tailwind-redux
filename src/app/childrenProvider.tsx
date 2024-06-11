"use client";
import Loading from "@/components/loading";
import Notife from "@/components/notife";
import { RootState } from "@/redux/rootReducer";
import React from "react";
import { useSelector } from "react-redux";

function ChildrenProvider({ children }: any) {
  const { loadingArr } = useSelector((state: RootState) => state.layout);

  return (
    <>
      {children}
      {loadingArr.length > 0 && <Loading />}
      <Notife />
    </>
  );
}

export default ChildrenProvider;
