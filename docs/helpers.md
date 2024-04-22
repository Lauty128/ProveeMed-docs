---
sidebar_position: 7
title: "Helpers"
custom_edit_url: null
---

Los helpers en programación son funciones de ayuda que normalmente llamamos en multitud de sitios de nuestra aplicación, son una forma de evitar duplicar código para conseguir un mantenimiento sencillo de nuestro código.

Los Helpers se pueden encontrar en múltiples contextos dentro del desarrollo de software, y su uso es bastante común en frameworks como Symfony y Laravel dentro del ecosistema PHP. Estos pueden incluir desde funciones para manejar cadenas de texto, fechas, arrays, encriptación de datos, hasta operaciones más complejas como la manipulación de imágenes o la generación de respuestas HTTP de forma más sencilla.

## Cómo y Cuándo Usar Helpers en Laravel
Aquí va la clave del éxito: usar Helpers sin convertir tu código en una jungla indescifrable. La idea es mantener tu código limpio, organizado y mantenible. Usa Helpers para simplificar tus tareas comunes, pero siempre mantén una estructura clara y lógica.

Desde una perspectiva de arquitectura, el uso de Helpers debe ser bien pensado y controlado. Aunque facilitan el desarrollo y pueden mejorar la legibilidad del código, su uso excesivo o inadecuado puede llevar a un código más acoplado y difícil de testear.

Por ejemplo, en Laravel, existen Helpers para una gran variedad de tareas, como route() para generar URLs a partir de nombres de rutas definidas, o view() para retornar vistas. Estos Helpers mejoran significativamente la legibilidad del código y permiten a los desarrolladores escribir menos código para realizar tareas comunes.

:::info
Estos Helpers pueden ser utilizados en cualquier parte de la aplicacion. Desde los controladores hasta dentro de las mismas plantillas de `blade`
:::

## Listado de Helpers mas usados

### dd()
Una de las funciones que más se utilizan. Esta permite cortar la ejecución del código y mostrar por pantalla el contenido del valor pasado por parámetros.   
De esta forma se permite realizar un análisis profundo sobre la información de interés. Aquí un ejemplo:
```php
$users = User::paginate(12);

dd($users);

return view("users_list", compact("users"));
```

En este ejemplo se imprime el listado de usuarios, sin llegar al return final.

### app()
La función `app` devuelve la instancia del contenedor de servicios.   
Un servicio importante dentro del proyecto de ProveeMed es el de las provincias, el cual va a ser utilizado en varias ocaciones. Para acceder al listado de provincias de la Argentina debemos llamar a la siguiente funcion:
```php
$provinces = app("provinces");
// [
//      "10" => "Catamarca",
//      "90" => "Tucumán",
//      "22" => "Chaco",
// ]
```

### auth()
La funcion `auth()` nos devuelve una instancia de la clase `Auth`. Esta clase nos permite saber el estado del usuario logueado en el servidor, si es que existe un usuario logueado.   
Se puede usar la funcion `auth()` para obtener la instancia o llamar directamente a la clase `Auth`. Veamos un ejemplo:
```
$user = auth()->user();
$user = Auth::user();
```
> En ambos ejemplos obtenemos un objeto con los datos del usuario logueado en la aplicacion.

Ahora podemos utilizar otro metodo que nos permite detectar si existe un usuario logueado.
```
$user = auth()->check();
$user = Auth::check();
```
> En ambos ejemplos obtenermos un valor booleando que nos idica la existencia de algun usuario logueado en el computador donde se ejecuto la validacion.

:::note
Recoradr que no importa que forma se utilice, ya sea `auth()` o `Auth` es lo mismo. El resultado es exactamente igual, solo que en uno se instancia la clase y en otro no.
:::

#### auth()->user()

Este metodo es bastante interesante y lo vamos a utilizar seguido.   
Una vez obtenido el objeto del usuario logueado, podemos acceder a sus propiedades y tambien esta la posibilidad de llamar a los metodos del modelo `User`. Aqui pueden ver los [metodos disponibles](/docs/modelos/user) que tiene el usuario.

Ahora vamos ver un ejemplo:
```php
$user = Auth::user();

$name = $user->name;
$options = $user->options;
```

Como pueden ver, asi de facil se accede al contenido del usuario logueado. Si prestan atencion, veran que estoy llamando al metodo `options()` el cual se encuentra en el modelo [User](/docs/modelos/user). Recuerden que para acceder a las opciones disponibles de determinado usuario, el mismo debe pasar por 3 tablas antes de llegar a la tabla `options`. Pero con este simple metodo, obtenemos esa informacion de una forma muy sencilla.

Luego, la variables `$options`, como es una lista de opciones, podemos aplicar un **Foreach** en blade e imprimir todas estas opciones.
```php
    <nav class="Menu__nav"> 
        @foreach (Auth::user()->options as $option)
            <a href={{ route($option->url) }}>
                <span>{{ $option->name }}</span> 
            </a>
        @endforeach
    </nav> 
```

### redirect()
Las respuestas de redireccionamiento contienen los encabezados adecuados necesarios para redirigir al usuario a otra URL. Son utilizados en los controladores, con el fin de retornar una redireccion, en lugar de una vista o informacion.
```php
Route::get('/dashboard', function () {
    return redirect('home/dashboard');
});
```

### back()
La función `back()` también se encarga de redireccionar al usuario dentro de la aplicación. A diferencia de `redirect()`, esta función redirecciona al usuario a la vista anterior, sin necesidad de recargar toda la página.    
A veces es posible que desee redirigir al usuario a su ubicación anterior, como cuando un formulario enviado no es válido.
```php
Route::post('/user/profile', function () {
    // Validate the request...
 
    return back()->withInput();
});
```
> El metodo `withInput()` es una forma de pasar a la vista un listado con los datos del formulario enviado, para que el usuario no deba volver a ingresar toda la información de nuevo.


### url()
Esta función genera una URL completa a la ruta dada:
```php
$url = url('user/profile');
```

Existen otras funciones, que son muy utiles.

```php
$current = url()->current();
$full = url()->full();
$previous = url()->previous();
```


### response()
Esta función es utilizada en los controladores para retornar un objeto Json o informacion al usuario. Un ejemplo es el siguiente en una API.
```php
public function get_all(){
    // Get a users list
    $users = User::all();

    // Return a json
    return response()->json($users);
}
```

### view()
Esta función es utilizada en los controladores para retornar una vista en el endpoint que llama al controlador donde se encuentra.   
Esta función recibe 1 o 2 parametros.
* El primero es el archivo `blade.php` que quiere renderizar
* Como segundo parametro recibe un array con los datos que quieren ser enviados a la vista para ser utilizados en ella
```php
public function equipments(){
    // Get a equipments list
    $equipments = Equipment::all();

    // Return a view and it recives a  $equipments variable to use
    return view("user.equipments_list", [
        "equipments" => $equipments
    ]);
}
```

### asset()
Esta función permite generar una url para los archivos estaticos dentro de la aplicación. Si tienes un archivo `imagen.png` en el siguiente directorio */public/images/image.png*, y quieres obtener la url completa del mismo, debes ejecutar lo siguiente:
```php
$url_image = asset("images/image.png")
```
> Esta función se situa en la carpeta *public* y comienza a buscar desde ese punto de partida. 


## Listado completo
Estos Helpers son los mas comunes y los que podriamos llegar a utilizar. Laravel tiene muchos Helpers para ofrecer, y los puedes revisar en su documentación. Aqui puedes acceder al [listado completo de helpers de laravel](https://laravel.com/docs/10.x/helpers)