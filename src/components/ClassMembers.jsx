import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function ClassMembers() {

  const members = [
    { name: 'Siswa 01', image: '/src/assets/student1.jpg' },
    { name: 'Siswa 02', image: '/src/assets/student2.jpg' },
    { name: 'Siswa 03', image: '/src/assets/student3.jpg' },
    { name: 'Siswa 04', image: '/src/assets/student4.jpg' },
    { name: 'Siswa 05', image: '/src/assets/student5.jpg' },
    { name: 'Siswa 06', image: '/src/assets/student6.jpg' },
    { name: 'Siswa 07', image: '/src/assets/student7.jpg' },
    { name: 'Siswa 08', image: '/src/assets/student8.jpg' },
    { name: 'Siswa 09', image: '/src/assets/student9.jpg' },
    { name: 'Siswa 10', image: '/src/assets/student10.jpg' },
    { name: 'Siswa 11', image: '/src/assets/student11.jpg' },
    { name: 'Siswa 12', image: '/src/assets/student12.jpg' },
    { name: 'Siswa 13', image: '/src/assets/student13.jpg' },
    { name: 'Siswa 14', image: '/src/assets/student14.jpg' },
    { name: 'Siswa 15', image: '/src/assets/student15.jpg' },
    { name: 'Siswa 16', image: '/src/assets/student16.jpg' },
    { name: 'Siswa 17', image: '/src/assets/student17.jpg' },
    { name: 'Siswa 18', image: '/src/assets/student18.jpg' },
    { name: 'Siswa 19', image: '/src/assets/student19.jpg' },
    { name: 'Siswa 20', image: '/src/assets/student20.jpg' },
    { name: 'Siswa 21', image: '/src/assets/student21.jpg' },
    { name: 'Siswa 22', image: '/src/assets/student22.jpg' },
    { name: 'Siswa 23', image: '/src/assets/student23.jpg' },
    { name: 'Siswa 24', image: '/src/assets/student24.jpg' },
    { name: 'Siswa 25', image: '/src/assets/student25.jpg' },
    { name: 'Siswa 26', image: '/src/assets/student26.jpg' },
    { name: 'Siswa 27', image: '/src/assets/student27.jpg' },
    { name: 'Siswa 28', image: '/src/assets/student28.jpg' },
    { name: 'Siswa 29', image: '/src/assets/student29.jpg' },
    { name: 'Siswa 30', image: '/src/assets/student30.jpg' },
    { name: 'Siswa 31', image: '/src/assets/student31.jpg' },
    { name: 'Siswa 32', image: '/src/assets/student32.jpg' },
    { name: 'Siswa 33', image: '/src/assets/student33.jpg' },
    { name: 'Siswa 34', image: '/src/assets/student34.jpg' },
    { name: 'Siswa 35', image: '/src/assets/student35.jpg' },
    { name: 'Siswa 36', image: '/src/assets/student36.jpg' }
  ]

  const [currentPage, setCurrentPage] = useState(0)

  const membersPerPage = 6

  const startIndex = currentPage * membersPerPage

  const currentMembers = members.slice(
    startIndex,
    startIndex + membersPerPage
  )

  const totalPages = Math.ceil(
    members.length / membersPerPage
  )

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="mt-16">

      <div className="text-center text-white mb-10">
        <p className="text-sm uppercase tracking-[4px] text-white/60 mb-3">
          Anggota Kelas
        </p>

        <h3 className="text-3xl md:text-4xl font-bold">
          XI RPL 1
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {currentMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border-none rounded-2xl p-4 md:p-5 text-[#292653] hover:bg-white/60 hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 sm:h-56 md:h-64 object-cover rounded-xl"
            />

            <h4 className="text-lg md:text-xl font-bold mt-4">
              {member.name}
            </h4>

            <p className="text-gray-500 text-sm md:text-base">
              XI RPL 1
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">

        <button
          onClick={previousPage}
          disabled={currentPage === 0}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#292653] transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
        >
          <FaChevronLeft />
        </button>

        <span className="text-sm md:text-base text-white">
          {currentPage + 1} / {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#292653] transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
        >
          <FaChevronRight />
        </button>

      </div>

    </div>
  )
}

export default ClassMembers
