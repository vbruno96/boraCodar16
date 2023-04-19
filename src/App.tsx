import { Header } from './components/Header'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen grid place-items-center grid-cols-1 bg-blue-900">
      <Header />
    </div>
  )
}
