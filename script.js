// Dizionario dei termini sanitari con tutte le voci richieste (senza descrizione)
const dizionarioSanitario = [
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Bastoni canadesi",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Bastoni da deambulazione"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Busto o corsetto ortopedico",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Bustino ortopedico, Corsetto, Tutore del tronco"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Calzature ortopediche",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Bustino ortopedico, Corsetto, Tutore del tronco"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Calze o gambaletti elastici",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Calze elastiche, Calze a compressione, Calze terapeutiche"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Carrozzina per deambulazione",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Carrozzella, Sedia a rotelle"
    },
        {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Cavigliera elastica",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tutore elastico di caviglia"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Cinto erniario",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Pancera, Fascia addominale"
    },
    {
        cod: "5PORT",
        tipologia: "Collare cervicale",
        termine: "Calze o gambaletti elastici",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tutore cervicale, Collare ortopedico"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Cuscino ortopedico",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Cuscino da seduta"
    },
        {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Divaricatore",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tutore divaricatore"
    },
    {
        cod: "5PORT",
        tipologia: "Ginocchiere",
        termine: "Calze o gambaletti elastici",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tutore del ginocchio"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Mutanda contenitiva",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Mutanda elastica, Pancera contenitiva"
    },
            {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Divaricatore",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tutore divaricatore"
    },
    {
        cod: "5PORT",
        tipologia: "Plantari ortopedici",
        termine: "Calze o gambaletti elastici",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Solette ortopediche"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Rialzo calcaneare",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tallonetta, Zeppa calcaneare"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Sospensorio",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tutore sospensorio"
    },
    {
        cod: "5PORT",
        tipologia: "Termine sanitario",
        termine: "Tutore",
        categoria: "Presidi ortopedici acquisto",
        rimborso: "20%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Tutore articolare"
    },
    {
        cod: "4LENT",
        tipologia: "Termine sanitario",
        termine: "Non definito",
        categoria: "Lenti graduate",
        rimborso: "30%",
        maxSpec: "300eur 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si test visivo",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: " "
    },
    {
        cod: "3MEDIC",
        tipologia: "Termine sanitario",
        termine: "Non definito",
        categoria: "Medicinali",
        rimborso: "40%",
        maxSpec: "300eur anno solare, nucleo famigliare, franchigia 75eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: " "
    },
    {
        cod: "6PADE",
        tipologia: "Termine sanitario",
        termine: "Non definito",
        categoria: "Presidi ortopedici adeguamenti",
        rimborso: "20%",
        maxSpec: "300eur, 3 anni ad avente diritto",
        maxGrup: "maxspec",
        preventivoPrescrizione: "Si",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: " "
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Porta impronte",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Porta impronte dentale"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Applicazioni di calcio fosfato",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Applicazione calcio fosfato, Trattamento calcio fosfato"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Dentoplastica",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Modellazione dentale"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Faccetta",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Faccetta dentale, Veneer"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Pulizia protesi",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Igiene protesica, Pulizia dentiera"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Ricostruzione estetica",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Ricostruzione dentale estetica, Restauro estetico"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Seduta motivazionale con protocollo gbt",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Seduta motivazionale gbt"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Terapia parodontale non chirurgica laser assistita a quadrante",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Terapia parodontale laser"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Trattamento remineralizzante",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Trattamento remineralizzante dentale"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Trattamento smacchiante",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Sbiancamento dentale, Trattamento smacchiante denti"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Weener ceramica",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Veneer ceramica, Faccetta ceramica"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Marca da bollo",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Bollo fiscale, Marca fiscale"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Attivazione impianti",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Attivazione impianto dentale, Posizionamento impianto"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Cementazione corona",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Cementazione protesica, Fissaggio corona"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Dima chirurgica",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Guida chirurgica, Mascherina chirurgica"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Gbr odontoiatria",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Rigenerazione ossea guidata"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Grande rialzo del seno mascellare",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Rialzo seno mascellare, Sinus lift"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Maggiorazione per elemento in disilicato",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Supplemento disilicato, Incremento costo disilicato"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Membrana",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Membrana chirurgica, Barriera ossea"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Molaggio Selettivo",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Molaggio occlusale selettivo"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Progettazione e dime per chirurgia implantare guidata",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Progettazione implantare guidata, Guida chirurgica implantare"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Regolarizzazione cresta ossea",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Modellazione cresta ossea, Rimodellamento osseo"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Rigenerazione Ossea",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Rigenerazione ossea, Osteorigenerazione"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Rimozione corona",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Rimozione protesi, Estrazione corona"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Rimozione perno",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Rimozione perno dentale, Estrazione perno"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Socket prevention",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Prevenzione alveolo, Protezione socket"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Visita controllo odontoiatrica",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Controllo odontoiatrico, Visita di controllo dentale"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Vite di guarigione",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Vite di osteointegrazione, Healing screw"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Anestesia",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Anestesia locale, Anestesia odontoiatrica"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Ansiolisi",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Sedazione leggera, Sedazione cosciente"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Applicazione del farmaco",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Somministrazione farmaco, Applicazione medicinale"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Assistenza infermieristica",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Assistenza nurse, Supporto infermieristico"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Assistenza medico",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Assistenza medica, Supporto medico"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Codice udi materiale riempitivo",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Codice udi, Identificativo dispositivo"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Diritto fisso di segreteria",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Quota segreteria, Tassa segreteria"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Sala operatoria",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Sala chirurgica, Blocco operatorio"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Sedazione cosciente",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Sedazione controllata, Sedazione leggera"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Sutura",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Punti di sutura, Sutura chirurgica"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Terapia antibiotica",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Trattamento antibiotico"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Tessera paziente",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Card paziente, Badge paziente"
    },
    {
        cod: "TNON",
        tipologia: "Termine sanitario",
        termine: "Utilizzo dispositivo di ancoraggio membrana",
        categoria: "Terapie non rimborsabili",
        rimborso: "0%",
        maxSpec: "0eur",
        maxGrup: "maxspec",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Utilizzo ancoraggio membrana, Fissaggio membrana"
    },
    {
        cod: "21ALAB",
        tipologia: "Termine sanitario",
        termine: "Da definire",
        categoria: "Analisi cliniche",
        rimborso: "30%",
        maxSpec: "maxgrup",
        maxGrup: "1000eur",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: " "
    },
    {
        cod: "21ALAB",
        tipologia: "Termine sanitario",
        termine: "Da definire",
        categoria: "Analisi di laboratorio",
        rimborso: "30%",
        maxSpec: "maxgrup",
        maxGrup: "1000eur",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: " "
    },
    {
        cod: "22DGN",
        tipologia: "Termine sanitario",
        termine: "Medicazione chirurgica, rimborsabile solo con intervento",
        categoria: "Diagnostica",
        rimborso: "35%",
        maxSpec: "maxgrup",
        maxGrup: "1000eur",
        preventivoPrescrizione: "No",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "No",
        sinonimi: "Medicazione post-operatoria, Sutura"
    },
    {
        cod: "EST010",
        tipologia: "Esame Strumentale",
        termine: "TAC",
        categoria: "esami",
        rimborso: "70%",
        maxSpec: "1 all'anno",
        maxGrup: "N/A",
        preventivoPrescrizione: "Obbligatoria",
        opt: "Si",
        visitaIniziale: "No",
        visitaFinale: "Si",
        valutazioneSanitaria: "Referto radiologico",
        sinonimi: "Tomografia computerizzata, SCAN"
    }
];

