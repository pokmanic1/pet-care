import { useState } from 'react'
import bgServicii from '../../img/img-pg-servicii/bgServicii.svg'

const servicii = [
    { id: 1, categorie: 'Preventive', nume: 'Consultație generală', descriere: 'Examinare completă a stării de sănătate a animalului tău de companie.', pret: '150 MDL', icon: '', detalii: 'Consultația include examinarea fizică completă: verificarea greutății, temperaturii, stării dinților, ochilor, urechilor și pielii. Durata: 30-45 minute.' },
    { id: 2, categorie: 'Preventive', nume: 'Vaccinare', descriere: 'Scheme complete de vaccinare pentru câini, pisici și alte animale.', pret: '200 MDL', icon: '', detalii: 'Oferim scheme de vaccinare conform standardelor internaționale: vaccin antirabic, DHPP pentru câini, FVRCP pentru pisici. Inclus carnet de sănătate actualizat.' },
    { id: 3, categorie: 'Preventive', nume: 'Deparazitare', descriere: 'Tratamente eficiente împotriva paraziților interni și externi.', pret: '120 MDL', icon: '', detalii: 'Deparazitare internă (viermi intestinali, Giardia) și externă (purici, căpușe, râie). Produse certificate, sigure pentru animale și familie. Recomandat la fiecare 3 luni.' },
    { id: 4, categorie: 'Preventive', nume: 'Analize de laborator', descriere: 'Analize de sânge, urină și alte teste de diagnostic rapid.', pret: 'de la 180 MDL', icon: '', detalii: 'Laborator propriu cu rezultate în 1-3 ore. Hemogramă, biochimie serică, analiza urinei, teste rapide pentru Parvo, FIV, FeLV.' },
    { id: 5, categorie: 'Chirurgicale', nume: 'Sterilizare / Castrare', descriere: 'Intervenție chirurgicală sigură pentru controlul reproducerii.', pret: 'de la 800 MDL', icon: '', detalii: 'Sub anestezie generală, cu monitorizare continuă. Include consultația pre-operatorie și îngrijirea post-operatorie. Recuperare: 7-10 zile.' },
    { id: 6, categorie: 'Chirurgicale', nume: 'Chirurgie generală', descriere: 'Intervenții chirurgicale pentru diverse afecțiuni și urgențe.', pret: 'de la 1200 MDL', icon: '', detalii: 'Extirpare tumori, reparare fracturi, chirurgie abdominală, extragere corpi străini. Fiecare caz evaluat individual, cu plan de tratament personalizat.' },
    { id: 7, categorie: 'Stomatologice', nume: 'Detartraj dentar', descriere: 'Curățare profesională a dinților pentru o igienă orală optimă.', pret: '350 MDL', icon: '', detalii: 'Cu ultrasunete, sub anestezie ușoară. Include lustruirea dinților și inspecția cavității orale. Recomandat anual. Durata: 45-60 minute.' },
    { id: 8, categorie: 'Stomatologice', nume: 'Extracție dentară', descriere: 'Extragerea dinților afectați pentru confortul animalului.', pret: 'de la 200 MDL / dinte', icon: '', detalii: 'Sub anestezie locală sau generală. Instrumente specifice pentru traumatism minim. Include tratament antibiotic post-extracție.' },
    { id: 9, categorie: 'Grooming', nume: 'Toaletare completă', descriere: 'Baie, tuns, pieptănat și îngrijire completă a blănii.', pret: 'de la 250 MDL', icon: '', detalii: 'Baie cu șampon profesional, uscare, pieptănat, tuns după rasă, curățarea urechilor, tăierea ghearelor și parfumare. Produse hipoalergenice.' },
    { id: 10, categorie: 'Grooming', nume: 'Tăiere gheare', descriere: 'Tăierea și pilirea ghearelor în condiții de siguranță și confort.', pret: '80 MDL', icon: '', detalii: 'Procedură de 15-20 minute, recomandată la fiecare 4-6 săptămâni. Tehnici blânde care reduc stresul animalului. Include curățarea labelor.' },
]

function Service() {
    const [categorieSelectata ,setCategorieSelectata]=useState('Toate serviciile')
    function categorie(cat){
        setCategorieSelectata(cat);
    }

    const tipsul =
        categorieSelectata=== 'Toate serviciile'
        ?servicii
        :servicii.filter(a=>a.categorie===categorieSelectata)

    return (
        <>
            <section
                className="min-w-[375px] w-full min-h-[50dvh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgServicii})` }}
            >
                <div className="text-center px-6 py-16">
                    <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-black drop-shadow-lg">
                        Serviciile noastre
                    </h1>
                    <p className="mt-4 text-[16px] md:text-[20px] text-black    /90 max-w-[600px] mx-auto drop-shadow">
                        Îngrijire completă pentru animalul tău de companie — de la consultații la grooming
                    </p>
                </div>
            </section>

            <section className="min-w-[375px] w-full py-10 px-4 md:px-10">
                <div className="max-w-[1200px] mx-auto">

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {['Toate serviciile', 'Preventive', 'Chirurgicale', 'Stomatologice', 'Grooming'].map(cat => (
                            <button
                                key={cat}
                                onClick={()=>categorie(cat)}
                                className="px-5 py-2 rounded-full text-[14px] font-medium border border-gray-300 bg-white text-gray-600 hover:border-[#4CAF50] hover:text-[#4CAF50] transition-all duration-200"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {tipsul.map(serviciu => (
                            <div
                                key={serviciu.id}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden"
                            >
                                <div className="bg-gradient-to-br from-green-50 to-blue-50 px-5 pt-6 pb-4 flex flex-col items-center text-center">
                                    
                                    <span className="text-[11px] font-medium uppercase tracking-wide text-[#2196F3] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                                        {serviciu.categorie}
                                    </span>
                                </div>

                                <div className="px-5 py-4 flex flex-col flex-1">
                                    <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
                                        {serviciu.nume}
                                    </h3>
                                    <p className="text-[13px] text-gray-500 leading-5 flex-1">
                                        {serviciu.descriere}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-[15px] font-bold text-[#4CAF50]">
                                            {serviciu.pret}
                                        </span>
                                        
                                    </div>
                                </div>

                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="min-w-[375px] w-full bg-gradient-to-r from-[#4CAF50] to-[#2196F3] py-14 px-6 text-center">
                <h2 className="text-[24px] md:text-[32px] font-bold text-white mb-3">
                    Nu știi ce serviciu ai nevoie?
                </h2>
                <p className="text-white/90 text-[16px] mb-6 max-w-[500px] mx-auto">
                    Programează o consultație generală și medicul veterinar îți va recomanda cel mai potrivit tratament.
                </p>
                <a
                    href="/booking"
                    className="inline-block px-8 py-3 bg-white text-[#2196F3] font-semibold rounded-full text-[15px] hover:shadow-lg transition-shadow"
                >
                    Programează o consultație
                </a>
            </section>
        </>
    )
}

export default Service