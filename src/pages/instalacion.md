# Guia de instalación del entorno de desarrollo

Aqui se encontrara una guia para instalar el entorno de desarrollo de laravel para poder comenzar a trabajar.

## Clonar repositorio

Primero debes acceder al [repositorio remoto](https://github.com/Lauty128/PEMS) y copiar la url del codigo, dando en el boton verde que dice *code*.

Luego debes ir a la carpeta donde quieres clonar el repositorio y abres la terminal en esa direccion.  
Una vez en la terminal, y en la carpeta de interes, debes colocar el siguiente comando:

```bash
git clone <url_del_codigo>
```

> Las flechas `<>` no deben ir en el comando

## Instalar dependencias

Para instalar las dependencias del pryecto debes abrir la terminal en la carpeta del repositorio e instalar las dependencias de composer con el siguiente comando:

```bash
composer install
```

## Configurar archivo .env

Debes crear un archivo .env y pegar lo siguiente

```txt
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:GnJkwzyfiH6eOml7zr9d//l4exZ6NC1YCvgFxZyqJls=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<db-name>
DB_USERNAME=<db-user>
DB_PASSWORD=<db-password>

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=d299ebe2366ef1
MAIL_PASSWORD=e5577873fd012a
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=mt1

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

Debes cambiar los siguientes campos con los datos correspondientes:

* `<db-name>`: Nombre de la base de datos
* `<db-user>`: Usuario que tiene acceso a la base de datos
* `<db-password>`: Contraseña de usuario

:::note
La base de datos debe estar creada, en mysql o el sistema de bases de datos que utilices, para que las migraciones funcionen correctamente
:::

### Configurar sistema de mails

Para configurar el sistema de mail y poder realizar los testeos correspondientes deberas incluir los datos del servidor SMTP en las configruaciones. Para eso debes acceder al canal privado de discord o a la carpeta privada del drive y reemplazar las configuraciones del mail por las correspondientes

:::note
Solo es necesario este paso si vas a realizar pruebas con envio de mails. Si este paso se saltea la aplicacion funcionara igual.
:::

## Agregar las tablas a la base de datos

Para estructurar la base de datos debes abrir nuevamente la terminal en la carpeta del repositorio y ejecutar el siguiente comando:

```bash
php artisan migrate
```

Si ya tienes una base de datos cargada con tablas de un version anterior, utiliza este comando para limpiar la base de datos y volver a cargarla

```bash
php artisan migrate:fresh
```

Con esto ya tendrás la base de datos configurada y lista para trabajar.

## Cargar datos de prueba a las tablas

Si quieres cargar datos de prueba, los cuales ya están configurados para cargar, debes ejecutar el siguiente comando:

```bash
php artisan db:seed
```

Puedes revisar la sección [datos de prueba](/docs/datos-de-prueba) para poder acceder al sistema con los usuarios cargados desde los seeders.

## Configurar storage

Para configurar el sistema de almacenamiento de laravel deberas ejecutar el siguiente comando.

```bash
php artisan storage:link
```

Con este comando laravel creara un acceso directo a la carpeta *storage*, pero dentro de la carpeta *public*. De esta forma se permitira acceder a la carpeta storage mediante el enlace `https://domain.com.ar/storage` (ya que la carpeta *public* es el root de la aplicacion)
