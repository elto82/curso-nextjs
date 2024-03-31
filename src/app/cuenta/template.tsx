"use client"
import { useState } from "react"



const ProfileLayout = ({ children }: {
  children: React.ReactNode
}) => {
  const [input, setInput] = useState("");
  return (
    <>
      <h3>paths related to the user's account</h3>
      <br />
      <br />
      <h5>explaining the difference between layout and template</h5>
      {children}
      <input type="text"
        placeholder="..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  )
}

export default ProfileLayout