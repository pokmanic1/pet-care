import { useState } from "react";
import mesajEroare from "../utilitati/mesajEroare";
import { useNavigate } from 'react-router-dom';import API_URL from '../utilitati/api'

function Inregistreazate() {
    const navigate = useNavigate();


    const [mesajErr, setMesajErr] = useState("");
    const [culoare, setCuloare] = useState("");
    const [nume, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function onChangeName(e) {
        setName(e.target.value);

    }
    function onChangeEmail(e) {
        setEmail(e.target.value);

    }
    function onChangePassword(e) {
        setPassword(e.target.value);

    }
    async function onSubmit() {
        const campuriDeValidat = [
            { valoare: nume, numeCamp: "Nume" },
            { valoare: email, numeCamp: "email" },
            { valoare: password, numeCamp: "parola" }
        ];
        const err = mesajEroare(campuriDeValidat);

        if (err !== '') {
            setCuloare("text-red-600");
            setMesajErr(err);
            return;
        }
        const res = await fetch(`${API_URL}/api/booking`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nume, email, password })
        });
        const data = await res.json();
        if (data.success) {
            localStorage.setItem('token', data.token);
            setMesajErr('Bine ai venit');
            setCuloare("text-green-600");
            navigate('/');

            window.location.reload();

        }
        else setMesajErr('Eroare: ' + data.error);
    }

    return (
        <>
            <section className="min-w-[375px] min-h-[95dvh] h-[95dvh] w-full flex items-center justify-center text-white bg-cover bg-right   bg-no-repeat">
                <div className="max-w-[1400px] w-[95%] sm:w-[80%]  md:w-[60%] h-full  flex items-center justify-center flex-col gap-[15px] lg:gap-[25px]">

                    <h1 className="text-[25px] md:text-[30px] lg:text-[38px] text-black">Creaza un cont</h1>
                    <div className="w-full   px-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Nume
                        </label>

                        <input
                            type="text"
                            id="name"
                            value={nume}
                            onChange={onChangeName}
                            placeholder="Introduceți numele..."
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                    </div>
                    <div className="w-full  px-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Email
                        </label>

                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="Introduceți emailul..."
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                    </div>
                    <div className="w-full  px-4">
                        <label htmlFor="parola" className="block text-sm font-medium text-gray-400 pl-2 mb-1">
                            Parola
                        </label>

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={onChangePassword}
                            placeholder="Introduceți parola..."
                            className="w-full px-5 py-3 rounded-[12px] border border-stone-400 bg-transparent text-gray-700 outline-none transition-all focus:border-stone-600 focus:ring-1 focus:ring-stone-600" />
                    </div>
                    <div>
                        <p value={mesajErr} className={`mesajEroare text-[14px] text-black text-center m-0 ${culoare} `}>{mesajErr}</p>

                        <button
                            id="loginBtn"
                            type="submit"
                            onClick={onSubmit}
                            className={`w-full sm:w-[450px] py-3 border border-white scale-95 hover:scale-105 transition-transform duration-300 ease-in-out rounded-full mt-3 font-medium transition-all duration-300
                                ${nume !== "" && email !== "" && password !== ""
                                    ? "bg-black text-white"
                                    : "bg-gray-200 text-black"
                                }`}>
                            Creaza un cont
                        </button>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Inregistreazate;  