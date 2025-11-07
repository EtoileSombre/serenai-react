# SerenAI 🌿

Une application de bien-être mental propulsée par l'IA, conçue pour accompagner les utilisateurs dans leur parcours de santé mentale au quotidien.

> ⚠️ **Avertissement important** : SerenAI n'est pas un outil médical et ne remplace pas une consultation professionnelle.  
> En cas d'urgence : **15** | Écoute 24/7 : **3114**

## 📋 Description

SerenAI est une application web moderne qui propose des outils d'accompagnement pour le bien-être mental, incluant :

- 🏠 **Accueil** - Page d'accueil avec présentation de l'application
- ✅ **Check-in** - Suivi quotidien de votre état émotionnel
- 💬 **Chat** - Discussion avec une IA bienveillante
- 🧘 **Exercices** - Activités de relaxation et de méditation
- 📓 **Journal** - Espace d'écriture personnel
- 📚 **Ressources** - Documentation et liens utiles
- ⚙️ **Paramètres** - Configuration de l'application

## 🚀 Technologies

- **React 19** - Framework UI moderne
- **Vite** - Build tool ultra-rapide
- **React Router v7** - Navigation côté client
- **ESLint** - Qualité de code
- **SWC** - Compilation rapide

## 📦 Installation

### Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/EtoileSombre/serenai-react.git
cd serenai-react
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🛠️ Scripts disponibles

```bash
# Lancer en mode développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter le code
npm run lint
```

## 📁 Structure du projet

```
serenai-react/
├── public/           # Assets statiques
├── src/
│   ├── pages/       # Composants de pages
│   │   ├── Home.jsx
│   │   ├── Checking.jsx
│   │   ├── Chat.jsx
│   │   ├── Exercices.jsx
│   │   ├── Journal.jsx
│   │   ├── Resources.jsx
│   │   └── Settings.jsx
│   ├── App.jsx      # Composant principal avec navigation
│   ├── main.jsx     # Point d'entrée + configuration du router
│   ├── App.css      # Styles de l'application
│   └── index.css    # Styles globaux
├── index.html       # Template HTML
├── vite.config.js   # Configuration Vite
└── package.json     # Dépendances et scripts
```

## 🎨 Fonctionnalités à venir

- [ ] Intégration d'une API d'IA conversationnelle
- [ ] Système d'authentification utilisateur
- [ ] Base de données pour le journal personnel
- [ ] Exercices de respiration interactifs
- [ ] Statistiques et visualisation des émotions
- [ ] Mode sombre
- [ ] Progressive Web App (PWA)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**EtoileSombre**

- GitHub: [@EtoileSombre](https://github.com/EtoileSombre)

## 🙏 Remerciements

- React Team pour l'incroyable framework
- Vite pour l'expérience de développement moderne
- La communauté open source

---

*Développé avec ❤️ pour le bien-être mental*
