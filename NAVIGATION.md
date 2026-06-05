# 🎮 LTL Creations - Site Web Guide de Navigation

## 🏗️ Architecture du Site

```
LTL Creations
│
├─ 🏠 Homepage (index.html)
│  ├─ Hero Section - Bienvenue
│  ├─ Featured Products - 6 articles vedettes
│  ├─ Why Choose Us - 3 avantages
│  └─ Newsletter Section - Inscription
│
├─ 🛒 Boutique (pages/products.html)
│  ├─ Header avec Navigation
│  ├─ Filtres par Catégorie (All, Blocks, Decor, Tools, Collectibles)
│  ├─ Grille de Produits - 8 articles
│  └─ Footer avec Liens
│
├─ 📦 Détails Produit (pages/product-detail.html)
│  ├─ Image Grande du Produit
│  ├─ Nom, Description, Prix
│  ├─ Sélection Quantité
│  ├─ Bouton "Add to Cart"
│  └─ Produits Suggérés (Related)
│
├─ 🛍️ Panier (pages/cart.html)
│  ├─ Liste des Articles
│  ├─ Modification des Quantités
│  ├─ Calcul Total (avec Taxes)
│  └─ Bouton "Checkout"
│
├─ 💳 Paiement (pages/checkout.html)
│  ├─ Formulaire Adresse de Livraison
│  ├─ Formulaire Informations Carte
│  ├─ Résumé Commande
│  └─ Bouton "Complete Order"
│
├─ ✅ Confirmation (pages/confirmation.html)
│  ├─ Message de Succès
│  ├─ Détails Commande
│  ├─ ID de Commande
│  └─ Lien Retour Accueil
│
├─ ℹ️ À Propos (pages/about.html)
│  ├─ Notre Histoire
│  ├─ Notre Mission
│  ├─ Nos Valeurs (4 pilliers)
│  └─ Pourquoi Choisir LTL
│
└─ 📧 Contact (pages/contact.html)
   ├─ Formulaire de Contact
   ├─ Infos de Contact
   ├─ Horaires d'Ouverture
   ├─ Réseaux Sociaux
   └─ FAQ (6 questions)
```

## 🔗 Navigation Entre Pages

### Depuis l'Accueil (index.html)
- `pages/products.html` - "Explore Store"
- `pages/about.html` - "Learn More"
- `pages/cart.html` - Cart Icon
- Navigation générale vers toutes les pages

### Depuis la Boutique (pages/products.html)
- `../index.html` - Logo / Home
- `product-detail.html?id=X` - Details (X = ID du produit)
- `cart.html` - Cart
- Navigation générale

### Depuis Détails Produit (pages/product-detail.html)
- `../index.html` - Logo
- `products.html` - "Continue Shopping"
- `cart.html` - Cart
- Filtrage par Catégorie dans Related Products

### Depuis le Panier (pages/cart.html)
- `../index.html` - Logo
- `products.html` - "Continue Shopping"
- `checkout.html` - "Proceed to Checkout"

### Depuis Paiement (pages/checkout.html)
- `../index.html` - Logo
- `confirmation.html` - Redirection après submit
- Validation du formulaire avant envoi

### Depuis Confirmation (pages/confirmation.html)
- `../index.html` - "Back to Home"
- Auto-redirection si pas de commande

### Depuis À Propos (pages/about.html)
- `products.html` - "Start Shopping"
- Tous les liens du footer

### Depuis Contact (pages/contact.html)
- Formulaire avec validation locale
- localStorage pour messages

---

## 📊 Flux Utilisateur (User Journey)

### Scénario 1: Nouvelle Visite
1. Arrive sur `index.html`
2. Voit les produits vedettes
3. Clique "Explore Store" → `products.html`
4. Voir tous les 8 produits
5. Clique sur un produit → `product-detail.html?id=X`
6. Ajoute au panier → notification success
7. Panier mise à jour (compteur)

### Scénario 2: Achat Complet
1. `product-detail.html` - Ajoute article
2. Clique autre produit, ajoute
3. `cart.html` - Voit 2 articles
4. `checkout.html` - Remplit adresse et carte
5. `confirmation.html` - Reçoit ID de commande

### Scénario 3: Information
1. `index.html` - Clique "Learn More"
2. `about.html` - Lit histoire
3. `contact.html` - Envoie message

---

## 🎯 Points d'Entrée Principaux

| Point d'Entrée | Description | Chemin |
|---|---|---|
| **Accueil** | Landing page, présentation | `index.html` |
| **Boutique** | Tous les produits | `pages/products.html` |
| **Produit** | Détails spécifiques | `pages/product-detail.html?id=N` |
| **Panier** | Résumé articles | `pages/cart.html` |
| **Paiement** | Commande en cours | `pages/checkout.html` |
| **Confirmation** | Commande validée | `pages/confirmation.html` |
| **Info** | Histoire de l'entreprise | `pages/about.html` |
| **Contact** | Support et FAQ | `pages/contact.html` |

---

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Stack vertical, navigation simplifiée
- **Tablet**: 480px - 768px - Grid 2 colonnes
- **Desktop**: > 768px - Grid 3+ colonnes

---

## 🎨 Zones Principales de Chaque Page

### 1️⃣ Header (Toutes les pages)
- Logo avec icône bloc
- Navigation menu (Home, Shop, About, Contact)
- Cart Icon avec compteur

### 2️⃣ Hero Section (Index, About, Contact)
- Titre accrocheur
- Sous-titre descriptif
- Fond gradient avec animation

### 3️⃣ Grille de Produits
- Grid auto-responsive
- Cartes hover effects
- Image + Nom + Description + Prix + Boutons

### 4️⃣ Footer (Toutes les pages)
- 4 colonnes d'informations
- About LTL, Shop, Support, Connect
- Copyright notice

---

## 🔄 Flux de Données (Data Flow)

```
PRODUCTS Array (script.js)
    ↓
displayProducts() → Crée les cartes
    ↓
Utilisateur clique → Navigation ou AddToCart
    ↓
cart.items (localStorage)
    ↓
Cart mise à jour → Compteur actualisé
    ↓
Checkout → Commande validée
    ↓
localStorage.ltl_last_order → Confirmation
```

---

## ✅ Checklist pour Tester le Site

- [ ] Ouvrir `index.html` fonctionne
- [ ] Navigation entre toutes les pages OK
- [ ] Ajouter articles au panier
- [ ] Modifier quantités dans le panier
- [ ] Retirer articles du panier
- [ ] Passer à la caisse complet
- [ ] Voir confirmation de commande
- [ ] Filtrer produits par catégorie
- [ ] Rechercher produit spécifique par ID
- [ ] Affichage responsive mobile/tablet/desktop
- [ ] localStorage persiste (F5 = panier inchangé)
- [ ] Contact form works
- [ ] Tous les liens fonctionnent

---

## 🚀 À Ajouter (Futures Améliorations)

- [ ] Recherche produits
- [ ] Tri (prix, nom, popularité)
- [ ] Wishlist
- [ ] Avis clients
- [ ] Code promo
- [ ] Notification d'ajout au panier visible
- [ ] Dark mode
- [ ] Internationalization (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Intégration paiement réel

---

**Site 100% Statique | HTML/CSS/JS | Fonctionne Offline | Minecraft-Inspired Design**
