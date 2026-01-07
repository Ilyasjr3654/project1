# Guide de Démarrage Rapide - Expo Go

## Installation de l'application sur votre téléphone

### Étape 1 : Installer Expo Go

Téléchargez l'application Expo Go sur votre téléphone :

- **Android** : [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS** : [App Store](https://apps.apple.com/app/expo-go/id982107779)

### Étape 2 : Installer les dépendances

Sur votre ordinateur, dans le dossier du projet :

```bash
npm install --legacy-peer-deps
```

### Étape 3 : Lancer le serveur de développement

```bash
npm start
```

Un QR code apparaîtra dans votre terminal et dans le navigateur.

### Étape 4 : Scanner le QR code

#### Sur Android :
1. Ouvrez l'application **Expo Go**
2. Appuyez sur **"Scan QR Code"**
3. Scannez le QR code affiché

#### Sur iOS :
1. Ouvrez l'application **Appareil photo**
2. Pointez vers le QR code
3. Une notification apparaîtra pour ouvrir dans Expo Go
4. Appuyez sur la notification

### Étape 5 : Profitez de l'application !

L'application se chargera sur votre téléphone. Vous pouvez maintenant :
- Parcourir les terrains de football disponibles
- Rechercher et filtrer par taille (5x5, 7x7, 11x11)
- Consulter les détails des terrains
- Faire une réservation

## Développement en direct

Toute modification du code sera automatiquement rechargée sur votre téléphone !

## Commandes utiles

- `npm start` - Démarre le serveur Expo
- `npm run android` - Lance sur émulateur Android
- `npm run ios` - Lance sur simulateur iOS (macOS uniquement)
- `npm run web` - Lance dans le navigateur
- `npm test` - Exécute les tests
- `npm run lint` - Vérifie le code

## Dépannage

### Le QR code ne fonctionne pas ?

- Assurez-vous que votre téléphone et votre ordinateur sont sur le même réseau Wi-Fi
- Essayez le mode **Tunnel** dans les options Expo (appuyez sur 's' puis 't')

### L'application ne se charge pas ?

- Vérifiez que toutes les dépendances sont installées
- Redémarrez le serveur Expo (Ctrl+C puis `npm start`)
- Effacez le cache : `npm start --clear`

### Erreur de dépendances ?

Utilisez toujours `--legacy-peer-deps` lors de l'installation :
```bash
npm install --legacy-peer-deps
```

## Besoin d'aide ?

Consultez la [documentation Expo](https://docs.expo.dev/) pour plus d'informations.
