---
sidebar_position: 3
title: "Base de datos"
custom_edit_url: null
---

Para visualizar la tabla de entidad-relacion puedes acceder al panel de DbDiagram a traves del boton de aqui abajo. 

import Button from '/src/components/button/Button.js';

<Button title="👉 DbDiagram" url="https://dbdocs.io/lautarosilverii/ProveeMed" />
<br />
Contraseña: 12052003   

## Diccionario de datos

### Usuarios
* **Tabla:** `users`
* **Modelo:** [User](/docs/modelos/user)
* **Clave primaria:** `id`
* **Claves foraneas:**
    * `user_type_id`
    * `location_id`

#### Columnas

| Nombre       | Tipo de dato | Nulo   | Default    | Auto Increment | Unique |
|--------------|--------------|--------|------------|----------------|--------|
| id           | integer      |   SI   | SI         | SI             | SI     |
| user_type_id | integer      |   NO   | NO         | NO             | NO     |
| location_id  | varchar(10)  |   NO   | NO         | NO             | NO     |
| name         | varchar(30)  |   NO   | NO         | NO             | NO     |
| subname      | varchar(35)  |   NO   | NO         | NO             | NO     |
| web          | varchar(60)  |   SI   | NO         | NO             | NO     |
| email        | varchar(60)  |   NO   | NO         | NO             | SI     |
| phone        | varchar(30)  |   SI   | NO         | NO             | NO     |
| address      | varchar(80)  |   SI   | NO         | NO             | NO     |
| available    | boolean      |   NO   | 1          | NO             | NO     |
| password     | varchar      |   SI   | NO         | NO             | NO     |
| isAccount    | boolean      |   NO   | 0          | NO             | NO     |
| created_at   | datetime     |   NO   | current()  | NO             | NO     |
| updated_at   | datetime     |   NO   | current()  | NO             | NO     |
| deleted_at   | datetime     |   SI   | NULL       | NO             | NO     |


### Equipos
* **Tabla:** `equipment`
* **Modelo:** [Equipment](/docs/modelos/Equipment)
* **Clave primaria:** `id`
* **Claves foraneas:**
    * `category_id`

#### Columnas

| Nombre         | Tipo de dato | Nulo   | Default    | Auto Increment | Unique |
|----------------|--------------|--------|------------|----------------|--------|
| id             | integer      |   NO   | SI         | SI             | SI     |
| name           | varchar(100) |   NO   | NO         | NO             | NO     |
| category_id    | integer(10)  |   NO   | NO         | NO             | NO     |
| umdns          | varchar(20)  |   SI   | NO         | NO             | NO     |
| description    | varchar(100) |   SI   | NO         | NO             | NO     |
| price          | integer(10)  |   SI   | NO         | NO             | NO     |
| specifications | varchar(15)  |   SI   | NO         | NO             | NO     |


### Categorias
* **Tabla:** `categories`
* **Modelo:** [Category](/docs/modelos/Category)
* **Clave primaria:** `id`

#### Columnas

| Nombre        | Tipo de dato | Nulo   | Default    | Auto Increment | Unique |
|---------------|--------------|--------|------------|----------------|--------|
| id            | integer      |   NO   | SI         | SI             | SI     |
| name          | varchar(100) |   NO   | NO         | NO             | NO     |
| description   | varchar(300) |   SI   | NO         | NO             | NO     |


### Marcas
* **Tabla:** `marks`
* **Modelo:** [Mark](/docs/modelos/Mark)
* **Clave primaria:** `id`

#### Columnas

| Nombre        | Tipo de dato | Nulo   | Default    | Auto Increment | Unique |
|---------------|--------------|--------|------------|----------------|--------|
| id            | integer      |   NO   | SI         | SI             | SI     |
| name          | varchar(100) |   NO   | NO         | NO             | NO     |

### Consultas
* **Tabla:** `queries`
* **Modelo:** [Query](/docs/modelos/Query)
* **Clave primaria:** `id`
* **Claves foraneas:**
    * `customer_id`
    * `provider_id`

#### Columnas

| Nombre        | Tipo de dato | Nulo   | Default    | Auto Increment | Unique |
|---------------|--------------|--------|------------|----------------|--------|
| id            | integer      |   NO   | SI         | SI             | SI     |
| customer_id   | integer      |   NO   | NO         | NO             | NO     |
| provider_id   | integer      |   NO   | NO         | NO             | NO     |
| subject       | varchar(100) |   NO   | NO         | NO             | NO     |
| message       | text         |   NO   | NO         | NO             | NO     |
| created_at    | datetime     |   NO   | NO         | NO             | NO     |


### Equipos_Marcas
* **Tabla:** `equipment_marks`
* **Modelo:** [User](/docs/modelos/Equip_mark)
* **Clave primaria:** 
    * `equipment_id`
    * `mark_id`
* **Claves foraneas:**
    * `equipment_id`
    * `mark_id`

#### Columnas

| Nombre        | Tipo de dato | Nulo   | Default    | Auto Increment | Unique |
|---------------|--------------|--------|------------|----------------|--------|
| equipment_id  | integer      |   NO   | NO         | NO             | NO     |
| mark_id       | integer      |   NO   | NO         | NO             | NO     |



## Stored procedures
Los SP de la base de datos se encuentran en la carpeta `database/migrations/sp`. Los archivos dentro de la carpeta indicada deben seguir el siguiente formato:
* Todos los archivos dentro deben ser de tipo `.sql`.
* El nombre del archivo debe coincidir con el nombre del procedure.
* El script del procedure no debe contener un `DELIMITER` personalizado.

Ejemplo:

```sql title="database/migrations/sp/providers_get.sql"
create procedure providers_get(
    xName varchar(60),
	xProvince varchar(2)
)
BEGIN
...
... 
END;
```

Todos estos procedimientos seran subidos a traves del archivo `2024_04_26_125819_create_stored_procedures_table.php` de la carpeta `migrations`.   

Se hace de esta forma, ya que al ejecutar el comando `php artisan migrate` en la terminal, los procedimientos se eliminaran y se volveran a crear automaticamente, dependiendo del contenido de la carpeta `sp`.