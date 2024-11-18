'use client'
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter()
  return (
    <header>
      <button onClick={() => router.back()}>Back</button>
      <nav>
        <a href="/">Home</a>
      </nav>
    </header>
  )
}
export default Header