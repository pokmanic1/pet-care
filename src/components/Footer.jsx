function Footer() {

    return (
        <>
            <footer className="bg-white-900 text-black py-12 border-t min-h-[60dvh] flex items-center justify-center border-gray-300">
                <div className="w-[90%] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Pet Care
                            </h3>

                            <p className="text-gray-400 text-sm">
                                La Pet Care, oferim servicii medicale complete și îngrijire de top pentru animalele de companie
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>

                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>Email: pet-care@gmail.com</li>
                                <li>Telefon: +373 XX XXX XXX</li>
                                <li>Adresă: Centru</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Informații</h4>

                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>Scopul : salvarea animalelor</li>
                                <li>Vacinare , curatare </li>
                                <li>Pentru toate animalele</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Linkuri utile</h4>

                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>Politica de confidențialitate</li>
                                <li>Termeni și condiții</li>
                                <li>Întrebări frecvente</li>
                                <li>Rețele sociale</li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                        © 2026. Pet Care . Toate drepturile rezervate.
                    </div>
                </div>
            </footer>
        </>

    );


}

export default Footer;