# Étape 1 : Build de l'application React
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
RUN npm install

# Copier le reste de l'application
COPY . .

# Générer le build de l'application React
RUN npm run build

# Étape 2 : Servir avec Caddy
FROM caddy:alpine

# Copier le build de React dans le répertoire de Caddy
COPY --from=build /app/build /usr/share/caddy

# Copier le fichier de configuration Caddy
COPY Caddyfile /etc/caddy/Caddyfile

# Exposer le port 80 pour HTTP et 443 pour HTTPS
EXPOSE 80 443

# Démarrer Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
