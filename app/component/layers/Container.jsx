import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`${className} max-w-[1400px] mx-auto`}>
        {children}
    </div>
  )
}

export default Container