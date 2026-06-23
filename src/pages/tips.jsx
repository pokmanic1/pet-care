import { AncoraColorata, AncoraSur } from "../utilitati/butoane.jsx";

import bg1 from '../../img/img-pg-tips/bg-pentru-sfaturi.svg'

import imgCaini from '../../img/img-pg-tips/imgCaini.svg'
import imgPisici from '../../img/img-pg-tips/imgPisici.svg'
import imgRozatoare from '../../img/img-pg-tips/imgRazatoare.svg'
import imgPasari from '../../img/img-pg-tips/imgPasari.svg'
import imgHero from '../../img/img-pg-tips/bg-pentru-sfaturi.svg'

const animalCategories = [
  {
    key: 'caini',
    label: 'Câini',
    img: imgCaini,
    description:
      'Sfaturi pentru îngrijirea câinilor, nutriție echilibrată și activitate fizică pentru prietenii tăi blănoși.',
  },
  {
    key: 'pisici',
    label: 'Pisici',
    img: imgPisici,
    description:
      'Tot ce trebuie să știi pentru a crește o pisică fericită și sănătoasă, inclusiv sfaturi de comportament.',
  },
  {
    key: 'rozatoare',
    label: 'Rozătoare',
    img: imgRozatoare,
    description:
      'Căsuțe confortabile, alimentație corectă și sfaturi pentru rozătoare mici și active.',
  },
  {
    key: 'pasari',
    label: 'Păsări',
    img: imgPasari,
    description:
      'Sfaturi practice pentru îngrijirea păsărilor de companie, vocalizare și mediu optim.',
  },
]

