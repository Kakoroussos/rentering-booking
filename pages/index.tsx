import Head from 'next/head'
import { useState } from 'react'

interface Hotel {
  name: string
  price: number
  stars: number
  city: string
  image: string
}

const HOTELS: Hotel[] = [
  {
    name: 'Grand Hotel',
    price: 150,
    stars: 5,
    city: 'Madrid',
    image: 'https://via.placeholder.com/600x300',
  },
  {
    name: 'Ocean View Hotel',
    price: 210,
    stars: 5,
    city: 'Barcelona',
    image: 'https://via.placeholder.com/600x300',
  },
  {
    name: 'Cityscape Hotel',
    price: 130,
    stars: 4,
    city: 'Madrid',
    image: 'https://via.placeholder.com/600x300',
  },
  {
    name: 'Downtown Inn',
    price: 95,
    stars: 3,
    city: 'Valencia',
    image: 'https://via.placeholder.com/600x300',
  },
]

export default function Home() {
  const [destination, setDestination] = useState('')
  const [filtered, setFiltered] = useState<Hotel[]>(HOTELS)

  const handleSearch = () => {
    const dest = destination.trim().toLowerCase()
    setFiltered(
      HOTELS.filter((h) =>
        dest ? h.city.toLowerCase().includes(dest) : true
      )
    )
  }

  return (
    <>
      <Head>
        <title>Rentering – Home</title>
        <link rel="icon" href="/assets/logos/ICONOFINAL.png" />
      </Head>
      <div className="bg-orange-50 min-h-screen font-sans">
        <header className="bg-white shadow">
          <div className="max-w-4xl mx-auto py-4 px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <img
              src="/assets/logos/logo.png"
              alt="Rentering Logo"
              className="h-12 md:h-24"
            />
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 text-lg"
            >
              Sign in
            </a>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6">
          <section className="bg-white rounded-lg shadow p-4 mb-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Find hotels
            </h1>
            <div className="bg-gray-100 rounded-md p-4 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 4v16m8-16v16M4 8h16M4 16h16"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent focus:outline-none py-2"
                />
              </div>
              <input
                type="date"
                className="w-full md:w-auto bg-transparent focus:outline-none py-2"
                // puedes gestionar fechas aquí si quieres
              />
              <input
                type="date"
                className="w-full md:w-auto bg-transparent focus:outline-none py-2"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="w-full md:w-auto bg-orange-500 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((h) => (
              <div
                key={h.name}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src={h.image}
                  alt={h.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg md:text-xl font-semibold">
                    {h.name}
                  </h2>
                  <div className="flex items-center mt-2 text-orange-400">
                    {'★'.repeat(h.stars)}
                  </div>
                  <p className="mt-2 text-base md:text-lg font-bold">
                    ${h.price}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  )
}
