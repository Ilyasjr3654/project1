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
- **Expo** - Plateforme de développement React Native
- **JavaScript** - Langage de programmation
- **React Navigation** - Navigation entre écrans
- **React Native Gesture Handler** - Gestion des gestes
- **React Native Safe Area Context** - Gestion des zones sécurisées

## Installation et Exécution

### Prérequis
- Node.js (version 20 ou supérieure)
- Expo Go app sur votre téléphone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Démarrage rapide

```bash
# Installer les dépendances
npm install --legacy-peer-deps

# Lancer le serveur de développement Expo
npm start

# Ou directement sur Android
npm run android

# Ou directement sur iOS
npm run ios

# Ou sur le web
npm run web
```

### Utiliser avec Expo Go

1. Lancez `npm start`
2. Scannez le QR code qui apparaît avec :
   - **Android** : L'application Expo Go
   - **iOS** : L'application Appareil photo (qui ouvrira Expo Go)
3. L'application se chargera sur votre téléphone !

### Commandes disponibles

- `npm start` - Démarre le serveur de développement Expo
- `npm run android` - Lance sur émulateur/appareil Android
- `npm run ios` - Lance sur simulateur/appareil iOS (macOS uniquement)
- `npm run web` - Lance dans le navigateur web
- `npm test` - Exécute les tests
- `npm run lint` - Vérifie le code

## Structure du projet

```
project1/
├── src/
│   ├── screens/          # Écrans de l'application
│   │   ├── HomeScreen.js
│   │   ├── FieldListScreen.js
│   │   ├── FieldDetailsScreen.js
│   │   └── BookingScreen.js
│   └── data/             # Données de l'application
│       └── footballFields.js
├── assets/               # Ressources (icônes, images)
├── App.js                # Point d'entrée de l'application
└── app.json              # Configuration Expo
```

## Développement

Cette application a été développée avec Expo pour faciliter le développement et le déploiement sur iOS, Android et Web.

### Pourquoi Expo ?

- **Développement rapide** : Testez instantanément sur votre téléphone avec Expo Go
- **Sans configuration native** : Pas besoin de Xcode ou Android Studio pour commencer
- **Multi-plateforme** : Fonctionne sur iOS, Android et Web
- **Mises à jour OTA** : Poussez des mises à jour sans passer par les app stores

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
