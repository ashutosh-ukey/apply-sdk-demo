# Fetch Git submodule code
git submodule init
git submodule update

# Install dependenices
cd circle-nodejs-sdk

yarn install
yarn run build
npm link

cd ..
cd demo-scripts

yarn install
npm link circle-nodejs-sdk
