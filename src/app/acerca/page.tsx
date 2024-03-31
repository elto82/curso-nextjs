"use client"
import { useRouter } from "next/navigation"

export default function Acerca() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Back to Home</button>
    </div>
  )
}