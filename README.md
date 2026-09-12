# Studio Rhôdanien - Structure du Site

## 📋 Vue d'ensemble

Ceci est la structure complète du site **Studio Rhôdanien** — une agence web design hand-coded pour TPE et PME en France.

Le site est 100% hand-coded en HTML/CSS/JS vanilla, sans frameworks ni dépendances. Structure modulaire et facile à modifier.

## 📁 Architecture

```
studio-rhodanien/
├── index.html                    # Homepage
├── portfolio.html                # Galerie des projets
├── portfolio-detail.html         # Template pour un projet (à dupliquer)
├── process.html                  # Notre processus
├── contact.html                  # Formulaire de contact
├── tarifs.html                   # Page tarifs (vierge)
├── blog.html                     # Blog (vierge)
├── shop.html                     # Shop (vierge)
├── mentions-legales.html         # Mentions légales
├── cgu.html                      # Conditions générales d'utilisation
├── css/
│   └── style.css                 # CSS complet avec variables et composants
├── js/
│   └── script.js                 # JavaScript pour interactions basiques
└── README.md                     # Ce fichier
```

## 🎨 Palette de couleurs

- **Bordeaux**: `#4B0F1E` (couleur principale)
- **Or**: `#C98C49` (accents, CTA, bordures)
- **Teal**: `#0A575D` (accents secondaires)
- **Crème clair**: `#FCF8F2` (arrière-plan)
- **Crème foncé**: `#F2E3D0` (cartes, sections)
- **Gris**: `#8a7d76` (texte secondaire)

## 🔤 Typographie

- **Serif**: Playfair Display (titres)
- **Sans-serif**: Montserrat (corps, navigation)
- **Mono**: IBM Plex Mono (code, détails techniques)

Les fonts sont chargées via Google Fonts.

## 🚀 À remplir avant lancement

### 1. **Contact & Infos**
Remplacer tous les `[placeholder]` par vos vraies infos:
- Email
- Téléphone
- Adresse
- Liens réseaux (Instagram, LinkedIn, GitHub)

### 2. **Portfolio**
- Remplacer les images placeholder par vos vrais projets
- Dupliquer `portfolio-detail.html` pour chaque projet
- Remplir les avant/après, avis clients, impacts

### 3. **Pages légales**
Compléter:
- `mentions-legales.html` (nom entreprise, statut juridique, etc.)
- `cgu.html` (conditions de paiement, délais, maintenance)

### 4. **Pages vierges**
Quand vous êtes prêt:
- `tarifs.html` → Ajouter vos packages de prix
- `blog.html` → Ajouter vos articles
- `shop.html` → Ajouter templates/formations

## 🔧 Comment modifier

### Ajouter une page
1. Créer un nouveau fichier `.html`
2. Copier le header/footer d'une page existante
3. Ajouter le contenu
4. Ajouter le lien dans la navigation (tous les fichiers)

### Ajouter un projet au portfolio
1. Dupliquer `portfolio-detail.html`
2. Renommer `portfolio-detail-[nom-projet].html`
3. Remplir les sections
4. Ajouter le lien dans `portfolio.html`

### Modifier les couleurs
Éditer les variables dans `css/style.css`:
```css
:root {
  --color-bordeaux: #4B0F1E;
  --color-gold: #C98C49;
  /* etc. */
}
```

## 📱 Responsive

Le site est **100% responsive** pour:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

Testé et optimisé pour tous les écrans.

## ⚡ Performance

- Pas de dépendances externes (sauf Google Fonts)
- Code CSS/JS minimaliste
- Images optimisées
- SEO-friendly (HTML sémantique)

## 📝 Fonctionnalités

### Composants inclus
- Navigation sticky
- Hero sections
- Grid responsive (2, 3, 4 colonnes)
- Cards avec hover
- Portfolio items avec overlay
- Buttons (primary, secondary)
- Forms (validations basiques en JS)
- Testimonials
- Footer complet
- CTA sections

### Interactions JavaScript
- Validation formulaires
- Smooth scroll
- Animation au scroll (fade-in)
- Navigation active state
- Filtres portfolio (à implémenter)

## 🔐 Sécurité

- Pas de données sensibles en dur
- Formulaires avec validation côté client
- Prêt pour intégration backend (EmailJS, Netlify Forms, etc.)

## 📤 Déploiement

### Sur Netlify
1. Connecter le repo GitHub
2. Branch: `main`
3. Build command: (vide, c'est du static)
4. Publish directory: `/`
5. Déploiement automatique

### Sur votre serveur
1. Upload les fichiers via FTP/SFTP
2. Vérifier que les chemins CSS/JS sont corrects
3. Tester sur mobile

## 🔗 Intégrations à ajouter

### Formulaire de contact
Options:
- **Netlify Forms** (le plus simple)
- **EmailJS** (pas de backend nécessaire)
- **Formspree** (gratuit + emails)
- **Backend custom** (Node.js, PHP, etc.)

### Analytics
- Google Analytics (déjà configuré dans `script.js`)
- Plausible Analytics (alternative privacy-friendly)

### SEO
- Vérifier les `<title>` et `<meta description>` sur chaque page
- Google Search Console
- XML sitemap (à générer)

## 📚 Documentation utile

- [MDN - HTML](https://developer.mozilla.org/fr/docs/Web/HTML)
- [MDN - CSS Grid](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Variables](https://developer.mozilla.org/fr/docs/Web/CSS/--*)
- [Google Fonts](https://fonts.google.com/)

## ✏️ À faire

- [ ] Remplacer tous les `[placeholder]` par vos vraies infos
- [ ] Ajouter votre logo en haut
- [ ] Remplir le portfolio avec vos projets
- [ ] Configurer le formulaire de contact
- [ ] Ajouter Google Analytics / SEO
- [ ] Compléter les pages légales
- [ ] Tester sur mobile
- [ ] Lancer !

## 💡 Tips

1. **Garde la structure modulaire** — ça rend les mises à jour faciles
2. **Teste sur mobile en priorité** — majorité du trafic vient du mobile
3. **Optimise les images** — utilisez TinyPNG ou similar
4. **Ajoute du contenu régulièrement** — blog, portfolio, social proof
5. **Mesure les conversions** — Google Analytics + pixel de conversion

## 🤝 Support

Pour toute question, consultez:
- Ce README
- Le code commenté
- Les ressources MDN

Bon courage ! 🚀
