---
sidebar_position: 4
title: "Eloquent Laravel"
custom_edit_url: null
---

Eloquent es el ORM que incluye Laravel para manejar de una forma fácil y sencilla los procesos correspondientes al manejo de bases de datos en nuestro proyecto, gracias a las funciones que provee podremos realizar complejas consultas y peticiones de base de datos sin escribir una sola línea de código SQL.

Pueden leer un articulo bastante completo sobre el funcionamiento de ORM, partiendo desde las migraciones hasta los controladores. No es necesario tener todo el conocimiento, pero aqui se muestra un ejemplo sencillo sobre su funcionamiento. [Articulo aquí](https://styde.net/aprende-a-usar-eloquent-el-orm-de-laravel/)

---

## Modelos en Laravel Eloquent

Para usar Eloquent, primero debes definir un "modelo" para cada tabla de la base de datos con la que necesites interactuar. Por ejemplo, si tienes una tabla de usuarios, podrías definir un modelo "User" para representar a cada fila de la tabla. Luego, puedes utilizar ese modelo para realizar operaciones CRUD (crear, leer, actualizar y eliminar) en la tabla de usuarios de manera sencilla.

:::note
Recordar que la configuración de los modelos sirve para luego ser utilizada en los controladores y obtener información desde la base de datos
:::

Para configurar un modelo en Laravel Eloquent, debes definir una clase que extienda de la clase Model de Laravel. Esta clase debe tener el mismo nombre que la tabla de la base de datos que quieres representar en singular.

Por ejemplo, si tienes una tabla de usuarios llamada **"users"**, podrías definir un modelo de `User` de la siguiente manera:

```php 
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
}
```

Luego, puedes definir distintos atributos y métodos en tu modelo para personalizar su comportamiento. Algunas cosas que puedes configurar en un modelo son:

El nombre de la tabla: por defecto, Eloquent asume que la *tabla tiene el mismo nombre en plural y en minúsculas que el modelo*, pero si tu tabla tiene un nombre diferente, puedes especificarlo con la propiedad `$table`. Por ejemplo:

```php 
<?php

class User extends Model
{
    protected $table = 'my_users';
}
```

El nombre de la clave primaria: por defecto, Eloquent asume que la clave primaria de tu tabla se llama **"id"**, pero si tu tabla tiene una clave primaria con otro nombre, puedes especificarlo con la propiedad `$primaryKey`. Por ejemplo:

```php
<?php

class User extends Model
{
    protected $primaryKey = 'user_id';
}
```

Los campos que se pueden rellenar de forma masiva: por defecto, Eloquent asume que todos los campos de tu tabla se pueden rellenar de [forma masiva](https://www.cursosdesarrolloweb.es/blog/asignacion-masiva-como-protegerse-en-laravel), pero si quieres especificar qué campos se pueden rellenar y cuáles no, puedes utilizar la propiedad `$fillable`. Por ejemplo:

```php
<?php

class User extends Model
{
    protected $fillable = ['name', 'email'];
}
```

Esto significa que cuando utilices el método create o update para crear o actualizar un usuario, solo se podrán rellenar los campos **"name"** y **"email"**.

## Operaciones básicas en Laravel Eloquent
Aquí tienes algunas operaciones básicas que puedes realizar con Eloquent en Laravel:

### Obtener todos los usuarios:

```php
<?php

$users = User::all();
```
> El modelo `User` debe ser importado anteriormente para usarlo con `use App/Models/User;`

### Obtener un usuario por su ID:

```php
<?php

$user = User::find(1);

# Buscar con mas de un parametro
# La funcion first() obliga a que se devuelva un objeto del primer usuario que coincide
$user = User::where("id", 1)->where("active", 1)->first();
```

### Insertar un nuevo usuario:

```php
<?php

$user = new User;
$user->name = 'Cursosdesarrolloweb';
$user->email = 'eloquent@cursosdesarrolloweb.es';
$user->password = bcrypt('password');
$user->save();
```

**Alternativamente, podemos utilizar el método create para crear registros con Eloquent:**

```php
<?php
User::create([
    'name' => 'Cursosdesarrolloweb',
    'email' => 'eloquent@cursosdesarrolloweb.es',
    'password' => bcrypt('password')
]);
```

### Actualizar un usuario existente:

```php
<?php

$user = User::find(1);
$user->name = 'Eloquent';
$user->save();
```

**Alternativamente, podemos utilizar el método update para actualizar registros con Eloquent:**

```php
<?php

$user = User::find(1);
$user->update([
    'name' => 'Cursosdesarrolloweb',
    'email' => 'app@cursosdesarrolloweb.es'
]);
```
> Como pueden ver, con el método `find($id)` obtenemos un objeto del usuario, el cual, además de sus datos almacenados en la base de datos, nos proporciona ciertos métodos que nos permiten realizar operaciones para ese usuario específico, como editar, en este caso, o eliminar.

### Eliminar un usuario

```php
<?php

$user = User::find(1);
$user->delete();
```

> Como puedes ver, utilizar Eloquent en Laravel es sencillo, simplemente debemos conocer sus métodos y llamarlos correctamente.

## Relaciones en Laravel Eloquent
Eloquent proporciona una forma sencilla de definir y trabajar con relaciones entre modelos. Esto te permite relacionar distintas tablas de la base de datos y trabajar con ellas de manera sencilla.

Hay varios tipos de relaciones que puedes definir en Eloquent:

### Uno a muchos 
Esta es la relación más común. Por ejemplo, un usuario puede tener muchos mensajes, pero cada mensaje solo puede pertenecer a un usuario. En este caso, puedes definir la relación de la siguiente manera:

```php
<?php

class User extends Model
{
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}

class Message extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```
> Estos modelos no se encuentran en el mismo archivo, obviamente. Esto es de ejemplo.

### Muchos a muchos 
Esta relación se da cuando dos modelos tienen una relación muchos a muchos. Por ejemplo, un usuario puede tener muchos permisos y un permisos puede tener muchos usuarios. En este caso, necesitarás una tabla de relación para almacenar los ids de los usuarios y permisos. Puedes definir la relación de la siguiente manera:

```php
<?php

class User extends Model
{
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }
}

class Permission extends Model
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
```

### Uno a uno 
Esta relación se da cuando dos modelos tienen una relación uno a uno. Por ejemplo, un usuario puede tener un perfil y un perfil solo puede pertenecer a un usuario. Puedes definir la relación de la siguiente manera:

```php
<?php

class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}

class Profile extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Con esto, podrás obtener el perfil de un usuario con `$user->profile` o bien el usuario de un perfil con `$profile->user`.  
Ejemplo en un controlador:
```php
    $user = User::find(5);
    $user->profile; // Aqui se obtiene un objeto del perfil al cual esta relacionado
```

### Una a uno a través de una relación 
Esta relación se da cuando dos modelos tienen una relación uno a uno a través de otro modelo intermedio. Por ejemplo, un usuario puede tener una dirección y una dirección solo puede pertenecer a un usuario, pero la dirección también tiene una relación con otro modelo, como un país. Puedes definir la relación de la siguiente manera:

```php
<?php

class User extends Model
{
    public function address()
    {
        return $this->hasOneThrough(Address::class, Country::class);
    }
}

class Address extends Model
{
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}

class Country extends Model
{
    //
}
```

### Muchos a muchos a través de una relación 
Esta relación se da cuando dos modelos tienen una relación muchos a muchos a través de otro modelo intermedio. Por ejemplo, un usuario puede tener muchos permisos y un permiso puede tener muchos usuarios, pero cada permiso también tiene una relación con otro modelo, como un proyecto. Puedes definir la relación de la siguiente manera:

```php
<?php

class User extends Model
{
    public function permissions()
    {
        return $this->belongsToManyThrough(Permission::class, Project::class);
    }
}

class Permission extends Model
{
    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}

class Project extends Model
{
    //
}
```

## Conclusión
En conclusión, Laravel Eloquent proporciona una forma sencilla y consistente de acceder a los datos de una base de datos. Con Eloquent, puedes trabajar con los datos de la base de datos como si fueran objetos en tu aplicación, en lugar de tener que escribir consultas SQL manualmente.

