import Head from 'next/head'

export default function Home() {
  const hotels = [
    { name: 'Grand Hotel', price: 150 },
    { name: 'Ocean View Hotel', price: 210 },
    { name: 'Cityscape Hotel', price: 130 },
    { name: 'Downtown Inn', price: 95 }
  ]

  return (
    <>
      <Head>
        <title>Rentering – Get Your Homespot</title>
        <meta name="description" content="Reserva tu hotel fácilmente con Rentering" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <header className="max-w-4xl mx-auto py-4 flex justify-between items-center px-4">
          <img src="/assets/logos/logo.png" alt="Rentering Logo" className="h-10" />
          <a href="#" className="text-gray-700 hover:text-gray-900">Sign in</a>
        </header>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Encuentra hoteles fácil</h1>
          <div className="bg-white shadow rounded p-4 flex space-x-4">
            <input type="text" placeholder="Destino" className="flex-1 border rounded px-3 py-2" />
            <input type="date" className="border rounded px-3 py-2" />
            <input type="date" className="border rounded px-3 py-2" />
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Buscar</button>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden">
              <div className="h-48 bg-gray-200" /> {/* placeholder imagen */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{hotel.name}</h2>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-orange-400">★</span>
                  ))}
                </div>
                <p className="mt-2 font-bold">${hotel.price}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}
