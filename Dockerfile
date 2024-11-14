# Installer une version spécifique de Node.js (par exemple v18)
FROM node:18

# Créer le répertoire de travail et installer les dépendances
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN yarn install

# Copier le reste de l'application
COPY . .

# Construire l'application
RUN yarn build

# Exposer le port 3000
EXPOSE 3000

# Démarrer le serveur
CMD ["yarn", "run", "start"]