const faqItems = [
  'Cât de des trebuie să îmi duc animalul la control veterinar?',
  'Când trebuie efectuate vaccinările și rapelurile?',
  'Cât de des este recomandată deparazitarea internă și externă?',
  'Care sunt semnele că animalul meu ar putea fi bolnav?',
  'Ce alimente sunt periculoase pentru animalele de companie?',
  'Cum aleg hrana potrivită pentru vârsta și nevoile animalului?',
  'Când este recomandată sterilizarea sau castrarea?',
  'Ce trebuie să fac dacă animalul refuză să mănânce?',
  'Cum pot preveni apariția paraziților și a bolilor infecțioase?',
  'Câtă apă ar trebui să consume zilnic animalul meu?',
  'Cum îmi pot da seama dacă animalul este stresat sau anxios?',
  'Ce fac în cazul unei urgențe veterinare?',
]
const animalMatch = [
  {
    animal: 'Ciobănesc German',

    question: 'Îți place liniștea, rutina și compania unui prieten loial?',
    answer:
      'Ciobănescul German este inteligent, protector și extrem de devotat familiei sale. Este potrivit pentru persoanele responsabile care își doresc un companion activ și de încredere.',
  },
  {
    animal: 'Labrador Retriever',

    question: 'Ai un stil de viață activ și îți place să petreci mult timp în aer liber?',
    answer:
      'Labradorul adoră plimbările lungi, joaca și activitățile în natură. Este sociabil, prietenos și se înțelege excelent cu oamenii și alte animale.',
  },
  {
    animal: 'Pisică Europeană',

    question: 'Preferi un animal independent, dar care oferă afecțiune atunci când dorește?',
    answer:
      'Pisica este alegerea ideală pentru persoanele care apreciază liniștea și independența. Se adaptează ușor vieții la apartament și necesită mai puțină atenție decât un câine.',
  },
  {
    animal: 'Hamster',

    question: 'Locuiești într-un spațiu mic și îți dorești un animal ușor de îngrijit?',
    answer:
      'Hamsterii ocupă puțin spațiu și sunt relativ ușor de întreținut. Sunt perfecți pentru persoanele care își doresc primul animal de companie.',
  },
  {
    animal: 'Papagal Nimfă',

    question: 'Îți place să interacționezi zilnic cu animalul tău și să îl înveți lucruri noi?',
    answer:
      'Papagalii nimfă sunt inteligenți, comunicativi și foarte sociabili. Pot dezvolta o relație apropiată cu stăpânii lor și iubesc atenția.',
  },
  {
    animal: 'Golden Retriever',

    question: 'Ai o familie cu copii și cauți un companion blând și răbdător?',
    answer:
      'Golden Retrieverul este una dintre cele mai apreciate rase pentru familii. Este afectuos, calm și foarte prietenos cu cei mici.',
  },
  {
    animal: 'Iepure Pitic',

    question: 'Îți dorești un animal liniștit, adorabil și potrivit pentru apartament?',
    answer:
      'Iepurii pitici sunt curați, afectuoși și pot deveni foarte apropiați de stăpânii lor dacă primesc atenție și îngrijire corespunzătoare.',
  },
  {
    animal: 'Porcușor de Guineea',

    question: 'Cauți un animal sociabil, blând și potrivit pentru întreaga familie?',
    answer:
      'Porcușorii de Guineea sunt prietenoși, adoră interacțiunea și se adaptează bine în familiile cu copii. Sunt companioni plăcuți și ușor de îndrăgit.',
  },
]
function Tips() {
  return (
    <>
      <section
        className="w-full min-h-[95dvh] min-w-[375px] flex items-center justify-start bg-cover bg-no-repeat bg-right px-4 py-16"
        style={{ backgroundImage: `url("${bg1}")` }}
      >
        <div className='flex items-center justify-center w-full md:w-[50%]'>
          <div className="w-full max-w-2xl md:mr-auto flex flex-col  items-center justify-center  gap-6 text-center ">
            <h1 className="text-4xl bg-white/50 p-2 backdrop-blur-lg rounded-2xl font-poppins md:text-5xl font-semibold text-black drop-shadow-sm leading-tight">
              Sfaturi <br className="hidden md:block " />pentru animalul tău
            </h1>
            <p className="bg-white/50 backdrop-blur-lg rounded-2xl p-2  text-center md:text-lg   max-w-md mx-auto">
              Îngrijire profesională, informații de încredere și cele mai bune
              practici pentru fiecare etapă a vieții animalului tău.
            </p>
            <div>
              <AncoraColorata title='Vezi mai multe' ancora='' />

            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-w-[375px] bg-white px-4 py-14">
        <h2 className="text-2xl font-poppins font-semibold text-center text-gray-800 mb-8">
          Articole pentru animaluțe
        </h2>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {animalCategories.map((animal) => (
            <div
              key={animal.key}
              className="rounded-2xl border-2 border-gradient-to-r from-pink-500 via-purple-500 to-blue-500   overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >

              <div className="relative h-[200px] sm:h-[240px] md:h-[270px] lg:h-[300px] bg-gray-100">
                <img
                  src={animal.img}
                  alt={animal.label}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-gray-800 text-[clamp(14px,16px,18px)] font-medium px-8 py-2 rounded-full">
                  {animal.label}
                </span>

                <div className="p-3 absolute  bottom-0">
                  <p className=" text-xs text-gray-600 bg-white/80 backdrop-blur-sm  rounded-2xl p-2 leading-relaxed ">
                    {animal.description}
                  </p>
                </div>

              </div>


            </div>
          ))}
        </div>
      </section>

      <section className="w-full min-w-[375px] bg-blue-50 px-4 py-14">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8 font-poppins">
          Întrebări frecvente
        </h2>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-blue-100"
            >
              <span className="text-[#2196F3] font-semibold text-sm mt-0.5 shrink-0">
                {i + 1}.
              </span>
              <p className="text-sm text-blue-900 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full min-w-[375px]  px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">


            <h2 className="text-3xl md:text-4xl font-semibold text-[#0D47A1] mt-4 font-poppins">
              Ce animal ți se potrivește?
            </h2>


          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {animalMatch.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2196F3] text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0D47A1] mb-3">
                      {item.question}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tips