// Elementi DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsContainer = document.getElementById('resultsContainer');
const categoryButtons = document.querySelectorAll('.category-btn');
const termsCount = document.getElementById('termsCount');
const selectedCategory = document.getElementById('selectedCategory');

// Variabili per filtri
let currentSearchTerm = '';
let currentCategory = 'all';

// Inizializza la visualizzazione
displayTerms(dizionarioSanitario);
updateStats(dizionarioSanitario.length);

// Event listeners
searchInput.addEventListener('input', function() {
    currentSearchTerm = this.value.toLowerCase();
    filterTerms();
});

searchButton.addEventListener('click', () => {
    currentSearchTerm = searchInput.value.toLowerCase();
    filterTerms();
});

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Rimuovi la classe active da tutti i pulsanti
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Aggiungi la classe active al pulsante cliccato
        this.classList.add('active');
        
        currentCategory = this.getAttribute('data-category');
        selectedCategory.textContent = `Categoria: ${getCategoryLabel(currentCategory)}`;
        filterTerms();
    });
});

// Funzione per filtrare i termini in base alla ricerca e alla categoria
function filterTerms() {
    let filteredTerms = dizionarioSanitario;
    
    // Filtra per categoria
    if (currentCategory !== 'all') {
        filteredTerms = filteredTerms.filter(term => term.categoria === currentCategory);
    }
    
    // Filtra per termine de ricerca
    if (currentSearchTerm) {
        filteredTerms = filteredTerms.filter(term => 
            term.termine.toLowerCase().includes(currentSearchTerm) ||
            term.sinonimi.toLowerCase().includes(currentSearchTerm) ||
            term.cod.toLowerCase().includes(currentSearchTerm) ||
            term.tipologia.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    displayTerms(filteredTerms);
    updateStats(filteredTerms.length);
}

// Funzione per visualizzare i termini
function displayTerms(terms) {
    resultsContainer.innerHTML = '';
    
    if (terms.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">Nessun risultato trovato. Prova con un\'altra ricerca.</div>';
        return;
    }
    
    terms.forEach(term => {
        const termCard = document.createElement('div');
        termCard.classList.add('term-card');
        
        // Evidenziazione del testo cercato
        const highlightText = (text, search) => {
            if (!search || !text) return text || '';
            const regex = new RegExp(`(${search})`, 'gi');
            return text.toString().replace(regex, '<span class="highlight">$1</span>');
        };
        
        termCard.innerHTML = `
            <h3 class="term-name">${highlightText(term.termine, currentSearchTerm)}</h3>
            <p class="term-detail"><span class="detail-label">COD:</span> ${highlightText(term.cod, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Tipologia:</span> ${highlightText(term.tipologia, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Categoria:</span> ${getCategoryLabel(term.categoria)}</p>
            <p class="term-detail"><span class="detail-label">Rimborso:</span> ${highlightText(term.rimborso, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Max Spec:</span> ${highlightText(term.maxSpec, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Max Grup:</span> ${highlightText(term.maxGrup, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Preventivo-Prescrizione:</span> ${highlightText(term.preventivoPrescrizione, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">OPT:</span> ${highlightText(term.opt, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Visita Iniziale:</span> ${highlightText(term.visitaIniziale, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Visita Finale:</span> ${highlightText(term.visitaFinale, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Valutazione Sanitaria:</span> ${highlightText(term.valutazioneSanitaria, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Sinonimi:</span> ${highlightText(term.sinonimi, currentSearchTerm)}</p>
        `;
        
        resultsContainer.appendChild(termCard);
    });
}

// Funzione per aggiornare le statistiche
function updateStats(count) {
    termsCount.textContent = `${count} termini trovati`;
}

// Funzione per ottenere l'etichetta della categoria
function getCategoryLabel(category) {
    const labels = {
        'all': 'Tutti',
        '6PADE': '6PADE',
        '5PORT': '5PORT',
        '4LENT': '4LENT',
        '3MEDIC': '3MEDIC',
        'TNON': 'TNON',
        'altre': 'Altre Prestazioni'
    };
    return labels[category] || category;
}
