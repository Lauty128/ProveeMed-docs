---
sidebar_position: 8
title: "Query"
description: "Consultas del usuario al proveedor"
custom_edit_url: null
---

# Query::class

* **Tabla:** `queries`
* [Diccionario](/docs/base-de-datos#consultas)
* **Descripción:**
    Representa las consultas que un cliente realiza a un proveedor.

**Metodos:**

* `customer()`: Devuelve el [Usuario](/docs/base-de-datos#equipos)(*cliente*) que realizó la consulta.

* `equipments()`: Devuelve el listado de [Equipos](/docs/base-de-datos#equipos) que fueron consultados.

* `provider()`: Devuelve el [Usuario](/docs/base-de-datos#equipos)(*proveedor*) que recibe la consulta.