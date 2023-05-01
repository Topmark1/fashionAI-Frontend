'use client'

import { ChevronDownIcon,Bars3Icon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from 'react';

function Header() {
  return (
    <div className="flex"  id="home">
      <Link href="/">
             <img className="px-3 py-4" src="images/FA.svg" alt="logo" />
      </Link>
      <div></div>
  </div>
  )
}

export default Header