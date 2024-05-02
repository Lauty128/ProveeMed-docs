---
sidebar_position: 2
title: "Clientes"
custom_edit_url: null
---

:::note
Las rutas del cliente son manejadas por el controlador `CustomerController`
:::


### Vista Home

#### Descripción
* **Url:** `/cliente`
* **Nombre de ruta:** `customer.home`
* **Parametros obligatorios:** No tiene
* **Parametros opcionales:**No tiene

#### Logica
Simplemente retorna la vista del home. 

#### Vista devuelta

`customer/home.blade.php`

---

### Lista de proveedores

#### Descripción
* **Url:** `/cliente/proveedores`
* **Nombre de ruta:** `customer.providers`
* **Parametros obligatorios:** No tiene
* **Parametros opcionales:**
    * **province:**(integer) Id de la provincia que se quiere buscar.
    * **name:**(string) Nombre o parte del nombre del proveedor/es a buscar.
    * **category:**(integer) Id de la categoria que deben comercializar los proveedores a buscar.
    <!-- * **order:**(integer) Numero de categoria a filtrar. -->


#### Logica
Primero se construye la consulta SQL, segun los parametros opcionales, y por ultimo retona un vista indicada. 

#### Vista devuelta

`customer/providers.blade.php`

Variables enviadas a la vista para utilizar

* **$providers:** Listado de proveedores, utilizando [paginate()](https://laravel.com/docs/10.x/pagination#converting-results-to-json).
    ```php
    [
        "id" => "8",
        "name" => "Proveeedor 8",
        "location_id" => "06543212",
        "province" => "Buenos Aires",
    ]
    ```
* **$category:**  Listado de objetos `Category`
* **$provinces:**
    Listado de provincias con una key que representa su id. Ejemplo:
    ```php
    [
        "10" =>"Catamarca",
        "90" =>"Tucumán",
        "22" =>"Chaco",
        ...
    ]
    ```

---

### Lista de equipos medicos

#### Descripción
* **Url:** `/cliente/equipos`
* **Nombre de ruta:** `customer.equipments`
* **Parametros obligatorios:** No tiene
* **Parametros opcionales:**
    * **name:**(string) Nombre o parte del nombre del equipo/os a buscar.
    * **category:**(integer) Id de la categoria a buscar.
    <!-- * **order:**(int) Numero de categoria a filtrar. -->

#### Logica
Primero se construye la consulta SQL, segun los parametros opcionales, y por ultimo retona un vista indicada. 

#### Vista devuelta

`customer/equipments.blade.php`

Variables enviadas a la vista para utilizar:
* **$categories:**  Lista de objetos `Category`.
* **$equipments:** Lista de equipos medicos, utilizando [paginate()](https://laravel.com/docs/10.x/pagination#converting-results-to-json).
    ```php
    [
        "id" => 1,
        "name" => "Camilla fija",
        "category_id" => 3,
        "price" => "40.00",
        "category" => [
            "id" => 3,
            "name" => "Categoria 3",
            "description" => null,
            "created_at" => "2024-04-22 13:41:18",
        ]
    ]    
    ```

-----------------------------------------------------------------------------------

### Información sobre un Proveedor

#### Descripción
* **Url:** `/cliente/proveedores/{id}`
* **Nombre de ruta:** `customer.provider`
* **Parametros obligatorios:** 
    * **Id:** (int) Codigo del proveedor especifico a buscar.
* **Parametros opcionales:** No tiene

#### Logica
Esta lógica asegura que se obtenga la información correcta del proveedor y sus categorías de equipos asociadas, proporcionando así una vista detallada de la información relevante.

#### Vista devuelta

`customer/provider.blade.php`

Variables enviadas a la vista para utilizar:
* **$categories**: Listado de objetos `Category` que representan las categorias que comercializa el proveedor.
* **$provider**: Objeto `User` con algunos agregados. Ejemplo:
    ```json
    [
        "id" => 2,
        "name" => "Proveedor",
        "subname" => "Prueba",
        "web" => null,
        "phone" => null,
        "email" => "prueba@proveedor.com",
        "location_id" => "06021010",
        "address" => null,
        "isAccount" => 1,
        "available" => 1,
        "user_type_id" => 3,
        "created_at" => "2024-04-22 16:41:16",
        "updated_at" => "2024-04-22 16:41:16",
        "province" => "Buenos Aires",
        "department" => "Alberti",
        "city" => "Alberti",    
    ]
    ```

---

### Información sobre un equipo medico

#### Descripcion 
* **Url:** `/cliente/equipos/{id}`
* **Nombre de ruta:** `customer.equipment`
* **Parametros obligatorios:** 
    * **Id:** (int) Codigo del equipo medico especifico a buscar.
* **Parametros opcionales:** No tiene

#### Logica
Esta lógica asegura que se obtenga la información correcta del equipo a buscar.

#### Vista devuelta

`customer/equipment.blade.php`

Variables enviadas a la vista para utilizar:
* **equipment:** Objeto `User`. Ejemplo: 
    ```php
    [
        "id" => 1
        "name" => "Holter EEG"
        "category_id" => 8
        "umdns" => null
        "description" => "labore rerum aspernatur molestiae est asperiores"
        "specifications" => null
        "price" => 191.00
        "created_at" => "2024-04-18 23:40:41"
        "updated_at" => "2024-04-18 23:40:41"
    ]
    ```
    > Se pueden utilizar los metodos definidos en el modelo del [equipo](/docs/modelos/equipment) 
