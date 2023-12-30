"use client"
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>404 Error <Link href={'/'}>Contact Admin</Link></div>
  )
}

export default NotFound