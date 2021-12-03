#!/bin/sh
WORKDIR=`pwd`
echo "Root directory setup..."
yarn install
cd $WORKDIR/api
echo "Api directory setup..."
yarn install
cd $WORKDIR/users
echo "User directory setup..."
yarn install
cd $WORKDIR/profiles
echo "Prodiles directory setup..."
yarn install
cd $WORKDIR/customers
echo "Customers directory setup..."
yarn install