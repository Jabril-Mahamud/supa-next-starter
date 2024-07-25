import React from 'react'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=" mb-14 flex w-full flex-row justify-center">
      <ul className="w-160  mx-auto mt-auto hidden  items-center  justify-end space-y-1 rounded-xl bg-transparent px-7 py-5 md:flex md:flex-col">
        <li>
          <span className="text-2xl">sticky Navbar on scroll </span> (my
          original, using useState + useEffect)
        </li>
        <li>
          <span className="text-2xl">shadcn</span> +{' '}
          <span className="text-2xl">next-themes </span>
          (learned from codeSTACKr)
        </li>
        <li>
          <span className="text-2xl">frosty header </span>
          (learned from Saraev Media)
        </li>
        <li>powered by greybluesea</li>
        <li></li>
      </ul>
    </footer>
  )
}

export default Footer
