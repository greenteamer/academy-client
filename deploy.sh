#!/bin/bash
APP_DIR=$(dirname $(readlink -f $0))
ENV_DIR=$(dirname $APP_DIR)

nvm use
yarn
npx prisma db pull
npx prisma generate
yarn build
pm2 restart nextjs
