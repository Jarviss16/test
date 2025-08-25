// Dizionario dei termini sanitari con tutte le voci richieste (senza descrizione)
const dizionarioSanitario = [
    {
        cod: "VSC001",
        tipologia: "Visita Specialistica",
        termine: "Visita cardiologica",
        categoria: "visite",
        rimborso: "70%",
        maxSpec: "1 ogni 6 mesi",
        maxGrup: "N/A",
        preventivoPrescrizione: "Richiesta",
        opt: "No",
        visitaIniziale: "Si",
        visitaFinale: "No",
        valutazioneSanitaria: "ECG incluso",
        sinonimi: "Controllo cardiologico, Visita cuore"
    },
    {
        cod: "ESM002",
        tipologia: "Esame Strumentale",
        termine: "Risonanza magnetica",
        categoria: "esami",
        rimborso: "60%",
        maxSpec: "1 all'anno",
        maxGrup: "N/A",
        preventivoPrescrizione: "Obbligatoria",
        opt: "Si",
        visitaIniziale: "No",
        visitaFinale: "Si",
        valutazioneSanitaria: "Referto radiologico",
        sinonimi: "RMN, Imaging risonanza magnetica"
    },
    {
        cod: "ESC003",
        tipologia: "Esame Strumentale",
        termine: "Ecografia addominale",
        categoria: "esami",
        rimborso: "100%",
        maxSpec: "2 all'anno",
        maxGrup: "N/A",
        preventivoPrescrizione: "Richiesta",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "Referto ecografico",
        sinonimi: "Eco addome, Ultrasuoni addominali"
    },
    {
        cod: "CHI004",
        tipologia: "Intervento Chirurgico",
        termine: "Appendicectomia",
        categoria: "interventi",
        rimborso: "100%",
        maxSpec: "N/A",
        maxGrup: "N/A",
        preventivoPrescrizione: "Urgenza",
        opt: "No",
        visitaIniziale: "Si",
        visitaFinale: "Si",
        valutazioneSanitaria: "Valutazione pre-operatoria",
        sinonimi: "Rimozione appendice, Operazione appendicite"
    },
    {
        cod: "FAR005",
        tipologia: "Farmaco",
        termine: "Insulina",
        categoria: "farmaci",
        rimborso: "100%",
        maxSpec: "N/A",
        maxGrup: "4 confezioni/mese",
        preventivoPrescrizione: "Ricetta medica",
        opt: "No",
        visitaIniziale: "Si",
        visitaFinale: "No",
        valutazioneSanitaria: "Monitoraggio glicemico",
        sinonimi: "Ormone ipoglicemizzante, Terapia insulinica"
    },
    {
        cod: "VSO006",
        tipologia: "Visita Specialistica",
        termine: "Visita oculistica",
        categoria: "visite",
        rimborso: "50%",
        maxSpec: "1 all'anno",
        maxGrup: "N/A",
        preventivoPrescrizione: "Richiesta",
        opt: "No",
        visitaIniziale: "Si",
        visitaFinale: "No",
        valutazioneSanitaria: "Esame della vista",
        sinonimi: "Controllo occhi, Visita oftalmologica"
    },
    {
        cod: "ESL007",
        tipologia: "Esame Laboratorio",
        termine: "Analisi del sangue",
        categoria: "esami",
        rimborso: "100%",
        maxSpec: "2 serie all'anno",
        maxGrup: "N/A",
        preventivoPrescrizione: "Richiesta",
        opt: "No",
        visitaIniziale: "No",
        visitaFinale: "No",
        valutazioneSanitaria: "Referto ematologico",
        sinonimi: "Esame ematico, Prelievo sanguigno"
    },
    {
        cod: "FAR008",
        tipologia: "Farmaco",
        termine: "Antibiotici",
        categoria: "farmaci",
        rimborso: "Variabile",
        maxSpec: "N/A",
        maxGrup: "Secondo prescrizione",
        preventivoPrescrizione: "Ricetta medica",
        opt: "No",
        visitaIniziale: "Si",
        visitaFinale: "No",
        valutazioneSanitaria: "Test di sensibilità",
        sinonimi: "Antibatterici, Farmaci antinfettivi"
    },
    {
        cod: "VSD009",
        tipologia: "Visita Specialistica",
        termine: "Visita dermatologica",
        categoria: "visite",
        rimborso: "60%",
        maxSpec: "1 all'anno",
        maxGrup: "N/A",
        preventivoPrescrizione: "Richiesta",
        opt: "No",
        visitaIniziale: "Si",
        visitaFinale: "No",
        valutazioneSanitaria: "Mappatura nei",
        sinonimi: "Controllo pelle, Visita cute"
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
        'visite': 'Visite',
        'esami': 'Esami',
        'interventi': 'Interventi',
        'farmaci': 'Farmaci',
        'altre': 'Altre Prestazioni'
    };
    return labels[category] || category;
}