import React from 'react'

function ClassStructure() {
  return (
    <div className="flex flex-col items-center gap-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="bg-white text-[#292653] rounded-2xl px-5 md:px-10 py-5 shadow-xl text-center">
          <p className="text-sm text-gray-500">
            Ketua Kelas
          </p>

          <h4 className="text-lg md:text-xl font-bold">
            Daniswara Basunjanya
          </h4>
        </div>

        <div className="bg-white text-[#292653] rounded-2xl px-5 md:px-10 py-5 shadow-xl text-center">
          <p className="text-sm text-gray-500">
            Wakil Ketua
          </p>

          <h4 className="text-lg md:text-xl font-bold">
            Stefanus Airlangga Putra W
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">

        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl p-5 md:p-6 text-center">
          <p className="text-white/60">
            Sekretaris 1
          </p>

          <h4 className="text-lg md:text-xl font-bold mt-2">
            Selvi Anita Sari
          </h4>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl p-5 md:p-6 text-center">
          <p className="text-white/60">
            Sekretaris 2
          </p>

          <h4 className="text-lg md:text-xl font-bold mt-2">
            Shely Anjalika
          </h4>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl p-5 md:p-6 text-center">
          <p className="text-white/60">
            Bendahara 1
          </p>

          <h4 className="text-lg md:text-xl font-bold mt-2">
            Affriani Nailla Husna
          </h4>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl p-5 md:p-6 text-center">
          <p className="text-white/60">
            Bendahara 2
          </p>

          <h4 className="text-lg md:text-xl font-bold mt-2">
            Indra Cahyo Setiawan
          </h4>
        </div>

      </div>
    </div>
  )
}

export default ClassStructure
