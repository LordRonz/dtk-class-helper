import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Wrap clsx with tailwind merge */
export const clsxm = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};

export default clsxm;
