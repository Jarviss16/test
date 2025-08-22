// Dizionario dei termini sanitari con informazioni di rimborso
const dizionarioSanitario = [
    {
        termine: "Visita cardiologica",
        categoria: "visite",
        descrizione: "Visita specialistica con un cardiologo per valutare la salute del cuore.",
        copertura: "NHS",
        rimborso: "70%",
        note: "Richiesta impegnativa del medico di base"
    },
    {
        termine: "Risonanza magnetica",
        categoria: "esami",
        descrizione: "Esame di imaging che utilizza campi magnetici per visualizzare strutture interne del corpo.",
        copertura: "Parziale",
        rimborso: "60%",
        note: "Solo per casi specifici con autorizzazione"
    },
    {
        termine: "Ecografia addominale",
        categoria: "esami",
        descrizione: "Esame ecografico per visualizzare gli organi interni dell'addome.",
        copertura: "Completa",
        rimborso: "100%",
        note: ""
    },
    {
        termine: "Appendicectomia",
        categoria: "interventi",
        descrizione: "Intervento chirurgico per rimuovere l'appendice infiammata.",
        copertura: "Completa",
        rimborso: "100%",
        note: "Solo in regime di urgenza"
    },
    {
        termine: "Insulina",
        categoria: "farmaci",
        descrizione: "Farmaco per il trattamento del diabete.",
        copertura: "Completa",
        rimborso: "100%",
        note: "Per pazienti diabetici con ricetta medica"
    },
    {
        termine: "Visita oculistica",
        categoria: "visite",
        descrizione: "Visita specialistica per valutare la salute degli occhi e la vista.",
        copertura: "Parziale",
        rimborso: "50%",
        note: "Rimborso annuale limitato"
    },
    {
        termine: "Analisi del sangue",
        categoria: "esami",
        descrizione: "Esame di laboratorio per analizzare i componenti del sangue.",
        copertura: "Completa",
        rimborso: "100%",
        note: "Massimo 2 serie all'anno a carico SSN"
    },
    {
        termine: "Artroscopia ginocchio",
        categoria: "interventi",
        descrizione: "Intervento mini-invasivo per diagnosticare e trattare problemi articolari.",
        copertura: "Parziale",
        rimborso: "80%",
        note: "Richiesta autorizzazione ASL"
    },
    {
        termine: "Antibiotici",
        categoria: "farmaci",
        descrizione: "Farmaci per il trattamento di infezioni batteriche.",
        copertura: "Variabile",
        rimborso: "50-100%",
        note: "A seconda della tipologia e della patologia"
    },
    {
        termine: "Visita dermatologica",
        categoria: "visite",
        descrizione: "Visita specialistica per problemi della pelle, capelli e unghie.",
        copertura: "Parziale",
        rimborso: "60%",
        note: "Ticket regionale variabile"
    },
    {
        termine: "TAC",
        categoria: "esami",
        descrizione: "Tomografia Assiale Computerizzata, esame radiologico dettagliato.",
        copertura: "Parziale",
        rimborso: "70%",
        note: "Solo con prescrizione medica"
    },
    {
        termine: "Chemioterapia",
        categoria: "farmaci",
        descrizione: "Trattamento farmacologico per malattie tumorali.",
        copertura: "Completa",
        rimborso: "100%",
        note: "Per pazienti oncologici"
    },
    {
        termine: "Visita ginecologica",
        categoria: "visite",
        descrizione: "Visita specialistica per la salute dell'apparato riproduttivo femminile.",
        copertura: "Completa",
        rimborso: "100%",
        note: "Annualmente per le donne over 25"
    },
    {
        termine: "Mammografia",
        categoria: "esami",
        descrizione: "Esame radiologico per lo screening del tumore al seno.",
        copertura: "Completa",
        rimborso: "100%",
        note: "Annualmente per le donne over 45"
    },
    {
        termine: "Intervento di cataratta",
        categoria: "interventi",
        descrizione: "Intervento chirurgico per rimuovere la cataratta dall'occhio.",
        copertura: "Completa",
        rimborso: "100%",
        note: "Per pazienti over 65 con diagnosi confermata"
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
    
    // Filtra per termine di ricerca
    if (currentSearchTerm) {
        filteredTerms = filteredTerms.filter(term => 
            term.termine.toLowerCase().includes(currentSearchTerm) ||
            term.descrizione.toLowerCase().includes(currentSearchTerm) ||
            term.note.toLowerCase().includes(currentSearchTerm)
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
            if (!search) return text;
            const regex = new RegExp(`(${search})`, 'gi');
            return text.replace(regex, '<span class="highlight">$1</span>');
        };
        
        termCard.innerHTML = `
            <h3 class="term-name">${highlightText(term.termine, currentSearchTerm)}</h3>
            <p class="term-detail"><span class="detail-label">Descrizione:</span> ${highlightText(term.descrizione, currentSearchTerm)}</p>
            <p class="term-detail"><span class="detail-label">Categoria:</span> ${getCategoryLabel(term.categoria)}</p>
            <p class="term-detail"><span class="detail-label">Copertura:</span> ${term.copertura}</p>
            <p class="term-detail"><span class="detail-label">Rimborso:</span> ${term.rimborso}</p>
            ${term.note ? `<p class="term-detail"><span class="detail-label">Note:</span> ${highlightText(term.note, currentSearchTerm)}</p>` : ''}
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