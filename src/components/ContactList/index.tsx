import { Contact } from '../Contact'

export function ContactList() {
  return (
    <div className="w-full h-full bg-gray-800 px-10">
      <ul className="grid gap-14 h-full py-10 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-blue-700 ">
        <li className="flex gap-13 items-start">
          <span className="bg-purple-900 text-gray-50 text-base font-bold py-2.5 px-3.5 rounded-lg">
            T
          </span>
          <ul className="grid gap-9">
            <Contact />
            <Contact />
          </ul>
        </li>
        <li className="flex gap-13 items-start">
          <span className="bg-purple-900 text-gray-50 text-base font-bold py-2.5 px-3.5 rounded-lg">
            T
          </span>
          <ul className="grid gap-9">
            <Contact />
            <Contact />
          </ul>
        </li>
        <li className="flex gap-13 items-start">
          <span className="bg-purple-900 text-gray-50 text-base font-bold py-2.5 px-3.5 rounded-lg">
            T
          </span>
          <ul className="grid gap-9">
            <Contact />
            <Contact />
            <Contact />
            <Contact />
          </ul>
        </li>
      </ul>
    </div>
  )
}
