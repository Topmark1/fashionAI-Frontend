'use client'

import { ChevronDownIcon,Bars3Icon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from 'react';

function Header() {
  return (
    <div className="flex fixed top-0 left-0 bg-white w-full"  id="home">
      <Link href="/">
             <img className="px-2 sm:px-6 py-2 sm:py-3" src="images/FA.svg" alt="logo" />
      </Link>
      <div></div>
  </div>
  )
}

export default Header