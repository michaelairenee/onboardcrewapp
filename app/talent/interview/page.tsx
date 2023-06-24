"use client";
import Box from "@/components/box";
import {
  HireButton,
  InterviewButton,
  RejectButton,
  ShortlistButton,
} from "@/components/button";
import { setMenu } from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Interview() {
  const pathname = usePathname();
  const path = pathname.split("/").pop();

  const data = useAppSelector((state) => state.talentReducer.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMenu(path));
  });

  return (
    <div>
      {data
        .filter((data) => data.stage === path)
        .map((value, index) => (
          <div key={value.id}>
            <Box
              id={value.id}
              fullname={value.fullname}
              stage={value.stage}
              notes={value.notes}
            >
              <div className="flex-1 ml-auto">
                <RejectButton />
                <HireButton />
              </div>
            </Box>
          </div>
        ))}
    </div>
  );
}
