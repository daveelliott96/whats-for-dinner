# Setup

## Getting the VM running

If you don't already have it, install Vagrant and VirtualBox.

1. Clone the repo
2. Run `composer update`
3. Run `php vendor/bin/homestead make`
4. Try running `vagrant up` if you get an error that reads `Check your Homestead.yaml (or Homestead.json) file, the path to your private key does not exist.` you'll need to run `touch ~/.ssh/id_rsa` first
5. Update your `/etc/hosts` file with the following entry: `192.168.10.10 whatsfordinner.test`
6. Copy your `.env.example` file to `.env` and run `php artisan key:generate`

You should now be able to go to `http://whatsfordinner.test`

## Setting up the database

1. Run `mysql`
2. Run `CREATE DATABASE whats_for_dinner;` and then `exit`
3. In your VM, run `php artisan migrate` to generate the database tables

## Getting frontend assets in place

1. Run `npm install`
2. Run `npm run dev` for development. `npm run prod` for production
