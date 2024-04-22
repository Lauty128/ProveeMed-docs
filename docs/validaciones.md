---
sidebar_position: 6
title: "Validaciones"
custom_edit_url: null
---

Es importante conocer las validaciones de la aplicación y que puede hacer cada tipo de usuario.   
En ProveeMed actualmente existen 3 tipos de usuarios:
* **Administrador** [1]
* **Cliente** [2]
* **Proveedor** [3]

## Rutas privadas
La aplicación cuenta con un sistema de middlewares que limitan el acceso a los usuarios del sistema. Porque si el cliente o proveedor pueden acceder al panel del administrador y realizar las mismas operaciones que el mismo, está ocurriendo un fallo de seguridad.

Por esta razón se crearon 3 grupos de rutas, a las cuales se le aplica un middleware cada vez que se quiere acceder a una de ellas. Estos grupos son

* **Customer**
    * Rutas agrupadas: `cliente/*` 
    * Middleware aplicado: `auth.customer`
    * Usuarios con acceso a estas rutas
        * [Administrador](#administrador)
        * [Cliente](#cliente)
* **Provider**
    * Rutas agrupadas: `proveedor/*` 
    *  Middleware aplicado: `auth.provider`
        * [Proveedor](#proveedor)
* **Administrator**
    * Rutas agrupadas: `admin/*` 
    * Middleware aplicado: `auth.admin`
    * Usuarios con acceso a estas rutas
        * [Administrador](#administrador)
* **Profile**
    * Rutas agrupadas: `perfil/*` 
    * Middleware aplicado: `auth`
    * Usuarios con acceso a estas rutas
        * [Administrador](#administrador)
        * [Cliente](#cliente)
        * [Proveedor](#proveedor)


## Tipos de usuarios

Existen 3 tipos dentro del sistema y cada uno puedo realizar distintas operaciones.

:::info
Recordar que el tipo de usuario está definido en la columna `user_type_id` de la tabla [users](/docs/base-de-datos#users). Puedes revisar los tipos de usuarios en la tabla [user_types](/docs/base-de-datos#user_types).
:::

### Administrador
* Modificar su informacion personal
* Modificar su foto de perfil
* Agregar, modificar o eliminar un proveedor
    * Si se edita un proveedor y su usuario es una cuenta, se le notificara al correo electrónico.
* Agregar, modificar o eliminar un equipo médico
* Agregar, modificar o eliminar una categoría
    * Solo se puede eliminar una categoría si todos los equipos médicos relacionadas a la misma son eliminados
* Agregar, modificar o eliminar una marca
    * Solo se puede eliminar una marca si todos los equipos médicos relacionadas a la misma son eliminados
* Agregar o quitar equipos médicos que comercializa un proveedor

### Cliente
* Cambiar su contraseña y datos personales
* Modificar su foto de perfil
* Visualizar los proveedores disponibles junto a sus datos de contacto
* Visualizar los equipos médicos y descargar sus especificaciones
* Realizar consultas sobre stock a proveedores
* Filtrar proveedores por zonas
* Filtrar equipos médicos por la zona donde se venden

### Proveedor
* No puede visualizar los otros proveedores
* Precios de los equipos médicos ocultos
* Cambiar su contraseña y datos personales
* Agregar o quitar equipos médicos que tiene a la venta
* Cambiar o quitar foto de perfil
* enviar sugerencias al administrador (Generales o sobre un equipo médico)