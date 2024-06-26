const fs = require('fs');
const path = require('path');

// Fonction pour charger toutes les routes depuis les dossiers des éléments
const loadRoutes = (app, elementsDir) => {
    fs.readdirSync(elementsDir).forEach(element => {
        const elementPath = path.join(elementsDir, element);

        // Vérifier si c'est un dossier
        if (fs.lstatSync(elementPath).isDirectory()) {
            const routesDir = path.join(elementPath, 'routes');

            // Vérifier si le dossier routes existe
            if (fs.existsSync(routesDir) && fs.lstatSync(routesDir).isDirectory()) {
                fs.readdirSync(routesDir).forEach(file => {
                    // Obtenir le chemin complet du fichier
                    const filePath = path.join(routesDir, file);

                    // Vérifier si le fichier est un fichier JS
                    if (file.endsWith('.js')) {
                        // Importer la route
                        const route = require(filePath);

                        // Déterminer le chemin de base pour la route
                        const routePath = `/api/v1/${element}`;

                        // Ajouter la route à l'application
                        app.use(routePath, route);
                    }
                });
            }
        }
    });
};

module.exports = loadRoutes;