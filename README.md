# Site de présentation Outbreed

Ce dépôt contient le site statique de présentation d’Outbreed. Il fonctionne sans framework, sans installation et sans service externe.

## Consulter le site

Ouvrir directement `index.html` dans un navigateur suffit. Pour reproduire le comportement d’un hébergement statique, lancer un serveur HTTP depuis la racine du dépôt, par exemple :

```powershell
python -m http.server 8080
```

Le site est alors disponible à l’adresse `http://localhost:8080`.

## Ajouter les animations

Déposer les GIF dans `assets/media` en conservant les noms attendus :

- `outbreeder-z.gif`
- `outbreeder-f.gif`
- `outbreeder-m.gif`
- `outbreeder-x.gif`
- `feraklith.gif`
- `mykanox.gif`
- `skarnouk.gif`
- `synalume.gif`
- `virex.gif`
- `zephalite.gif`

Chaque animation apparaît automatiquement à la place de son visuel d’attente. Les GIF doivent idéalement avoir un fond transparent, être recadrés au plus près du personnage et conserver le rendu pixel art.

## Structure

- `index.html` contient le contenu et la structure sémantique de la page.
- `styles.css` contient toute la direction visuelle et les adaptations mobiles.
- `script.js` gère la navigation mobile, l’apparition progressive des sections et le chargement facultatif des GIF.
- `assets/media` accueille les images et animations du jeu.

## Publication

Le site peut être publié directement avec GitHub Pages depuis la branche `main` et la racine du dépôt. Aucun processus de compilation n’est nécessaire.
