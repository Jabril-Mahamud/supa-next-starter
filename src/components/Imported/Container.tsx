import React from 'react'

type Props = { children: React.ReactNode }

const Container = ({ children }: Props) => {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>
}

export default Container