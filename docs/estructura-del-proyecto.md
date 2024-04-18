---
sidebar_position: 2
title: "Estructura del proyecto"
custom_edit_url: null
---

Esta aplicación web utiliza el framework Laravel de PHP para su desarrollo. Aquí se explicarán algunas cuestiones de Laravel para comprender su estructura y la propia estructura de la aplicación que se está desarrollando.

## Patron MVC
Laravel utiliza el patron MVC para trabajar organizar los archivos y carpetas dentro del proyecto.   
Esta es una forma muy ordenada y simple de estructurar un proyecto.

:::info
**MVC(modelo, vista, controlador)** es un patrón arquitectónico de software que separa una aplicación en tres capas descritas como su acrónimo lo indica. Laravel, así como la mayoría de frameworks en PHP implementan este patrón de diseño en donde cada capa maneja un aspecto de la aplicación. 
:::

[Articulo donde se explica mas a profundidad el patron MVC](https://www.campusmvp.es/recursos/post/que-es-el-patron-mvc-en-programacion-y-por-que-es-util.aspx)


## MVC en Laravel
El MVC en laravel está implementado de la siguiente manera. En una aplicación web, los controladores estarán situados en la carpeta `app/Http/Controllers`, los modelos directamente en `app` y las vistas en `resources/views`. Para crear un nuevo controlador, basta ejecutar el comando

```bash
php artisan make:controller HelloWorld
```

Este comando creará el archivo `app/Http/Controllers/HelloWorld.php` que tendrá el siguiente contenido.

```php title="app/Http/Controllers/HelloWorldController.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloWorld extends Controller
{
    //
}
```

Por supuesto si conoces de antemano esta estructura puedes crear el controlador tú mismo. Para mí es mucho más dinámico crearlo desde artisan y te recomiendo que siempre que puedas utilices este comando que brinda laravel. Como se puede ver este comando se creó un controlador que hereda directamente de la clase `App\Http\Controllers` de laravel. Para que nuestro controlador sea funcional vamos a agregar el siguiente método.

```php title="app/Http/Controllers/HelloWorldController.php"
public function sayHello()
{
    return view('hello');
}
```

Los métodos en los controladores de laravel por lo general suelen retornar arrays, objetos o vistas. En este caso, hemos utilizamos el helper view para retornar la vista hello la cual crearemos a continuación.

```html title="resources/views/hello.blade.php"
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>App title</title>
<body>
    <h1>HELLO WORLD!</h1>
</body>
</html>
```

Este archivo debe ser guardado con el nombre hello.blade.php en la carpeta `resources/views`. Finalmente vamos a agregar la siguiente línea en el archivo `routes/web.php` para poder acceder al método `sayHello` el cuál nos retornará la vista hello.

```php title="routes/web.php"
Route::get('/helloworld', 'HelloWorld@sayHello');
```
Al acceder a la ruta `/helloworld` junto con el dominio raíz de tu aplicación en el navegador deberá visualizarse el mensaje **HELLO WORLD!**. Puedes probar esto antes de seguir con lo que viene a continuación. 

Para agregar el componente del modelo, ejecutaremos el siguiente comando en la terminal

```bash
php artisan make:model Hello
```

Esto creará el archivo `app/Models/Hello.php` con el siguiente contenido

```php title="app/Models/Hello.php"
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hello extends Model
{
    //
}
```

Después de esto agregaremos el siguiente método a nuestro modelo para retornar el saludo.

```php title="app/Models/Hello.php"
public static function helloWorldMessage()
{
    return "HELLO WORLD!";
}
```

:::note
Recordar que el **Modelo** se encarga de conectarse con la base de datos y devolver la información correspondiente a través del ORM [Eloquent](/docs/Eloquent) de laravel. Esto es un ejemplo donde creamos un método estático que devuelve un mensaje.
:::

De seguido haremos la siguiente adecuación en el controlador para enviar el mensaje del modelo a la vista.

```php title="app/Http/Controllers/HelloWorldController.php"
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hello;  // aquí importamos el modelo

class HelloWorld extends Controller
{
    public function sayHello()
    {
        return view('hello', ["message" => Hello::helloWorldMessage()]);
    }
}
```

Finalmente harmeos la siguiente adecuación en la vista para imprimir el mensaje enviado por el controlador.

```php title="resources/views/hello.blade.php"
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>App title</title>
<body>
    //highlight-next-line
    <h1> {{ $message }} </h1>
</body>
</html>
```

Y con esto al acceder nuevamente a la ruta `/helloworld` veremos nuevamente el mensaje **HELLO WORLD!** esta vez traído directamente desde nuestro modelo.


## Estructura de vistas
Aquí se documenta la estructura de las vistas del proyecto, donde se encuentran las pestañas, componentes y los layouts, los cuales se encargan de mantener una estructura en la aplicación.

Antes de comenzar, cabe recalcar que la division de carpetas dentro de la carpeta `resources/views` se enfoca en el tipo de pestaña. Si observan, podran visualizar el siguiente formato:
* **admin**: Vistas del administrador
* **login**: Pestañas para el login
* **customer**: Vistas del cliente 
* **provider**: Vistas del proveedor
* **profile**: Pestañas de edicion del perfil (pestaña a la cual podra acceder cualquier tipo de usuario)

### Layouts
Actualmente existen 3 tipos de layout en la aplicacion. Estos layouts depende tambien del [tipo de usuario](/docs/validaciones).

* **`resources/views/layouts/admin.blade.php`**:
Este layout se encarga de estructurar unicamente las vistas del administrador, las cuales se encuentran en la carpeta `resources/views/admin`

* **`resources/views/layouts/guest.blade.php`**:
Este se encarga de estructurar aquellas vistas de usuarios que intentan acceder al sistema sin tener una cuenta. Esto incluye el login, recuperar contraseña, entre otras.

* **`resources/views/layout.blade.php`**:
Este es el layout principal, por eso no se encuntra en la carpeta layouts. Este se encarga de estrcuturar las vistas de los clientes y proveedores.

:::note
Actualmente las vistas del **administrador** usan un layout diferente a los otros usuarios porque estas vistas utilizan TailwindCSS, dependencia que fue inyectada por Laravel Breeze.   
En un futuro las vistas del administrador pasarán a ser administradas por el layout principal
:::

### Componentes
Existen varios componentes dentro del proyecto, los cuales son utilizados en toda la aplicacion. Pero hay dos componentes principales que son utilizados inevitablemente en todas las vistas de los usuarios logueados en la aplicacion.
> Estos componentes son utilizados tanto en *layout admin* como en el *layout principal*

#### Menu
El menú se encuentra en el archivo `resources/views/components/static/menu.blade.php` y se encarga de procesar el menú del usuario autenticado, independientemente del tipo de usuario.  
Este menú utiliza la clase `Auth` para obtener el usuario autenticado con el método estático `user()`. De esta forma se obtienen las operaciones del usuario utilizando el siguiente comando:
```php 
Auth::user()->options()
```
> Luego se utiliza un forEach y se imprimen las opciones disponibles que tiene el usuario en el menu

#### Footer
El footer es un componente estático, pero que debe ser reflejado en todas las páginas y brindar información útil al usuario en caso de querer comunicarse con la empresa.

### Vistas
Las pestañas (o vistas) son los archivos `.blade.php` que devuelve el controlador.  
Pueden observar que dentro de cada uno de estos archivos se encuentran ciertas particularidades. Aquí voy a explicar la estructura de cada vista.

Primero, cada vista debe comenzar con un `@extends`. Esto indica que layout se va a utilizar para renderizar la vista.

```php
@extends("nombre_layout") // Sin el .blade.php
// Recordar que si se encuentra dentro de una carpeta, se separa por puntos
// Ejemplo = @extends("carpeta.nombre_layout")
```

Si revisan el ejemplo del layout principal, veran un formato parecido al siguiete:

```php
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titulo</title>
</head>
<body>
    <main>
        @yield('body')
    </main>
</body>
</html>
```

Como pueden ver, los `@yield("nombre")` representan una parte del layout que pueden ser extendidas. Y solo se pueden usar al colocar la funcion `@extends()` que vimos anteriormente.

Esto funciona de la siguiente manera.   
Si nosotros colocamos en la vista, posterior al @extends, el siguiente código:

```php
@extends("nombre_layout")

@section("body")
    <h1>Titulo de la vista</h1>
    <p>Descripcion de la vista</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
@endsection
```

El resultado que será devuelto como HTML será el siguiente:

```php
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titulo</title>
</head>
<body>
    <main>
        <h1>Titulo de la vista</h1>
        <p>Descripcion de la vista</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </main>
</body>
</html>
```

> A traves del `@section() @endsection` indicamos con que queremos reemplazar el `@yield()` indicado en el layout