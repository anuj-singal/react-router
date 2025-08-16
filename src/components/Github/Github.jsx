import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  return (
   <div className="max-w-md mx-auto m-6 bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center">
    <img 
      src={data.avatar_url} 
      alt="Profile" 
      className="w-32 h-32 mx-auto rounded-full border-4 border-gray-600 shadow-md"
    />
    
    <h1 className="text-2xl font-bold mt-4">{data.name || "No Name"}</h1>
    <p className="text-gray-400">@{data.login}</p>

    <div className="mt-3 space-y-2">
      {data.bio && <p className="italic text-gray-300">"{data.bio}"</p>}
      <p><strong>Location:</strong> {data.location || "Not available"}</p>
      <p><strong>Public Repos:</strong> {data.public_repos}</p>
    </div>

    <a 
      href={data.html_url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      Visit GitHub Profile
    </a>
  </div>

  )
}
 
export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anuj-singal')
    return response.json()
}