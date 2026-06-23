import bgImage1 from '../../img/img-index/img-index-bg-1.svg'
import bgImage from '../../img/img-index/recenzii-clienti/fundal_pagina_index.png'
import pers1 from '../../img/img-index/recenzii-clienti/pers1.jpg'
import pers2 from '../../img/img-index/recenzii-clienti/pers2.jpg'
import pers3 from '../../img/img-index/recenzii-clienti/pers3.jpg'
import pers4 from '../../img/img-index/recenzii-clienti/pers4.jpg'
import pers5 from '../../img/img-index/recenzii-clienti/pers5.jpg'
import pers6 from '../../img/img-index/recenzii-clienti/pers6.jpg'
import pers7 from '../../img/img-index/recenzii-clienti/pers7.jpg'
import pers8 from '../../img/img-index/recenzii-clienti/pers8.jpg'
import pers9 from '../../img/img-index/recenzii-clienti/pers9.jpg'
import pers10 from '../../img/img-index/recenzii-clienti/pers10.jpg'
import pers11 from '../../img/img-index/recenzii-clienti/pers11.jpg'
import pers12 from '../../img/img-index/recenzii-clienti/pers12.jpg'

import index_sectiunea_ServiciiPrincipal from '../../img/img-index/Img_sectiunea_servicii_principale.svg'
import index_sectiunea_DeCePet from '../../img/img-index/Img-index-sectiunea-DeCePet.svg'
import { AncoraColorata, AncoraSur } from "../utilitati/butoane.jsx";

