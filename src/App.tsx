import { ContactList } from './components/ContactList'
import { Header } from './components/Header'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen grid place-items-center grid-cols-1 bg-blue-900">
      <div className="w-full h-full sm:h-4/5 sm:w-3/5 2xl:w-1/4 bg-gray-800 rounded-lg overflow-hidden">
        <Header />
        <ContactList />
      </div>
    </div>
  )
}
