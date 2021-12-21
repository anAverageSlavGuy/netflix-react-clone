import React from 'react'
import DropdownItem from "./DropdownItem";

function Faq() {
    return (
        <div className="faqs-container">
            <h5>Domande frequenti</h5>
            <div className="faqs-dropdowns">
                <DropdownItem title="Cos'è Netflix?" theme="dark">
                    Netflix è un servizio di streaming che offre una varietà di serie TV, film,
                    documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.
                    <br></br>
                    <br></br>
                    Guarda quello che vuoi, in qualsiasi momento e senza interruzioni pubblicitarie.
                    Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire:
                    aggiungiamo nuovi film e serie TV ogni settimana!
                </DropdownItem>
                <DropdownItem title="Quanto costa Netflix?" theme="dark">
                    Guarda Netflix su smartphone, tablet, Smart TV, laptop o dispositivi per lo streaming,
                    il tutto per un importo mensile fisso. Piani da 7,99 € a 17,99 € al mese. Nessun costo aggiuntivo, nessun contratto.
                </DropdownItem>
                <DropdownItem title="Dove posso guardare Netflix?" theme="dark">
                    Guarda Netflix dove vuoi, quando vuoi. Accedi al tuo account per guardare subito Netflix dal tuo computer su netflix.com
                    oppure da qualsiasi dispositivo connesso a Internet che supporta l'app Netflix, come smart TV, smartphone, tablet,
                    lettori multimediali per streaming e console per videogiochi.
                    <br></br>
                    <br></br>
                    Con l'app per iOS, Android e Windows 10 puoi anche scaricare i tuoi programmi preferiti.
                    Usa la funzionalità di download per guardare i contenuti mentre sei in viaggio e senza connessione a Internet.
                    Porta Netflix sempre con te.
                </DropdownItem>
                <DropdownItem title="Come posso disdire?" theme="dark">
                    Netflix è flessibile. Nessun contratto fastidioso e nessun impegno. Puoi facilmente disdire il tuo contratto online con due clic.
                    Nessuna penale: attiva o disdici il tuo account in qualsiasi momento.
                </DropdownItem>
                <DropdownItem title="Cosa posso guardare su Netflix?" theme="dark">
                    Netflix ha un nutrito catalogo di lungometraggi, documentari, serie TV, anime, originali Netflix pluripremiati e tanto altro.
                    Guarda tutto quello che vuoi, in qualsiasi momento.
                </DropdownItem>
                <DropdownItem title="Netflix è adatto ai bambini?" theme="dark">
                    L'area Netflix Bambini, già inclusa nell'abbonamento, offre ai genitori un maggiore controllo sui contenuti e ai più piccoli
                    uno spazio dedicato dove guardare serie TV e film per tutta la famiglia.
                    <br></br>
                    <br></br>
                    I profili Bambini hanno un filtro famiglia con PIN che ti permette di limitare l'accesso ai contenuti in base alla fascia d'età
                    e bloccare la visione di titoli specifici.
                </DropdownItem>
            </div>
        </div>
    )
}

export default Faq
