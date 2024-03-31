"use client"
import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return (
    <div>
      <h1>Log in</h1>
      <button onClick={handleClick}>Back to Home</button>
    </div>


  )
}


export default Login 
