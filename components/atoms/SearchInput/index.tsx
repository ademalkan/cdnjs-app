"use client";
import React, { FormEvent, JSX } from "react";

interface SearchInputI {
  searchText?: string;
  setSearchText(searchText: string): void;
}

const SearchInput = (props: SearchInputI): JSX.Element => {
  const { setSearchText } = props;

  const searchHandler = (searchEvent: FormEvent<HTMLInputElement>): void => {
    const searchText = searchEvent.currentTarget.value ?? "";
    setSearchText(searchText);
  };

  return (
    <input
      onInput={searchHandler}
      className="
      bg-slate-300 
      py-3 
      hover:outline-none 
      focus-visible:outline-none 
      px-2 
      rounded-md 
      w-full
      "
      type="search"
      placeholder="Write a search word"
    />
  );
};

export default SearchInput;
