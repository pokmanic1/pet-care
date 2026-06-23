
function mesajEroare(campuri) {

    for (let camp of campuri) {

        if (!camp.valoare || camp.valoare.trim() === "") {
            return `Câmpul "${camp.numeCamp}" este obligatoriu!`;
        }
    }
    return '';
}

export default mesajEroare