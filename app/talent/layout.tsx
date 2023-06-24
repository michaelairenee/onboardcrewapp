"use client";
import { setMenu } from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/redux/features/talentSlice";

export default function layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const menu = useAppSelector((state) => state.menuReducer.name);
  const menuLists = useAppSelector((state) => state.menuReducer.lists);
  const status = useAppSelector((state) => state.talentReducer.status);
  const error = useAppSelector((state) => state.talentReducer.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const changeMenu = (value: string) => {
    dispatch(setMenu(value));
    router.push(`/talent/${value}`);
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Talent Pipeline
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base  overflow-auto">
            {menuLists.map((value, index) =>
              index === menuLists.length - 1 ? (
                <li
                  key={value}
                  className={`flex items-center ${
                    menu === value && "text-blue-600 dark:text-blue-500"
                  }`}
                  onClick={() => changeMenu(value)}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    {menu === value ? (
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <span className="mr-2">{index + 1}</span>
                    )}
                    {value.toUpperCase()}
                  </span>
                </li>
              ) : (
                <li
                  key={value}
                  className={`flex md:w-full items-center ${
                    menu === value && "text-blue-600 dark:text-blue-500"
                  } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
                  onClick={() => changeMenu(value)}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    {menu === value ? (
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <span className="mr-2">{index + 1}</span>
                    )}
                    {value.toUpperCase()}
                  </span>
                </li>
              )
            )}
          </ol>
          {status === "loading" ? (
            <div className="mt-4">Loading...</div>
          ) : status === "failed" ? (
            <div className="mt-4">Error: {error}</div>
          ) : (
            <div className="mt-4">{children}</div>
          )}
        </div>
      </main>
    </>
  );
}
