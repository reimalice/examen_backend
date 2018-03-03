# examen_backend
Instalando Node.js v8.x:

NOTA.- Debian Wheezy no soporta Node 8

# Para Ubuntu
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# Para Debian, instalar como root
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install -y nodejs

Instalando el proyecto

Siga los siguientes pasos:

# 1. Instalar dependencias
npm install
# 2. Crear la base de datos 
crear una base de datos en postgres 9.6 con el nombre de examen
# 3. Running Migrations
sequelize db:migrate
# 3. Iniciar el servidor del proyecto en http://localhost:4000
npm run dev