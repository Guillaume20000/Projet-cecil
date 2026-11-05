# Maison Aube — boutique déco avec Cecil

Modèle de boutique en ligne de décoration, réalisé avec [Cecil](https://cecil.app). Le projet personnalise les pages par défaut pour présenter une marque, une sélection de produits, ses engagements et ses informations pratiques.

Le panier est une démonstration côté navigateur : il ne collecte pas de paiement et ne transmet aucune commande.

## Prévisualiser le site

PHP 8.3 ou une version ultérieure est requis. Téléchargez Cecil dans le dossier du projet :

```powershell
curl.exe -L https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar -o cecil.phar
php .\cecil.phar serve
```

Le site est disponible sur <http://localhost:8000>.

## Générer le site

```powershell
php .\cecil.phar build
```

Les fichiers statiques sont générés dans `_site/`. Le nom de domaine de production est défini dans `cecil.yml` (`baseurl`).

## Structure

- `cecil.yml` : identité, langue et URL du site
- `pages/` : pages de contenu en Markdown
- `layouts/_default/` : modèles Twig personnalisés (accueil, page et erreur 404)
- `assets/css/` et `assets/js/` : styles et interactions du panier de démonstration

Les photographies de démonstration sont servies par Unsplash. Remplacez-les par vos propres images avant une mise en production commerciale.
