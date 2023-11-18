/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Button({ type, children, isDisabled, to }) {
  // const classList = "inline-block rounded-full bg-yellow-400 px-3 py-2 font-semibold uppercase text-stone-800  transition-all duration-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 active:bg-yellow-900  disabled:cursor-not-allowed  sm:px-6 sm:py-4",
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase text-stone-800  transition-all duration-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 active:bg-yellow-900  disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3  sm:px-6 sm:py-4 text-base",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block rounded-full border-2 border-stone-300  font-semibold uppercase text-stone-800  transition-all duration-500 hover:bg-stone-600 focus:outline-none focus:ring focus:ring-stone-600 focus:ring-offset-2 active:bg-stone-900  disabled:cursor-not-allowed px-4 py-2.4 md:px-6 md:py-4 hover:text-white",
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={isDisabled} className={styles[type]}>
      {children}
    </button>
  );
}
