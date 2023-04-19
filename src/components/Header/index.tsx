import { MagnifyingGlass, Pencil, Plus, Trash } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="grid gap-6 w-full bg-gray-900 text-gray-50 p-10 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="flex-1 text-md sm:text-lg font-bold">Meus contatos</h1>
        <div className="flex gap-2 sm:gap-4 ">
          <button>
            <Plus size={24} weight="light" />
          </button>
          <button>
            <Pencil size={24} />
          </button>
          <button>
            <Trash size={24} />
          </button>
        </div>
      </div>
      <div className="relative">
        <MagnifyingGlass size={16} className="absolute left-6 top-3" />
        <input
          type="text"
          placeholder="Busque por nome ou por dados de contato..."
          className="bg-blue-900 w-full pl-12 pr-6 py-3 rounded text-xs"
        />
      </div>
    </header>
  )
}
