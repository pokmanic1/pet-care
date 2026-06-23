import { useState } from "react";import API_URL from '../utilitati/api'

import mesajEroare from "../utilitati/mesajEroare";
function Contact() {
    const [mesajErr, setMesajErr] = useState("");
    const [culoare, setCuloare] = useState("");
    const [numeContact, setNumeContact] = useState("")
    const [nrTelefonContact, setNrTelefonContact] = useState("")
    const [recenzieContact, setRecenzieContact] = useState("")

    function onChangeNumeContact(e) {
        setNumeContact(e.target.value);
    }
    function onChangeTelefonContact(e) {
        setNrTelefonContact(e.target.value);
    }
    function onChangeRecenzieContact(e) {
        setRecenzieContact(e.target.value)
    }
    async function onSubmit() {
        const campuriDeValidat = [
            { valoare: numeContact, numeCamp: "N    ume" },
            { valoare: nrTelefonContact, numeCamp: "nrTelefon" },
            { valoare: recenzieContact, numeCamp: "recenzie" }
        ];
        const err = mesajEroare(campuriDeValidat);

        if (err !== '') {
            setCuloare("text-red-600");
            setMesajErr(err);
            return;
        }
        const res = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numeContact, nrTelefonContact, recenzieContact})
        })
                const d = await res.json();
        if (d.success) {setMesajErr('Recenzia primita'); setCuloare("text-green-600");}



    }

    return (
        <>
            <section className="min-w-[375px] min-h-[95dvh] py-[50px] w-full flex items-center justify-center text-white bg-cover bg-right   bg-no-repeat">
                <div className="max-w-[1400px] w-[95%] sm:w-[90%] h-full  flex items-center justify-center flex-col gap-[15px] lg:gap-[25px]">

                    <h1 className="text-[25px] md:text-[30px] lg:text-[38px] text-black mb-5">Contact</h1>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2">
                        <div className="w-full   px-4 flex flex-col justify-center items-center gap-3">
                            <h1 className="text-black text-[15px] md:text-[20px] lg:text-[25px] font-poppins ">Informatii adaugatoare</h1>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.1259776509046!2d28.194301876129394!3d45.88879347108404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65c87aa8b8c59%3A0xed199321915a2ea8!2zQ29sZWdpdWwg4oCeSXVsaWEgSGHImWRldeKAnQ!5e0!3m2!1sro!2s!4v1781686135529!5m2!1sro!2s" className="w-full min-h-[300px] border-2 border-black rounded-2xl" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                                    <h3 className="text-[#2196F3] font-semibold mb-2">
                                        Adresă
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-6">
                                        Strada Exemplu 10,
                                        <br />
                                        Cahul, Republica Moldova
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                                    <h3 className="text-[#2196F3] font-semibold mb-2">
                                        Telefon
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-6">
                                        +373 60 000 000
                                        <br />
                                        +373 79 000 000
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                                    <h3 className="text-[#2196F3] font-semibold mb-2">
                                        Email
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-6">
                                        contact@petcare.md
                                        <br />
                                        suport@petcare.md
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                                    <h3 className="text-[#2196F3] font-semibold mb-2">
                                        Program
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-6">
                                        Luni - Vineri: 08:00 - 20:00
                                        <br />
                                        Sâmbătă - Duminică: 09:00 - 18:00
                                    </p>
                                </div>

                            </div>

                        </div>



                        <div className="w-full   px-4 flex flex-col justify-center items-center gap-3 mt-10 md:mt-0 ">
                            <h1 className="text-black text-[15px] md:text-[20px] lg:text-[25px] font-poppins ">Lasa o recenzie</h1>
                            <div className="w-full   px-4 ">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                                    Nume
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    value={numeContact}
                                    onChange={onChangeNumeContact}
                                    placeholder="Introduceți numele..."
                                    className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                            </div>
                            <div className="w-full  px-4">
                                <label htmlFor="telefon" className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                                    Nr telefon
                                </label>

                                <input
                                    type="tel"
                                    id="email"
                                    value={nrTelefonContact}
                                    onChange={onChangeTelefonContact}
                                    placeholder="Introduceți emailul..."
                                    className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                            </div>
                            <div className="w-full  px-4">
                                <label htmlFor="parola" className="block text-sm  font-medium text-gray-400 pl-2 mb-1">
                                    Recenzia
                                </label>

                                <textarea
                                    type="text"
                                    id="recenzia"
                                    value={recenzieContact}
                                    onChange={onChangeRecenzieContact}
                                    placeholder="Transmite un mesaj..."
                                    className="w-full px-5 py-3 min-h-[100px] rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                            </div>
                            <div>
                                <p className={`mesajEroare text-[14px] text-center m-0 ${culoare}`}>
                                    {mesajErr}
                                </p>

                                <button
                                    id="submitContactBtn"
                                    type="submit"
                                    onClick={onSubmit}
                                    className={`w-full sm:w-[450px] py-3 border border-white scale-95 hover:scale-105 transition-transform duration-300 ease-in-out rounded-full mt-3 font-medium transition-all duration-300
            ${numeContact.trim() !== "" && nrTelefonContact.trim() !== "" && recenzieContact.trim() !== ""
                                            ? "bg-black text-white"
                                            : "bg-gray-200 text-black"
                                        }`}
                                >
                                    Trimite recenzia
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;  