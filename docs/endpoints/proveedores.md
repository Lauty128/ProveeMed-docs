---
sidebar_position: 1
title: "Proveedores"
custom_edit_url: null
---

Las rutas de los proveedores son manejadas por el controlador `ProviderController`

:::note
Recordar que un **proveedor** es un `User` con el tipo de usuario *provider* (`user_type_id == 3`)
:::


### Vista Home

#### Descripción
* **Url:** `/proveedor`
* **Nombre de ruta:** `provider.home`
* **Parametros obligatorios:** No tiene
* **Parametros opcionales:**No tiene

#### Logica
Simplemente retorna la vista de bienvenida. 

#### Vista devuelta

`provider/home.blade.php`

---