function Index() {

    let a = '/Practica/img/img-index/img-index-bg-1.svg'
    const items = [
        {
            id: 1,
            img: pers1,
            nume: 'Popescu',
            prenume: 'Mihai',

            recenzie: 'Personal foarte amabil și profesionist. Cățelul meu a fost tratat cu multă grijă și atenție.',
        },
        {
            id: 2,
            img: pers2,
            nume: 'Ionescu',
            prenume: 'Ana',
            recenzie: 'Servicii excelente și explicații clare. Recomand cu încredere această clinică veterinară.',
        },
        {
            id: 3,
            img: pers3,
            nume: 'Rusu',
            prenume: 'Elena',
            recenzie: 'Am fost impresionată de răbdarea și dedicarea echipei. Pisica mea s-a simțit în siguranță.',
        },
        {
            id: 4,
            img: pers4,
            nume: 'Munteanu',
            prenume: 'Andrei',
            recenzie: 'Programarea a fost rapidă, iar consultația foarte detaliată. O experiență plăcută.',
        },
        {
            id: 5,
            img: pers5,
            nume: 'Ceban',
            prenume: 'Maria',
            recenzie: 'Oameni extraordinari! Au avut grijă de cățelul nostru ca și cum ar fi fost al lor.',
        },
        {
            id: 6,
            img: pers6,
            nume: 'Dumitru',
            prenume: 'Cristian',
            recenzie: 'Profesionalism, curățenie și multă empatie. Cu siguranță vom reveni.',
        },
        {
            id: 7,
            img: pers7,
            nume: 'Balan',
            prenume: 'Irina',
            recenzie: 'Medicii au răspuns la toate întrebările mele și mi-au oferit sfaturi utile.',
        },
        {
            id: 8,
            img: pers8,
            nume: 'Luca',
            prenume: 'Victor',
            recenzie: 'Foarte mulțumit de serviciile primite. Atmosferă plăcută și personal dedicat.',
        },
        {
            id: 9,
            img: pers9,
            nume: 'Sandu',
            prenume: 'Gabriela',
            recenzie: 'Pisica mea a primit îngrijirea de care avea nevoie. Mulțumim întregii echipe!',
        },
        {
            id: 10,
            img: pers10,
            nume: 'Rotaru',
            prenume: 'Inga',
            recenzie: 'Consultația a fost punctuală și foarte bine explicată. Recomand cu drag.',
        },
        {
            id: 11,
            img: pers11,
            nume: 'Mocanu',
            prenume: 'Alina',
            recenzie: 'Un loc unde animalele sunt tratate cu respect și afecțiune. Suntem foarte mulțumiți.',
        },
        {
            id: 12,
            img: pers12,
            nume: 'Nistor',
            prenume: 'George',
            recenzie: 'Servicii de calitate și personal prietenos. Cea mai bună alegere pentru animăluțul nostru.',
        },
    ];
    return (
        <>
        
            <section
                className="min-w-[375px] min-h-[95dvh] h-[95dvh] w-full flex items-center justify-center text-white bg-cover bg-center   bg-no-repeat "
                style={{ backgroundImage: `url(${bgImage})` }}>

                <div className='h-full w-full flex justify-center items-center md:w-[50%] md:mr-auto  '>
                    <div className='  w-[60%] md:w-[100%] max-w-[500px]  text-center flex items-center justify-center flex-col gap-8 '>
                        <h1 className='md:bg-transparent  text-[30px] md:text-[40px] lg:text-[48px] px-[10px] text-white '>Pet Care</h1>
                        <p className='text-[16px] text-white md:bg-transparent  px-[10px]'><span>La Pet Care, oferim servicii medicale complete și îngrijire de top pentru animalele de companie.</span><span className='md:flex hidden'> </span> O echipă de medici veterinari dedicați este gata să asigure o viață fericită și sănătoasă ghemotocului tău de blană</p>

                        <div className=' flex w-full justify-center items-center gap-3'>

                            <div className='md:flex hidden'><AncoraColorata title='Progameazate la o consultatie' ancora='/booking' /></div>
                            <div className=' flex md:hidden'><AncoraColorata title='Programeazata' ancora='' /></div>
                            <div><AncoraSur title='Afla mai multe' ancora='/contact' /></div>

                        </div>  
                    </div>
                </div>

            </section>
            <section id='a' className='w-full min-h-dvh bg-white flex justify-center items-center px-4 py-10'>
                <div
                    className='
                            border border-black rounded-2xl w-full md:w-[90%] xl:w-[80%] max-w-[1500px] min-h-[500px] flex flex-col justify-center items-start px-6 sm:px-10 lg:px-[50px] bg-cover bg-no-repeat bg-right'
                    style={{
                        backgroundImage: `url(${index_sectiunea_DeCePet})`,

                    }}>
                    <div
                        className='
                                w-full md:max-w-[60%] lg:max-w-[45%] flex flex-col items-center md:items-start justify-center bg-white/80 backdrop-blur-sm py-6 px-5 sm:px-8 rounded-2xl'>
                        <h1
                            className='
                                    font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-semibold text-[#1A1A1A] mb-4 leading-tight text-center md:text-left'>
                            De ce <span className='text-[#2F80ED]'>„Pet Care”</span>
                        </h1>

                        <p
                            className='
                                    text-blacktext-center md:text-lefttext-[15px] mb-3 sm:text-[16px] lg:text-[18px]leading-7 lg:leading-8mb-8font-light'>
                            
                            Oferim grijă, profesionalism și atenție fiecărui animal,
                            pentru ca tu să ai liniștea că este pe cele mai bune mâini.
                        </p>

                        <AncoraColorata
                            title='Vezi Echipa'
                            ancora='team' />
                    </div>
                </div>
            </section>


            <section id="team" className='w-full min-h-[95dvh]  bg-white flex justify-center items-center px-4 py-10 bg-cover bg-no-repeat bg-center'
                style={{ backgroundImage: `url("${index_sectiunea_ServiciiPrincipal}")` }}>
                <div className='w-[98%] md:w-[95%] lg:w-[80%]'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-[10px] sm:gap-[20px]'>



                        <div className='min-w-[100px] max-w-[400px]  bg-white rounded-[20px] border border-gray-200 shadow-lg  p-4 md:p-5 lg:p-6 relative overflow-hidden flex flex-col'>


                            <span className='bg-[#2196F3]/10 text-[#2196F3] text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4'>
                                Serviciu principal
                            </span>

                            <div className='w-[60px] h-[4px] bg-[#2196F3] rounded-full mb-4'></div>

                            <h3 className='text-[22px] font-semibold text-gray-900 mb-2'>
                                Consultații
                            </h3>

                            <p className='text-gray-600 text-sm leading-6 mb-4 hidden sm:flex'>
                                Evaluări complete și recomandări personalizate pentru menținerea sănătății animalului.
                            </p>

                            <ul className='space-y-2 text-sm text-gray-700 mt-auto'>
                                <li>• Examinare generală</li>
                                <li>• Stabilirea diagnosticului</li>
                                <li>• Plan de tratament</li>
                            </ul>
                        </div>

                        <div className='min-w-[100px] max-w-[400px]  bg-white rounded-[20px] border border-gray-200 shadow-lg  p-4 md:p-5 lg:p-6 relative overflow-hidden flex flex-col'>

                            <span className='bg-[#2196F3]/10 text-[#2196F3] text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4'>
                                Serviciu principal
                            </span>

                            <div className='w-[60px] h-[4px] bg-[#2196F3] rounded-full mb-4'></div>

                            <h3 className='text-[22px] font-semibold text-gray-900 mb-2'>
                                Vaccinare
                            </h3>

                            <p className='text-gray-600 text-sm leading-6 mb-4 hidden sm:flex'>
                                Protecție eficientă împotriva bolilor și monitorizarea dezvoltării sănătoase.
                            </p>

                            <ul className='space-y-2 text-sm text-gray-700 mt-auto'>
                                <li>• Vaccinuri obligatorii</li>
                                <li>• Carnet de sănătate</li>
                                <li>• Program personalizat</li>
                            </ul>
                        </div>

                        <div className='min-w-[100px] max-w-[400px]  bg-white rounded-[20px] border border-gray-200 shadow-lg  p-4 md:p-5 lg:p-6 relative overflow-hidden flex flex-col'>


                            <span className='bg-[#2196F3]/10 text-[#2196F3] text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4'>
                                Serviciu principal
                            </span>

                            <div className='w-[60px] h-[4px] bg-[#2196F3] rounded-full mb-4'></div>

                            <h3 className='text-[22px] font-semibold text-gray-900 mb-2'>
                                Toaletare
                            </h3>

                            <p className='text-gray-600 text-sm leading-6 mb-4 hidden sm:flex'>
                                Îngrijire completă pentru confortul și aspectul impecabil al animalului.
                            </p>

                            <ul className='space-y-2 text-sm text-gray-700 mt-auto'>
                                <li>• Tuns și periaj</li>
                                <li>• Curățare urechi</li>
                                <li>• Îngrijirea ghearelor</li>
                            </ul>
                        </div>

                        <div className='min-w-[100px] max-w-[400px]  bg-white rounded-[20px] border border-gray-200 shadow-lg  p-4 md:p-5 lg:p-6 relative overflow-hidden flex flex-col'>

                            <span className='bg-[#2196F3]/10 text-[#2196F3] text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4'>
                                Serviciu principal
                            </span>

                            <div className='w-[60px] h-[4px] bg-[#2196F3] rounded-full mb-4'></div>

                            <h3 className='text-[22px] font-semibold text-gray-900 mb-2'>
                                Urgențe
                            </h3>

                            <p className='text-gray-600 text-sm leading-6 mb-4 hidden sm:flex'>
                                Intervenții rapide pentru situațiile care necesită asistență imediată.
                            </p>

                            <ul className='space-y-2 text-sm text-gray-700 mt-auto'>
                                <li>• Asistență prioritară</li>
                                <li>• Diagnostic rapid</li>
                                <li>• Tratament de urgență</li>
                            </ul>
                        </div>



                    </div>
                </div>
            </section>

                
            <style>
                {`
                    @keyframes scroll {
                        from {
                            transform: translateX(0);
                        }
                        to {
                            transform: translateX(calc(-50% - 8px));
                        }
                    }

                    .animate-scroll {
                        width: max-content;
                        animation: scroll 15s linear infinite;
                    }

                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>
            <section className='w-full min-h-[60dvh] gap-[20px] bg-white flex flex-col justify-center items-center px-4 py-[200px] bg-cover bg-no-repeat bg-center'>
                        <h1 className='font-poppins text-[40px] font-semibold'>Recenzii </h1>
                <div className="overflow-hidden  my-auto w-[98%] sm:w-[90%] lg:w-[90%]  rounded-[40px] border-[5px] py-2 border-black">
                    <div className="flex items-center gap-[35px] animate-scroll">
                        {[...items, ...items].map((item, index) => (
                            <div
                                key={index}

                                className="flex-shrink-0 w-[240px]    sm:w-[280px]    md:w-[320px]    lg:w-[340px]    h-[300px]    sm:h-[350px]    md:h-[400px]    bg-gradient-to-b from-[#4CAF50] to-[#2196F3]    text-white    rounded-3xl    shadow-2xl shadow-blue-400">
                                <div className="w-full h-full flex flex-col items-center justify-center pt-2 pb-4 px-5">

                                    <div className="w-[80%] h-[300px] rounded-[20px] overflow-hidden border-2 border-white mb-4 bg-white">
                                        {item.img ? (
                                            <img
                                                src={item.img}
                                                alt={`${item.nume} ${item.prenume}`}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-blue-600 text-sm">
                                                IMG
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-center">
                                        {item.nume || "Nume"}
                                    </h3>

                                    <p className="text-sm opacity-80 mb-4">
                                        {item.prenume || "Prenume"}
                                    </p>

                                    <p className="text-sm text-center leading-6 font-normal">
                                        {item.recenzie}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >


            <section className='w-full min-h-[90dvh] bg-white flex justify-center items-center px-4 pb-[100px]'>
                <div className='w-full max-w-6xl bg-red-50 border-2 border-red-200 rounded-[40px] p-8 md:p-14 shadow-xl'>

                    <div className='text-center mb-12'>
                        <span className='inline-block bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-full mb-4'>
                            Serviciu de Urgență Veterinară
                        </span>

                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                            Ai o urgență?
                        </h2>

                        <p className='text-gray-600 text-lg max-w-3xl mx-auto leading-8'>
                            Înțelegem că situațiile neprevăzute pot apărea în orice moment.
                            Echipa noastră este pregătită să ofere asistență medicală rapidă
                            și profesionistă pentru animalele care necesită îngrijiri urgente.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-6'>

                        <div className='bg-white rounded-3xl p-8 shadow-md'>
                            <div className='text-4xl mb-4'></div>

                            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>
                                Program de urgență
                            </h3>

                            <p className='text-gray-600 leading-7'>
                                Luni – Duminică
                                <br />
                                <span className='font-semibold text-red-600'>
                                    24/7
                                </span>
                                <br />
                                Intervenim pentru cazurile care necesită asistență imediată.
                            </p>
                        </div>

                        <div className='bg-white rounded-3xl p-8 shadow-md'>
                            <div className='text-4xl mb-4'></div>

                            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>
                                Contact rapid
                            </h3>

                            <p className='text-gray-600 leading-7 mb-6'>
                                Sună imediat înainte de a ajunge la clinică pentru ca
                                echipa noastră să se pregătească pentru primirea pacientului.
                            </p>

                            <a
                                href="tel:+37360000000"
                                className='inline-flex items-center justify-center bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3 rounded-xl'
                            >
                                +373 60 000 000
                            </a>
                        </div>

                        <div className='bg-white rounded-3xl p-8 shadow-md'>
                            <div className='text-4xl mb-4'></div>

                            <h3 className='text-2xl font-semibold mb-4 text-gray-900'>
                                Când să ne contactezi
                            </h3>

                            <ul className='text-gray-600 leading-7 space-y-2 list-disc pl-5'>
                                <li>Dificultăți de respirație</li>
                                <li>Accidente sau traumatisme</li>
                                <li>Convulsii</li>
                                <li>Intoxicații</li>
                                <li>Sângerări abundente</li>
                                <li>Pierderea cunoștinței</li>
                            </ul>
                        </div>

                    </div>



                </div>
            </section>
        </>
    );
}

export default Index;