---
sidebar_position: 2
title: "Equipment"
description: "Equipos medicos"
custom_edit_url: null
---

# Equipment::class

* **Tabla:** `equipments`
* [Diccionario](/docs/base-de-datos#equipos)
* **Descripción:**
    El modelo "Equipment" representa a los equipos medicos almacenados en el sistema. Permite relacionar a cada equipo con sus proveedores y marcas. 

**Metodos:**

    * `providers()`: Devuelve listado de los [Proveedores](/docs/base-de-datos#usuarios)(*usuarios*) que comercializan cada equipo.

    * `category()`: Devuelve la [Categoria](/docs/base-de-datos#categorias) de cada equipo.

    * `marks()`: Devuelve listado de las [Marcas](/docs/base-de-datos#marcas) de cada equipo.