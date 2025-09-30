cd /home/blaze/GENERAL/gamble/SvelteKit
npm run build
cd /home/blaze/GENERAL/gamble/
cp -r SvelteKit/build frontendBuild/
pm2 restart gamble-front