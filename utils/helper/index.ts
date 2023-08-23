import { showDataI } from "@/app/[librarieDetail]/interface";

export const moreShowHelper = (
  text: string,
  maxTextLength: number = 50
): string => {
  if (text.length < maxTextLength) {
    return text;
  } else {
    return text.slice(0, maxTextLength) + "...";
  }
};

export const addSpaceWithComma = (str: string[]): string => {
  return str.join(", ");
};

