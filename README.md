PMT Kanban
==========

Standalone Kanban board

## Contributing

> All code contributions - including those of people having commit access - must
> go through a pull request and approved by a core developer before being
> merged. This is to ensure proper review of all the code.
>
> Fork the project, create a feature branch, and send us a pull request.
>
> To ensure a consistent code base, you should make sure the code follows
> the [Coding Standards](http://symfony.com/doc/2.0/contributing/code/standards.html)
> which we borrowed from Symfony.
> Make sure to check out [php-cs-fixer](https://github.com/fabpot/PHP-CS-Fixer) as this will help you a lot.

If you would like to help take a look at the [list of issues](http://github.com/NoUseFreak/PMT_Kanban/issues).

## Requirements

PHP 5.3.2 or above

## Installation

1. Clone the repository
2. Install dependencies: `php composer.phar install`
3. Run `app/console doctrine:schema:create` to setup the DB.
4. Run `app/console assets:install web` to deploy the assets on the web dir.
5. Make a VirtualHost with DocumentRoot pointing to web/

## Author and contributors

Dries De Peuter - <dries@nousefreak.be> - <http://nousefreak.be>

See also the list of [contributors](https://github.com/NoUseFreak/PMT_Kanban/contributors) who participated in this project.

## License

PMT_Kanban is licensed under the MIT license.
