# LTL Creations - Minecraft-Inspired Ecommerce Site

Un site web transactionnel statique HTML inspiré d'Apple.com avec une palette artistique Minecraft.

## 📋 Overview

LTL Creations est un site de commerce électronique entièrement statique basé sur HTML, CSS et JavaScript vanilla. Le site fonctionne complètement offline et peut être navigué localement sur n'importe quel ordinateur.

### Caractéristiques

✅ **Design Apple-Inspired** - Interface épurée, minimaliste avec typographie soignée
✅ **Palette Minecraft** - Couleurs verte inspirées de Minecraft avec blocks pixelisés
✅ **Complètement Statique** - HTML/CSS/JavaScript vanilla, zéro dépendances externes
✅ **Navigation Locale** - Tous les chemins sont relatifs, fonctionne sur file://
✅ **Panier Persistant** - Gestion du panier avec localStorage
✅ **Responsive Design** - Adaptation mobile, tablette et desktop
✅ **8 Produits** - Catalogue préconfigurée avec 8 articles Minecraft-inspired

## 🗂️ Structure du Projet

```
site/
├── index.html                 # Page d'accueil
├── css/
│   └── styles.css            # Feuille de style principale
├── js/
│   └── script.js             # JavaScript pour interactivité
├── pages/
│   ├── products.html         # Catalogue de produits
│   ├── product-detail.html   # Détails d'un produit
│   ├── cart.html             # Panier
│   ├── checkout.html         # Paiement
│   ├── confirmation.html     # Confirmation commande
│   ├── about.html            # À propos
│   └── contact.html          # Formulaire de contact
└── assets/                   # Répertoire pour images/ressources
```

## 🚀 Comment Utiliser

### Option 1: Ouverture Directe
```bash
# Ouvrez index.html dans votre navigateur
1. Naviguez vers: d:\Applfich\projects-2026\ltl\site\
2. Double-cliquez sur index.html
3. Le site s'ouvrira et fonctionnera complètement offline
```

### Option 2: Serveur Local (Optionnel)
```bash
# Si vous utilisez Python 3
cd d:\Applfich\projects-2026\ltl\site
python -m http.server 8000

# Puis ouvrez: http://localhost:8000

# Avec Node.js et http-server
npx http-server
```

## 📱 Pages Disponibles

| Page | Description | URL |
|------|-------------|-----|
| **Accueil** | Page d'accueil avec produits vedettes | `index.html` |
| **Boutique** | Catalogue complet avec filtrage | `pages/products.html` |
| **Détails Produit** | Détails d'un article spécifique | `pages/product-detail.html?id=1` |
| **Panier** | Affichage et gestion du panier | `pages/cart.html` |
| **Paiement** | Formulaire de commande | `pages/checkout.html` |
| **Confirmation** | Confirmation de la commande | `pages/confirmation.html` |
| **À Propos** | Histoire et valeurs de l'entreprise | `pages/about.html` |
| **Contact** | Formulaire de contact et FAQ | `pages/contact.html` |

## 🎨 Palette Couleur (Minecraft + Apple)

```
Minecraft Green:
--mc-grass:       #5cb85c (vert principal)
--mc-grass-light: #7ed321 (vert clair)
--mc-leaves:      #48b518 (feuillage)
--mc-stone:       #727272 (pierre)

Apple Neutrals:
--apple-white:     #ffffff
--apple-gray:      #e5e5e7
--apple-dark-gray: #6e6e73
--apple-black:     #1d1d1f
```

## ✨ Fonctionnalités Principales

### 🛒 Gestion du Panier
- Ajouter/retirer des articles
- Modifier les quantités
- Persistance avec localStorage
- Compteur en temps réel

### 🔍 Filtrage des Produits
- Par catégorie: Blocks, Decor, Tools, Collectibles
- Mise à jour dynamique de la grille

### 💳 Processus d'Achat
1. Ajouter produits au panier
2. Consulter le panier
3. Passer à la caisse
4. Remplir infos de livraison
5. Confirmation de commande

### 📧 Formulaires
- Formulaire de contact avec validation
- Formulaire de paiement (simulation)
- Tous les données sauvegardées localement

## 🌐 Produits Préchargés

1. **Crafted Emerald** - $29.99 💚
2. **Grass Block** - $19.99 🟩
3. **Diamond Pickaxe** - $49.99 ⛏️
4. **OAK Log** - $14.99 🪵
5. **Stone Brick** - $16.99 ◼️
6. **Glowstone Light** - $34.99 ✨
7. **Creeper Head** - $39.99 👾
8. **Nether Portal** - $59.99 🟪

## 💾 Stockage Local (localStorage)

Le site utilise localStorage pour persister:

```javascript
ltl_cart          // Panier actuel
ltl_last_order    // Dernière commande
ltl_messages      // Messages de contact
```

Accédez via DevTools: F12 → Application → Local Storage

## 📦 Dépendances

✅ **Aucune dépendance externe!**

- HTML5 natif
- CSS3 natif
- JavaScript vanilla (ES6+)
- Pas de frameworks
- Pas de CDN

## 🔧 Personnalisation

### Ajouter un Produit
Modifiez le tableau `PRODUCTS` dans `js/script.js`:

```javascript
{
  id: 9,
  name: 'My Product',
  price: 99.99,
  description: 'Description',
  image: '🟩',
  category: 'block'
}
```

### Modifier les Couleurs
Changez les variables CSS dans `css/styles.css`:

```css
:root {
  --mc-grass: #5cb85c;
  --apple-white: #ffffff;
}
```

### Ajouter une Page
1. Créez un nouveau fichier `.html` dans `pages/`
2. Utilisez la même structure header/footer
3. Importez `styles.css` et `script.js`

## 🌟 Design Highlights

✨ **Animations**
- Hover effects sur les cartes
- Float animation du hero background
- Notifications de notification smoothe

✨ **Responsive**
- Mobile: < 480px
- Tablet: < 768px  
- Desktop: 768px+

✨ **Accessibilité**
- Sémantique HTML5
- Contraste de couleur WCAG AA
- Navigation au clavier
- Labels pour tous les inputs

## 📝 Convention de Code

- Noms en camelCase pour JavaScript
- Classes CSS en kebab-case
- Structure HTML sémantique
- Commentaires pour sections principales
- Chemins relatifs partout

## 🐛 Dépannage

**Le site ne charge pas?**
- Vérifiez les chemins relatifs
- Utilisez une barre d'adresse file:// complète
- Essayez un serveur HTTP local

**Le panier ne se sauvegarde pas?**
- Vérifiez que localStorage est activé
- Mode privé/incognito peut désactiver localStorage
- Consultez DevTools → Application

**Les images n'affichent pas?**
- Le site utilise des emojis, pas d'images
- Les emojis ne dépendent pas de fichiers externes

## 📄 Constitution du Projet

La constitution du projet est documentée dans `.specify/memory/constitution.md` et définie les principes:
- Static HTML-First Architecture
- Apple-Inspired Design Philosophy
- Minecraft Aesthetic Integration
- User Experience & Navigation
- Local Navigation & Portability

## 👥 Support

Pour les questions ou suggestions, consultez la page Contact du site ou modifiez ce README.

---

**Créé en 2026** | LTL Creations | Minecraft-Inspired Premium Merchandise
