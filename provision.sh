# Nodejs Setup
apt-get update
apt-get install -y nodejs
apt-get install -y npm
npm install pm2 -g
ln -s /usr/bin/nodejs /usr/bin/node
mkdir /usr/local/node_modules
mkdir /vagrant/app/node_modules
ln -sf /usr/local/node_modules /vagrant/app/node_modules

# Nginx
apt-get update
apt-get install -y nginx
cp /vagrant/provision/nginx/default.conf default

# start