import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import LocalSwitcher from './local-switcher'

const Header = () => {
    const translation = useTranslations("Navigation")
  return (
    <header>
        <nav>
            <Link href={"/"}>{translation('home')}</Link>
            <LocalSwitcher />
        </nav>
    </header>
  )
}

export default Header