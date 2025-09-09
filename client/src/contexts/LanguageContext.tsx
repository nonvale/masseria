import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.events': 'Eventi',
    'nav.rooms': 'Camere',
    'nav.services': 'Servizi',
    'nav.spa': 'Spa',
    'nav.church': 'Chiesa',
    'nav.book': 'Prenota',

    // Home Page
    'home.hero.title': 'Benvenuti alla<br />Masseria Termiteto',
    'home.hero.subtitle': 'Un\'autentica dimora storica del XVI secolo immersa tra gli ulivi secolari di Monopoli, dove il lusso incontra la tradizione pugliese',
    'home.hero.cta': 'Scopri il Lusso',
    'home.events.title': 'Eventi da Sogno',
    'home.events.subtitle': 'Matrimoni e celebrazioni indimenticabili nella nostra masseria',
    'home.events.description': 'La nostra masseria offre location uniche per matrimoni esclusivi, con la possibilità di celebrare nella nostra chiesetta consacrata e godere di panorami mozzafiato tra gli ulivi secolari.',
    'home.events.cta': 'Scopri di più',
    'home.rooms.title': 'Camere di Charme',
    'home.rooms.subtitle': 'Trulli autentici e suite di lusso per un soggiorno indimenticabile',
    'home.rooms.description': 'Le nostre eleganti sistemazioni combinano l\'autenticità dei trulli tradizionali con comfort moderni di lusso, offrendo un\'esperienza unica nel cuore della Puglia.',
    'home.rooms.cta': 'Esplora le Camere',
    'home.services.title': 'Servizi Esclusivi',
    'home.services.subtitle': 'Spa, piscine e esperienze culinarie d\'eccellenza',
    'home.services.description': 'Rilassatevi nella nostra spa di lusso, godetevi le nostre piscine panoramiche e delizie culinarie preparate con ingredienti locali d\'eccellenza.',
    'home.services.cta': 'Scopri i Servizi',

    // Events Page
    'events.hero.title': 'Eventi da Sogno',
    'events.hero.subtitle': 'Matrimoni e celebrazioni uniche nella magia della Puglia autentica',
    'events.description1': 'La Masseria Termiteto è la location perfetta per il vostro matrimonio da sogno. I nostri 50 ettari di uliveti secolari offrono scenari mozzafiato per cerimonie indimenticabili.',
    'events.description2': 'La nostra chiesetta consacrata del XVI secolo aggiunge un tocco di sacralità e storia alle vostre nozze, mentre gli spazi esterni permettono ricevimenti eleganti sotto le stelle pugliesi.',
    'events.description3': 'Ogni evento è curato nei minimi dettagli dal nostro team di esperti, che si occuperà di personalizzare ogni aspetto per rendere il vostro giorno davvero speciale.',
    'events.gallery.title': 'Galleria Eventi',
    'events.features.title': 'I Nostri Servizi per Eventi',
    'events.features.church': 'Chiesetta Consacrata',
    'events.features.church.desc': 'Cerimonie religiose nella nostra antica chiesa del XVI secolo',
    'events.features.catering': 'Catering Gourmet',
    'events.features.catering.desc': 'Cucina pugliese d\'eccellenza con ingredienti locali',
    'events.features.gardens': 'Giardini Panoramici',
    'events.features.gardens.desc': 'Spazi esterni suggestivi tra ulivi secolari',
    'events.features.accommodation': 'Sistemazioni Luxury',
    'events.features.accommodation.desc': 'Trulli e suite per ospiti in stile autentico pugliese',

    // Rooms Page
    'rooms.hero.title': 'Camere di Charme',
    'rooms.hero.subtitle': 'Trulli autentici e suite di lusso nel cuore della Puglia',
    'rooms.description1': 'Le nostre eleganti sistemazioni combinano l\'autenticità dell\'architettura pugliese con il comfort moderno di un resort di lusso.',
    'rooms.description2': 'Ogni camera è stata progettata per offrire un\'esperienza unica, con arredi raffinati che rispecchiano la tradizione locale e servizi di altissimo livello.',
    'rooms.description3': 'Godetevi la tranquillità dei nostri giardini privati e la vista mozzafiato sugli uliveti secolari che circondano la masseria.',
    'rooms.trulli.title': 'Trulli Storici',
    'rooms.trulli.desc': 'Autentiche dimore tradizionali restaurate con comfort moderni',
    'rooms.suites.title': 'Suite di Lusso',
    'rooms.suites.desc': 'Ampie suite con vista panoramica e servizi esclusivi',
    'rooms.junior.title': 'Junior Suite',
    'rooms.junior.desc': 'Eleganti spazi con terrazza privata e vista giardino',

    // Services Page
    'services.hero.title': 'Servizi Esclusivi',
    'services.hero.subtitle': 'Spa, piscine e esperienze culinarie d\'eccellenza',
    'services.spa.title': 'Centro Benessere',
    'services.spa.desc': 'Spa di lusso con trattamenti rigeneranti e massaggi rilassanti',
    'services.pool.title': 'Piscine Panoramiche',
    'services.pool.desc': 'Piscine infinity con vista mozzafiato sugli uliveti',
    'services.dining.title': 'Ristorante Gourmet',
    'services.dining.desc': 'Cucina pugliese d\'eccellenza con ingredienti locali',
    'services.activities.title': 'Attività Esclusive',
    'services.activities.desc': 'Esperienze enogastronomiche e culturali personalizzate',

    // Spa Page
    'spa.hero.title': 'Centro Benessere',
    'spa.hero.subtitle': 'Rigeneratevi nella nostra oasi di pace e benessere',
    'spa.description1': 'Il nostro centro benessere offre un\'esperienza di relax totale, con trattamenti ispirati alle tradizioni pugliesi e tecniche moderne di benessere.',
    'spa.description2': 'Immergetevi in un\'atmosfera di pura tranquillità, dove ogni dettaglio è pensato per il vostro benessere fisico e mentale.',
    'spa.treatments.title': 'I Nostri Trattamenti',
    'spa.massage': 'Massaggi Rilassanti',
    'spa.facial': 'Trattamenti Viso',
    'spa.body': 'Trattamenti Corpo',
    'spa.couples': 'Spa di Coppia',

    // Church Page
    'church.hero.title': 'Chiesetta Consacrata',
    'church.hero.subtitle': 'Un luogo sacro del XVI secolo per cerimonie indimenticabili',
    'church.description1': 'La nostra chiesetta consacrata del XVI secolo rappresenta il cuore spirituale della Masseria Termiteto.',
    'church.description2': 'Questo piccolo gioiello architettonico offre un ambiente intimo e suggestivo per celebrare matrimoni religiosi e cerimonie speciali.',
    'church.description3': 'L\'atmosfera raccolta e la bellezza dell\'antica architettura creano un\'esperienza unica e emozionante per i vostri momenti più importanti.',

    // Booking Page
    'booking.title': 'Prenota il Tuo Soggiorno',
    'booking.subtitle': 'Contattaci per vivere un\'esperienza indimenticabile',
    'booking.form.name': 'Nome e Cognome',
    'booking.form.email': 'Email',
    'booking.form.phone': 'Telefono',
    'booking.form.checkin': 'Data di Arrivo',
    'booking.form.checkout': 'Data di Partenza',
    'booking.form.guests': 'Numero di Ospiti',
    'booking.form.message': 'Messaggio',
    'booking.form.submit': 'Invia Richiesta',
    'booking.form.success': 'Richiesta inviata con successo!',

    // Footer
    'footer.contact': 'Contatti',
    'footer.address': 'Contrada Termiteto, 70043 Monopoli BA, Italia',
    'footer.phone': '+39 080 123 4567',
    'footer.email': 'info@masseriaitermiteto.com',
    'footer.follow': 'Seguici',
    'footer.rights': '© 2024 Masseria Termiteto. Tutti i diritti riservati.',
    'footer.description': 'Luxury Apulian Resort autentico del XVI secolo. Esperienza di lusso pugliese tra trulli storici, 50 ettari di bellezza mediterranea e tradizione millenaria.',
    'footer.quicklinks': 'Link Utili',
    'footer.location': 'La Nostra Posizione',
    'footer.events': 'Eventi e Matrimoni',
    'footer.rooms': 'Camere e Suite',
    'footer.spa': 'Spa & Wellness',
    'footer.church': 'Chiesa Consacrata',
    'footer.book': 'Prenota Ora',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Termini e Condizioni',

    // Home - Additional sections
    'home.experiences.title': 'Esperienze Indimenticabili',
    'home.experiences.subtitle': 'Tre dimensioni del lusso pugliese che renderanno il vostro soggiorno unico e memorabile',
    'home.feature1.title': 'Eventi Indimenticabili',
    'home.feature1.desc': 'Matrimoni di lusso e eventi esclusivi nella nostra masseria pugliese autentica. Celebrazioni uniche tra storia e tradizione, con la chiesa consacrata e spazi per 200 ospiti.',
    'home.feature2.title': 'Trulli di Lusso',
    'home.feature2.desc': 'Appartamenti di lusso nei nostri trulli autentici restaurati con cura. Suite esclusive che uniscono tradizione pugliese e comfort moderno per un soggiorno indimenticabile.',
    'home.feature3.title': 'Servizi Esclusivi',
    'home.feature3.desc': 'Spa wellness, piscine riscaldate, idromassaggio e cucina gourmet nella nostra struttura pugliese di lusso. Relax e benessere in un ambiente esclusivo e riservato.',
    'home.story.title': 'La Nostra Storia',
    'home.story.p1': 'Masseria Termiteto è una masseria pugliese autentica del XVI secolo, completamente restaurata preservando la sua architettura originale e il fascino storico.',
    'home.story.p2': 'Immersa in 50 ettari di terreno con uliveti secolari, la nostra proprietà offre un\'esperienza di lusso apuliano unica, dove tradizione e comfort moderno si incontrano perfettamente.',
    'home.story.p3': 'Dalla chiesa consacrata del XVII secolo ai trulli autentici restaurati, ogni spazio racconta la storia millenaria della Puglia in un contesto di lusso esclusivo.',

    // Additional room types
    'rooms.elisabetta.title': 'Trulli Elisabetta',
    'rooms.elisabetta.desc': 'Trulli di lusso con 4 coni tradizionali completamente ristrutturati. 117 mq di comfort esclusivo con giardino privato, orto e patio panoramico ideale per momenti di relax.',
    'rooms.michele.title': 'Trulli Michele',
    'rooms.michele.desc': 'Suite di lusso con 7 coni tradizionali e area wellness esclusiva. 160 mq con ipogeo antico, piscina privata e vista panoramica mozzafiato sui 50 ettari della proprietà.',
    'rooms.masseria.title': 'Masseria Principale',
    'rooms.masseria.desc': 'Suite esclusive nell\'edificio principale della masseria. 1.200 mq distribuiti su 2 piani con 7 suite indipendenti, ognuna con caratteristiche uniche e comfort di lusso.',
    'rooms.dependance.title': 'Dependance',
    'rooms.dependance.desc': 'Alloggi di charme nelle antiche stalle convertite e nella Torretta. Spazi intimi e caratteristici con accesso indipendente, perfetti per soggiorni esclusivi e riservati.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.events': 'Events',
    'nav.rooms': 'Rooms',
    'nav.services': 'Services',
    'nav.spa': 'Spa',
    'nav.church': 'Chapel',
    'nav.book': 'Book Now',

    // Home Page
    'home.hero.title': 'Welcome to<br />Masseria Termiteto',
    'home.hero.subtitle': 'An authentic 16th-century historic residence nestled among ancient olive groves in Monopoli, where luxury meets Apulian tradition',
    'home.hero.cta': 'Discover Luxury',
    'home.events.title': 'Dream Events',
    'home.events.subtitle': 'Unforgettable weddings and celebrations at our masseria',
    'home.events.description': 'Our masseria offers unique venues for exclusive weddings, with the possibility to celebrate in our consecrated chapel and enjoy breathtaking views among ancient olive trees.',
    'home.events.cta': 'Learn More',
    'home.rooms.title': 'Charming Accommodations',
    'home.rooms.subtitle': 'Authentic trulli and luxury suites for an unforgettable stay',
    'home.rooms.description': 'Our elegant accommodations combine the authenticity of traditional trulli with modern luxury comforts, offering a unique experience in the heart of Puglia.',
    'home.rooms.cta': 'Explore Rooms',
    'home.services.title': 'Exclusive Services',
    'home.services.subtitle': 'Spa, pools and exceptional culinary experiences',
    'home.services.description': 'Relax in our luxury spa, enjoy our panoramic pools and culinary delights prepared with excellent local ingredients.',
    'home.services.cta': 'Discover Services',

    // Events Page
    'events.hero.title': 'Dream Events',
    'events.hero.subtitle': 'Unique weddings and celebrations in the magic of authentic Puglia',
    'events.description1': 'Masseria Termiteto is the perfect location for your dream wedding. Our 50 hectares of ancient olive groves offer breathtaking scenery for unforgettable ceremonies.',
    'events.description2': 'Our 16th-century consecrated chapel adds a touch of sacredness and history to your wedding, while outdoor spaces allow elegant receptions under the Apulian stars.',
    'events.description3': 'Every event is carefully curated by our team of experts, who will personalize every aspect to make your day truly special.',
    'events.gallery.title': 'Events Gallery',
    'events.features.title': 'Our Event Services',
    'events.features.church': 'Consecrated Chapel',
    'events.features.church.desc': 'Religious ceremonies in our ancient 16th-century church',
    'events.features.catering': 'Gourmet Catering',
    'events.features.catering.desc': 'Excellent Apulian cuisine with local ingredients',
    'events.features.gardens': 'Panoramic Gardens',
    'events.features.gardens.desc': 'Charming outdoor spaces among ancient olive trees',
    'events.features.accommodation': 'Luxury Accommodations',
    'events.features.accommodation.desc': 'Trulli and suites for guests in authentic Apulian style',

    // Rooms Page
    'rooms.hero.title': 'Charming Accommodations',
    'rooms.hero.subtitle': 'Authentic trulli and luxury suites in the heart of Puglia',
    'rooms.description1': 'Our elegant accommodations combine the authenticity of Apulian architecture with the modern comfort of a luxury resort.',
    'rooms.description2': 'Each room has been designed to offer a unique experience, with refined furnishings that reflect local tradition and top-level services.',
    'rooms.description3': 'Enjoy the tranquility of our private gardens and the breathtaking view of the ancient olive groves surrounding the masseria.',
    'rooms.trulli.title': 'Historic Trulli',
    'rooms.trulli.desc': 'Authentic traditional dwellings restored with modern comforts',
    'rooms.suites.title': 'Luxury Suites',
    'rooms.suites.desc': 'Spacious suites with panoramic views and exclusive services',
    'rooms.junior.title': 'Junior Suites',
    'rooms.junior.desc': 'Elegant spaces with private terrace and garden view',

    // Services Page
    'services.hero.title': 'Exclusive Services',
    'services.hero.subtitle': 'Spa, pools and exceptional culinary experiences',
    'services.spa.title': 'Wellness Center',
    'services.spa.desc': 'Luxury spa with regenerating treatments and relaxing massages',
    'services.pool.title': 'Panoramic Pools',
    'services.pool.desc': 'Infinity pools with breathtaking views of olive groves',
    'services.dining.title': 'Gourmet Restaurant',
    'services.dining.desc': 'Excellent Apulian cuisine with local ingredients',
    'services.activities.title': 'Exclusive Activities',
    'services.activities.desc': 'Personalized food, wine and cultural experiences',

    // Spa Page
    'spa.hero.title': 'Wellness Center',
    'spa.hero.subtitle': 'Regenerate in our oasis of peace and wellness',
    'spa.description1': 'Our wellness center offers a total relaxation experience, with treatments inspired by Apulian traditions and modern wellness techniques.',
    'spa.description2': 'Immerse yourself in an atmosphere of pure tranquility, where every detail is designed for your physical and mental well-being.',
    'spa.treatments.title': 'Our Treatments',
    'spa.massage': 'Relaxing Massages',
    'spa.facial': 'Facial Treatments',
    'spa.body': 'Body Treatments',
    'spa.couples': 'Couple\'s Spa',

    // Church Page
    'church.hero.title': 'Consecrated Chapel',
    'church.hero.subtitle': 'A sacred 16th-century place for unforgettable ceremonies',
    'church.description1': 'Our 16th-century consecrated chapel represents the spiritual heart of Masseria Termiteto.',
    'church.description2': 'This small architectural jewel offers an intimate and evocative environment to celebrate religious weddings and special ceremonies.',
    'church.description3': 'The intimate atmosphere and beauty of ancient architecture create a unique and emotional experience for your most important moments.',

    // Booking Page
    'booking.title': 'Book Your Stay',
    'booking.subtitle': 'Contact us to experience an unforgettable journey',
    'booking.form.name': 'Full Name',
    'booking.form.email': 'Email',
    'booking.form.phone': 'Phone',
    'booking.form.checkin': 'Check-in Date',
    'booking.form.checkout': 'Check-out Date',
    'booking.form.guests': 'Number of Guests',
    'booking.form.message': 'Message',
    'booking.form.submit': 'Send Request',
    'booking.form.success': 'Request sent successfully!',

    // Footer
    'footer.contact': 'Contact',
    'footer.address': 'Contrada Termiteto, 70043 Monopoli BA, Italy',
    'footer.phone': '+39 080 123 4567',
    'footer.email': 'info@masseriaitermiteto.com',
    'footer.follow': 'Follow Us',
    'footer.rights': '© 2024 Masseria Termiteto. All rights reserved.',
    'footer.description': 'Authentic 16th-century Luxury Apulian Resort. Apulian luxury experience among historic trulli, 50 hectares of Mediterranean beauty and millenary tradition.',
    'footer.quicklinks': 'Quick Links',
    'footer.location': 'Our Location',
    'footer.events': 'Events & Weddings',
    'footer.rooms': 'Rooms & Suites',
    'footer.spa': 'Spa & Wellness',
    'footer.church': 'Consecrated Chapel',
    'footer.book': 'Book Now',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Terms & Conditions',

    // Home - Additional sections
    'home.experiences.title': 'Unforgettable Experiences',
    'home.experiences.subtitle': 'Three dimensions of Apulian luxury that will make your stay unique and memorable',
    'home.feature1.title': 'Unforgettable Events',
    'home.feature1.desc': 'Luxury weddings and exclusive events in our authentic Apulian masseria. Unique celebrations between history and tradition, with the consecrated church and spaces for 200 guests.',
    'home.feature2.title': 'Luxury Trulli',
    'home.feature2.desc': 'Luxury apartments in our authentic trulli carefully restored. Exclusive suites that combine Apulian tradition and modern comfort for an unforgettable stay.',
    'home.feature3.title': 'Exclusive Services',
    'home.feature3.desc': 'Wellness spa, heated pools, hot tub and gourmet cuisine in our luxury Apulian structure. Relaxation and wellness in an exclusive and private environment.',
    'home.story.title': 'Our Story',
    'home.story.p1': 'Masseria Termiteto is an authentic 16th-century Apulian masseria, completely restored while preserving its original architecture and historic charm.',
    'home.story.p2': 'Immersed in 50 hectares of land with ancient olive groves, our property offers a unique Apulian luxury experience, where tradition and modern comfort meet perfectly.',
    'home.story.p3': 'From the 17th-century consecrated church to the restored authentic trulli, every space tells the millenary history of Puglia in an exclusive luxury context.',

    // Additional room types
    'rooms.elisabetta.title': 'Trulli Elisabetta',
    'rooms.elisabetta.desc': 'Luxury trulli with 4 traditional cones completely renovated. 117 sqm of exclusive comfort with private garden, vegetable garden and panoramic patio ideal for relaxation.',
    'rooms.michele.title': 'Trulli Michele',
    'rooms.michele.desc': 'Luxury suite with 7 traditional cones and exclusive wellness area. 160 sqm with ancient hypogeum, private pool and breathtaking panoramic view over the 50 hectares of the property.',
    'rooms.masseria.title': 'Main Masseria',
    'rooms.masseria.desc': 'Exclusive suites in the main building of the masseria. 1,200 sqm distributed over 2 floors with 7 independent suites, each with unique features and luxury comforts.',
    'rooms.dependance.title': 'Dependance',
    'rooms.dependance.desc': 'Charming accommodations in the converted ancient stables and in the Tower. Intimate and characteristic spaces with independent access, perfect for exclusive and private stays.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}