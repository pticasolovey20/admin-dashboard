import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => twMerge(clsx(inputs));

// eslint-disable-next-line no-undef
export const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
