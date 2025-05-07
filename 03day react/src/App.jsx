import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({username, intro="Developer"}) {
  console.log({username});
  

  return (
    <>
      <h1 className='bg-black text-4xl text-white rounded-xl'>welcome to tailwind</h1>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img class="size-80 shadow-xl rounded-xl" alt="" src="https://media.licdn.com/dms/image/v2/D4E03AQFKO28wZhSWYg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721561899495?e=1752105600&v=beta&t=RaeiETbr8RaKvw65WpIe7DICB_VtlNNkOwXsEMBBdKw"/>
     </div>
        <div class="flex flex-col items-center md:items-start">
          <span class="text-2xl font-medium">{username}</span>
          <span class="font-medium text-sky-500">{intro}</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
