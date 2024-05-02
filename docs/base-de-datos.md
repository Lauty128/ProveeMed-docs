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

## Tablas

### Usuarios
* **Tabla:** `users`
* **Modelo:** [User](/docs/modelos/user)
* **Clave primaria:** `id`
* **Claves foraneas:**
    * `user_type_id`
    * `location_id`

#### Columnas

| Nombre              | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------------|--------------|------------|------------|----------------|--------|
| **id**              | integer      |   NO       | SI         | SI             | SI     |
| user_type_id        | integer      |   NO       | NO         | NO             | NO     |
| location_id         | varchar(10)  |   NO       | NO         | NO             | NO     |
| name                | varchar(30)  |   NO       | NO         | NO             | NO     |
| subname             | varchar(35)  |   SI       | NO         | NO             | NO     |
| web                 | varchar(60)  |   SI       | NO         | NO             | NO     |
| email               | varchar(60)  |   NO       | NO         | NO             | SI     |
| phone               | varchar(30)  |   SI       | NO         | NO             | NO     |
| address             | varchar(80)  |   SI       | NO         | NO             | NO     |
| bussiness_name      | varchar(60)  |   NO       | NO         | NO             | SI     |
| identification      | varchar(20)  |   NO       | NO         | NO             | SI     |
| identification_type | enum         |   NO       | NO         | NO             | NO     |
| available           | boolean      |   NO       | 1          | NO             | NO     |
| password            | varchar      |   SI       | NO         | NO             | NO     |
| isAccount           | boolean      |   NO       | 0          | NO             | NO     |
| created_at          | datetime     |   NO       | current()  | NO             | NO     |
| updated_at          | datetime     |   NO       | current()  | NO             | NO     |
| deleted_at          | datetime     |   SI       | NULL       | NO             | NO     |



### Equipos
* **Tabla:** `equipment`
* **Modelo:** [Equipment](/docs/modelos/Equipment)
* **Clave primaria:** `id`
* **Claves foraneas:**
    * `category_id`

#### Columnas

| Nombre         | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|----------------|--------------|------------|------------|----------------|--------|
| **id**         | integer      |   NO       | SI         | SI             | SI     |
| name           | varchar(100) |   NO       | NO         | NO             | NO     |
| category_id    | integer(10)  |   NO       | NO         | NO             | NO     |
| umdns          | varchar(20)  |   SI       | NO         | NO             | NO     |
| description    | varchar(100) |   SI       | NO         | NO             | NO     |
| price          | integer(10)  |   SI       | NO         | NO             | NO     |
| specifications | varchar(15)  |   SI       | NO         | NO             | NO     |


### Categorias
* **Tabla:** `categories`
* **Modelo:** [Category](/docs/modelos/Category)
* **Clave primaria:** `id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| **id**        | integer      |   NO       | SI         | SI             | SI     |
| name          | varchar(100) |   NO       | NO         | NO             | NO     |
| description   | varchar(300) |   SI       | NO         | NO             | NO     |


### Marcas
* **Tabla:** `marks`
* **Modelo:** [Mark](/docs/modelos/Mark)
* **Clave primaria:** `id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| **id**        | integer      | NO         | SI         | SI             | SI     |
| name          | varchar(100) | NO         | NO         | NO             | NO     |

### Consultas
* **Tabla:** `queries`
* **Modelo:** [Query](/docs/modelos/Query)
* **Clave primaria:** `id`
* **Claves foraneas:**
    * `customer_id`
    * `provider_id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| **id**        | integer      |   NO       | SI         | SI             | SI     |
| customer_id   | integer      |   NO       | NO         | NO             | NO     |
| provider_id   | integer      |   NO       | NO         | NO             | NO     |
| subject       | varchar(100) |   NO       | NO         | NO             | NO     |
| message       | text         |   NO       | NO         | NO             | NO     |
| created_at    | datetime     |   NO       | NO         | NO             | NO     |



### Tipo de Usuario
* **Tabla:** `user_types`
* **Modelo:** [UserType](/docs/modelos/user-type)
* **Clave primaria:** 
    * `id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| **id**        | integer(5)   | NO         | NO         | SI             | SI     |
