import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default cn;
