"use client";
import Box from "@/components/box";
import { HireButton, RejectButton } from "@/components/button";
import { setMenu } from "@/redux/features/menuSlice";
import { setTalent } from "@/redux/features/talentSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Interview() {
  const router = useRouter();
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
                <RejectButton
                  onClick={() => {
                    dispatch(setTalent({ id: value.id, stage: "reject" }));
                    router.push("/talent/reject");
                  }}
                />
                <HireButton
                  onClick={() => {
                    dispatch(setTalent({ id: value.id, stage: "hired" }));
                    router.push("/talent/hired");
                  }}
                />
              </div>
            </Box>
          </div>
        ))}
    </div>
  );
}
