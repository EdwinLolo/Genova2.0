# Genova2.0

# Setup:

1.  `cd ./laravel-react`
2.  run `composer install`,`bun install`
3.  Setup the database first (.env)
4.  generate laravel key ( run `php artisan key:generate` )
5.  run `php artisan migrate` ( run seeder if needed `php artisan db:seed LombaSeeder` )
6.  run `php artisan storage:link` for storage link laravel
7.  run the web:

```php
php artisan serve
```

```php
bun dev
```

## If there is errors:

**# Env variable returns null**

- run the command

```php
php artisan cache:clear
php artisan view:clear
php artisan config:cache
php artisan optimize:clear
```
