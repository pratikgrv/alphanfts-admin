import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'

const Navbar = () => {
  return (
      <div className='flex justify-between align-middle items-center'>
          <div className='font-bold'>
              Created by Pratik
          </div>
          <div>
              <ModeToggle/>
          </div>
    </div>
  )
}

export default Navbar