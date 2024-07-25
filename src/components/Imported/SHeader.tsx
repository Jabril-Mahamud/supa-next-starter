'use client'

import React, { useEffect, useState } from 'react'
import Container from './Container'
import Link from 'next/link'
import { Moon, ShoppingCart, Sun } from 'lucide-react'
import { Button } from './ui/Sbutton'
import ProfileButton from './ProfileButton'
import { useTheme } from 'next-themes'
import MenuButton from './MenuButton'

type Props = {}

export const routes = [
  {
    href: '/',
    label: 'Products',
  },
  {
    href: '/',
    label: 'Categories',
  },
  {
    href: '/',
    label: 'On Sale',
  },
]

const Header = (props: Props) => {
  const { theme, setTheme } = useTheme()
  const [yValue, setYValue] = useState(0)
  const [toHide, setToHide] = useState(false)

  /*  const yValue: number = useMemo(() => window.scrollY, []);
  console.log(yValue); */

  /*  if (typeof document === "undefined") return;
  const header = document.getElementById("header111");
  console.log(header);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header?.classList.add("active");
      } else {
        header?.classList.remove("active");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 50) {
          header?.classList.add(" active");
        } else {
          header?.classList.remove(" active");
        }
      });
    };
  }, []); */

  useEffect(() => {
    const showHeaderOnScrollUp = () => {
      if (yValue >= window.scrollY) {
        setToHide(false)
      } else {
        setToHide(true)
      }
      setYValue(window.scrollY)
    }

    window.addEventListener('scroll', showHeaderOnScrollUp)

    return () => {
      window.removeEventListener('scroll', showHeaderOnScrollUp)
    }
  }, [yValue])

  return (
    <div
      className={
        'backdrop-filter-blur fixed left-0 right-0 top-0 z-[1] flex border-b bg-background/50 px-4 py-3 ' +
        (toHide && ' hidden h-0 py-0 ')
      }
    >
      <Container>
        <div className="flex h-12 w-full items-center justify-between px-6 sm:h-14 md:h-16 lg:px-8">
          <div className="flex space-x-2">
            <MenuButton />
            <Link href="/">
              <h1 className="text-xl font-bold">E-STORE</h1>
            </Link>
          </div>
          <nav className=" flex items-center  space-x-4  text-lg md:space-x-8 lg:space-x-10">
            {routes.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className="hidden sm:block"
              >
                {route.label}
              </Link>
            ))}
            <Link href={'/'}>
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className=" rounded-full"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="hidden h-6 w-6 transition-all   dark:block  " />
              <Moon className="block h-6 w-6 transition-all dark:hidden " />
            </Button>
            <ProfileButton />
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Header
