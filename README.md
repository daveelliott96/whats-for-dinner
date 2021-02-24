1. Clone the repo
2. Run `composer update`
3. Run `php vendor/bin/homestead make`
4. Try running `vagrant up` if you get an error that reads `Check your Homestead.yaml (or Homestead.json) file, the path to your private key does not exist.` you'll need to run `touch ~/.ssh/id_rsa` first
5. Update your `/etc/hosts` file with the following entry: `192.168.10.10 whatsfordinner.test`
6. Copy your `.env.example` file to `.env` and run `php artisan key:generate`

You should now be able to go to `http://whatsfordinner.test`
