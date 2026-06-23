import { useState } from 'react'

const echipa = [
    {
        id: 1,
        nume: 'Dr. Andreea Moraru',
        profesie: 'Medic veterinar',
        experienta: '12 ani',
        descriere: 'Specializată în medicina internă și diagnosticare imagistică pentru câini și pisici.',
        categorie: 'Medicina internă',
        initiala: 'AM',
    },
    {
        id: 2,
        nume: 'Dr. Ion Rusu',
        profesie: 'Chirurg veterinar',
        experienta: '9 ani',
        descriere: 'Expert în chirurgie ortopedică și abdominală, cu sute de intervenții reușite.',
        categorie: 'Chirurgie',
        initiala: 'IR',
    },
    {
        id: 3,
        nume: 'Dr. Maria Lupașcu',
        profesie: 'Medic veterinar',
        experienta: '7 ani',
        descriere: 'Pasionată de îngrijirea animalelor exotice: reptile, păsări și rozătoare.',
        categorie: 'Animale exotice',
        initiala: 'ML',
    },
    {
        id: 4,
        nume: 'Dr. Vlad Cojocaru',
        profesie: 'Stomatolog veterinar',
        experienta: '5 ani',
        descriere: 'Specialist în igiena orală, detartraj și extracții dentare pentru câini și pisici.',
        categorie: 'Stomatologie',
        initiala: 'VC',
    },
    {
        id: 5,
        nume: 'Dr. Elena Botnaru',
        profesie: 'Medic veterinar',
        experienta: '11 ani',
        descriere: 'Expertă în dermatologie veterinară și afecțiuni alergice la animale de companie.',
        categorie: 'Dermatologie',
        initiala: 'EB',
    },
    {
        id: 6,
        nume: 'Dr. Cristian Popa',
        profesie: 'Medic de urgențe',
        experienta: '8 ani',
        descriere: 'Disponibil non-stop pentru cazuri critice, toxicoze și traumatisme severe.',
        categorie: 'Urgențe',
        initiala: 'CP',
    },
    {
        id: 7,
        nume: 'Dr. Natalia Frunză',
        profesie: 'Medic veterinar',
        experienta: '6 ani',
        descriere: 'Specializată în oncologie veterinară și managementul durerii cronice.',
        categorie: 'Oncologie',
        initiala: 'NF',
    },
    {
        id: 8,
        nume: 'Ana Ciobanu',
        profesie: 'Asistent veterinar',
        experienta: '4 ani',
        descriere: 'Asistă în intervenții chirurgicale și asigură îngrijirea pacienților internați.',
        categorie: 'Asistență',
        initiala: 'AC',
    },
]

function Team() {
    const [categorieSelectata, setCategorieSelectata] = useState('Toți membrii')


    const membriFiltrati =
        categorieSelectata === 'Toți membrii'
            ? echipa
            : echipa.filter(membru => membru.categorie === categorieSelectata)

    function categorie(cat) {
        setCategorieSelectata(cat)
    }

    return (
        <>
            <section className="min-w-[375px] w-full min-h-[40dvh] flex items-center justify-center bg-gradient-to-r from-[#4CAF50] to-[#2196F3]">
                <div className="text-center px-6 py-16">
                    <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-white drop-shadow-lg">
                        Echipa noastră
                    </h1>
                    <p className="mt-4 text-[16px] md:text-[20px] text-white/90 max-w-[600px] mx-auto">
                        Profesioniști dedicați sănătății și bunăstării animalului tău de companie
                    </p>
                </div>
            </section>

            <section className="min-w-[375px] w-full py-14 px-4 md:px-10">
                <div className="max-w-[1200px] mx-auto">

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {['Toți membrii', 'Medicina internă', 'Chirurgie', 'Stomatologie', 'Urgențe', 'Animale exotice'].map(cat => (
                            <button
                                onClick={() => categorie(cat)}
                                key={cat}
                                className="px-5 py-2 rounded-full text-[14px] font-medium border border-gray-300 bg-white text-gray-600 hover:border-[#4CAF50] hover:text-[#4CAF50] transition-all duration-200">
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {membriFiltrati.map(membru => (
                            <div
                                key={membru.id}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden"
                            >
                                <div className="bg-gradient-to-br from-green-50 to-blue-50 pt-8 pb-5 flex flex-col items-center">
                                    <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#4CAF50] to-[#2196F3] flex items-center justify-center text-white text-[28px] font-bold mb-4 shadow-md">
                                        {membru.initiala}
                                    </div>
                                    <span className="text-[11px] font-medium uppercase tracking-wide text-[#2196F3] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                                        {membru.categorie}
                                    </span>
                                </div>

                                <div className="px-5 py-5 flex flex-col flex-1 text-center">
                                    <h3 className="text-[16px] font-semibold text-gray-800">
                                        {membru.nume}
                                    </h3>
                                    <p className="text-[13px] text-[#4CAF50] font-medium mt-1">
                                        {membru.profesie}
                                    </p>
                                    <p className="text-[12px] text-gray-400 mt-1 mb-3">
                                        Experiență: <span className="font-semibold text-gray-600">{membru.experienta}</span>
                                    </p>
                                    <p className="text-[13px] text-gray-500 leading-5 flex-1">
                                        {membru.descriere}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Team