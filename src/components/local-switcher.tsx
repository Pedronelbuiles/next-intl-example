"use client"

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useTransition } from 'react'

const LocalSwitcher = () => {
    const [ isPending, startTransition ] = useTransition()
    const router = useRouter()
    const localActive = useLocale()

    const onSlectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }

  return (
    <label>
        <p>Change Language</p>
        <select defaultValue={localActive} onChange={onSlectChange} disabled={isPending}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
    </label>
  )
}

export default LocalSwitcher