| description   | varchar(40)  | NO         | NO         | NO             | NO     |

### Opciones
* **Tabla:** `options`
* **Modelo:** [Option](/docs/modelos/option)
* **Clave primaria:** 
    * `id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| **id**        | integer(10)  |   SI       | NO         | SI             | SI     |
| name          | varchar(20)  |   SI       | NO         | NO             | NO     |
| url           | varchar(40)  |   Si       | NO         | NO             | SI     |
| description   | varchar(200) |   NO       | NO         | NO             | NO     |
| available     | bool         |   NO       | 1          | NO             | NO     |


### Ubicaciones
* **Tabla:** `locations`
* **Modelo:** [Location](/docs/modelos/location)
* **Clave primaria:** 
    * `id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| **id**        | integer(10)  | NO         | NO         | SI             | SI     |
| province      | varchar(50)  | NO         | NO         | NO             | NO     |
| department    | varchar(50)  | NO         | NO         | NO             | NO     |
| city          | varchar(50)  | NO         | NO         | NO             | NO     |


### Sugerencias
* **Tabla:** `suggestions`
* **Modelo:** [Suggestion](/docs/modelos/suggestion)
* **Clave primaria:** 
    * `id`
* **Claves foraneas:**
   * `provider_id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| **id**        | integer(10)  | NO         | NO         | SI             | SI     |
| provider_id   | integer(10)  | NO         | NO         | NO             | NO     |
| subject       | varchar(100) | NO         | NO         | NO             | NO     |
| message       | text         | NO         | NO         | NO             | NO     |
| file          | varchar(20)  | SI         | NO         | NO             | NO     |
| viewed        | boolean      | NO         | 1          | NO             | NO     |
| created_at    | datetime     | NO         | current()  | NO             | NO     |


## Tablas intermedias

### Opciones-Usuarios
* **Tabla:** `user_options`
* **Modelo:** UserOption
* **Clave primaria:** 
    * `user_type_id`
    * `option_id`
* **Claves foraneas:**
    * `user_type_id`
    * `option_id`

#### Columnas

| Nombre        | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|---------------|--------------|------------|------------|----------------|--------|
| user_type_id  | integer(10)  | NO         | NO         | NO             | NO     |
| option_id     | integer(10)  | NO         | NO         | NO             | NO     |

### Equipo-Marcas
* **Tabla:** `mark_equipments`
* **Modelo:** MarkEquipment
* **Clave primaria:** 
    * `equipment_id`
    * `mark_id`
* **Claves foraneas:**
    * `equipment_id`
    * `mark_id`

#### Columnas

| Nombre           | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|------------------|--------------|------------|------------|----------------|--------|
| **equipment_id** | integer      | NO         | NO         | NO             | NO     |
| **mark_id**      | integer      | NO         | NO         | NO             | NO             |

### Consulta-Equipos
* **Tabla:** `query_equipments`
* **Modelo:** QueryEquipment
* **Clave primaria:** 
    * `equipment_id`
    * `query_id`
* **Claves foraneas:**
    * `equipment_id`
    * `query_id`

#### Columnas

| Nombre           | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|------------------|--------------|------------|------------|----------------|--------|
| **equipment_id** | integer      | NO         | NO         | NO             | NO     |
| **query_id**     | integer      | NO         | NO         | NO             | NO     |
| quantity         | integer      | NO         | NO         | NO             | NO         |


### Proveedor-Equipos
* **Tabla:** `provider_equipments`
* **Modelo:** ProviderEquipment
* **Clave primaria:** 
    * `equipment_id`
    * `provider_id`
* **Claves foraneas:**
    * `equipment_id`
    * `provider_id`

#### Columnas

| Nombre            | Tipo de dato | Nullable   | Default    | Auto Increment | Unique |
|-------------------|--------------|------------|------------|----------------|--------|
| **equipment_id**  | integer(10)  | NO         | NO         | NO             | NO     |
| **provider_id**   | integer(10)  | NO         | NO         | NO             | NO             |