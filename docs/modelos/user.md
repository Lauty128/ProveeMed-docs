---
sidebar_position: 1
title: "User"
description: "Usuarios del sistema"
custom_edit_url: null
---

# User::class

    * **Tabla:** `users`
    * [Diccionario](/docs/base-de-datos#usuarios)
    * **Descripción:**
        Representa a los usuarios almacenados en el sistema. Permite administrar los distintos tipos de usuarios y sus opciones. 

**Metodos:**

    * `options()`: Devuelve listado de [Opciones](/docs/base-de-datos#opciones) del usuario.

    * `equipments()`: Devuelve listado de [Equipos medicos](/docs/base-de-datos#equipos) que vende el proveedor.

    * `type()`: Devuelve el [Tipo de cuenta](/docs/base-de-datos#tipo-de-usuario) del usuario.

    * `location()`: Devuelve la [Ubicacion](/docs/base-de-datos#ubicaciones) del usuario.

    * `suggestions()`: Devuelve listado de [Sugerencias](/docs/base-de-datos#sugerencias) de los proveedores.

    * `queries()`: Devuelve listado de [Consultas](/docs/base-de-datos#consultas) realizadas por el cliente.
