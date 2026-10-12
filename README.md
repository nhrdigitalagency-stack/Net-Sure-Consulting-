# Net Sure Consulting — Site Vitrine & Plateforme

Site officiel de l'ESN parisienne **Net Sure Consulting** (40 rue Damrémont, 75018 Paris).
Conçu avec une direction artistique sobre et éditoriale (typographie Poppins, noir/blanc/gris, accent vert profond), bilinguisme français/anglais dynamique, bascule thème clair/sombre, navigation en 11 sections ouvertes et interactions directes sans artifice.

---

## 1. Modifier les Textes & Traductions

Tous les contenus éditoriaux sont centralisés dans le répertoire `src/i18n/` :
- **Français** : `src/i18n/fr.json`
- **Anglais** : `src/i18n/en.json`

Aucun texte n'est codé en dur dans les composants. Pour modifier un titre ou une description :
1. Ouvrez `src/i18n/fr.json` (et `src/i18n/en.json` pour la version anglaise).
2. Modifiez la clé correspondante (ex. `"hero.title"`, `"pricing.cards.visibilite.desc"`).
3. L'application met à jour automatiquement l'affichage et synchronise la balise `<html lang>`.

---

## 2. Modifier les Tarifs & Prestations

Les forfaits et prix HT sont configurés dans `src/i18n/fr.json` et `src/i18n/en.json` sous la clé `"pricing.cards"` :
- `visibilite` : Pack Visibilité (399 € HT / an)
- `seoPremium` : Pack SEO Premium (649 € HT / an)
- `visibilitePremium` : Pack Visibilité Premium (4 200 € HT sur devis)
- `designPro` : Pack Design Pro (890 € HT)
- `siteVitrine` : Création site vitrine (499 € HT)
- `siteEcommerce` : Création site e-commerce (1 499 € HT)

Les options du menu déroulant du formulaire de contact se trouvent dans `src/frames/ContactFrame.tsx` (`offerOptions`).

---

## 3. Modifier la Palette de Couleurs & Accents

Les variables de thème sont définies dans `src/index.css` :
```css
:root {
  --accent-forest: #144A32;       /* Vert profond en mode clair */
  --accent-forest-hover: #0E3624;
  --bg-page: #FFFFFF;
  --border-line: #E5E7EB;
}

.dark {
  --accent-forest: #22C55E;       /* Émeraude lumineux en mode sombre */
  --accent-forest-hover: #16A34A;
  --bg-page: #090A0B;
  --border-line: #20242C;
}
```
Pour adopter un autre accent (ex. brique terracotta), remplacez `#144A32` par la couleur de votre choix dans `src/index.css` et dans les classes Tailwind correspondantes (`#144A32` / `#22C55E`).

---

## 4. Coordonnées & Traçabilité

- **Adresse** : 40 rue Damrémont, 75018 Paris
- **Email officiel** : `contact@cnetsure.com`
- **SIRET** : 944 590 371 (RCS Paris)
- **Engagement de réponse** : Sous 24 h ouvrées par écrit.
