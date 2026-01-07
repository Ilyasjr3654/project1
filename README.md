# Application de Location de Terrains de Football ⚽

Application mobile React Native pour la location et la réservation de terrains de football au Maroc.

## Description

Cette application permet aux utilisateurs de :
- Parcourir les terrains de football disponibles
- Filtrer les terrains par taille (5x5, 7x7, 11x11)
- Consulter les détails des terrains (surface, équipements, tarifs)
- Réserver un créneau horaire
- Visualiser la disponibilité en temps réel

## Fonctionnalités

### 🏠 Écran d'accueil
- Présentation des services
- Informations sur les équipements disponibles
- Accès rapide à la liste des terrains

### 📋 Liste des terrains
- Affichage de tous les terrains disponibles
- Recherche par nom ou localisation
- Filtrage par taille de terrain
- Informations de prix et notation

### 🔍 Détails du terrain
- Informations complètes sur le terrain
- Liste des équipements (vestiaires, douches, parking, etc.)
- Créneaux horaires disponibles
- Surface et dimensions

### 📅 Réservation
- Sélection de la date
- Choix du créneau horaire
- Formulaire de contact
- Confirmation de réservation

## Terrains disponibles

L'application propose actuellement 6 terrains dans différentes villes du Maroc :
- Casablanca (Maarif, Ain Diab)
- Rabat (Agdal)
- Marrakech (Gueliz)
- Tanger (Centre-ville)
- El Jadida (Zone Industrielle)

## Technologies utilisées

- **React Native** - Framework mobile
- **TypeScript** - Typage statique
- **React Navigation** - Navigation entre écrans
- **React Native Gesture Handler** - Gestion des gestes
- **React Native Safe Area Context** - Gestion des zones sécurisées

## Installation

```bash
# Installer les dépendances
npm install

# Pour iOS (macOS uniquement)
cd ios && pod install && cd ..

# Lancer l'application
npm start

# Sur Android
npm run android

# Sur iOS
npm run ios
```

## Structure du projet

```
project1/
├── src/
│   ├── screens/          # Écrans de l'application
│   │   ├── HomeScreen.tsx
│   │   ├── FieldListScreen.tsx
│   │   ├── FieldDetailsScreen.tsx
│   │   └── BookingScreen.tsx
│   ├── types/            # Définitions TypeScript
│   │   └── index.ts
│   └── data/             # Données de l'application
│       └── footballFields.ts
├── android/              # Code natif Android
├── ios/                  # Code natif iOS
├── App.tsx              # Point d'entrée de l'application
└── index.js             # Point d'entrée React Native
```

## Développement

Cette application a été développée avec React Native 0.83.1 et utilise les dernières fonctionnalités du framework.

### Scripts disponibles

- `npm start` - Démarrer Metro bundler
- `npm run android` - Lancer sur Android
- `npm run ios` - Lancer sur iOS
- `npm test` - Exécuter les tests
- `npm run lint` - Vérifier le code

## Auteur

Développé dans le cadre d'un projet de développement mobile.

## Licence

Privé
