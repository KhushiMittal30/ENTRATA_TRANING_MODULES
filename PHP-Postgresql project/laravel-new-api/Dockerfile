FROM php:8.1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

# set working directory
WORKDIR /var/www/html

COPY . .

# Set permissions and change owner for Laravel storage and cache directories
RUN chown -R www-data::www-data /var/www/html/storage/ /var/www/html/bootstrap/cache/

#process to run when container starts - run database migrations and start the Laravel development server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]