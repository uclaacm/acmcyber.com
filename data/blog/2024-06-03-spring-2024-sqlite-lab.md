---
title: Secure SQLite Lab 2024
authors: [Ronak Badhe]
category: Projects
tags: [spring-2024, cyber-lab]
description: Secure library for developers to use
---

<img src="https://static.tildacdn.one/tild6262-6661-4034-b164-383063636462/What_is_SQL_Database.png" alt="blog image" />

### Created a library allowing software developers to use SQL in their web apps without worrying about creating vulnerabilities.



## What and why SQL?
Structured query language (SQL) is a programming language for storing and processing information in a relational database. Allows for data data querying, manipulation, analysis, integrity, and much more.


## SQL Injection & Binding
An SQL (structured query language) injection is a cyberattack that allows an attacker to access or modify a database by injecting malicious SQL code. This attack can grant individuals access to sensitive information, such as customer data or administrative information. SQL is a common attack often used against websites and web applications that use an SQL-based database.
Examples:
Imagine a login form that takes a username and password:
`SELECT * FROM users WHERE username = 'admin' AND password = 'password';`
An attacker might enter:

Username: admin
Password: ' OR '1'='1

The SQL query would then be:
`SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1';`

This query will always return true, allowing an attacker to bypass authentication and access personal and sensitive informatio.

We worked to prevent these types of attacks by adding binding parameters within our code. Binding variables allow the server to initialize a statement once and execute it multiple times by reparsing or reanalyzing it, which could lead to SQL attacks if left unchecked. They are an alternative way to pass data to the database. Instead of putting in a variable, name, or value you can use a place holder like ?, :name or @name while providing the actual variable using a separate API call.
In our SQL library, we used binding parameters including functions like: `sqlite3_bind_int64`, `sqlite3_bind_double`, and `sqlite3_bind_text`
These functions safely insert the user data into the SQL statement at the specified placeholders which are then prepared using this statement:
`rc = _lib.sqlite3_prepare_v2(this.#db.deref(), statement, -1, res, 0);`
The binding values to the prepared statement are then initilized:
```javascript=
for (let i = 0; i < binding.length; i++) {
  const param = binding[i];
  const typeParam = typeof(param);
  if (typeParam === 'number') {
      if (Number.isInteger(param)) {
        rc = _lib.sqlite3_bind_int64(res.deref(), i+1, param);
      }
      else {
        rc = _lib.sqlite3_bind_double(res.deref(), i+1, param);
      }
  }
  else if (typeParam === 'string') {
    rc = _lib.sqlite3_bind_text(res.deref(), i+1, param, param.length, 0);
  }
}

```
Finally, they are executed within this line:
`while (_lib.sqlite3_step(res.deref()) == SQLITE_ROW) {}`
By using placeholders like ? and binding user inputs, we can protect user data within our library and safeguard against SQL attacks. This code ensures that inputs are not treated as executable SQL code within our library.
## FFI
An FFI, or foreign function interface, is a method that allows us to call functions written in a different language in our existing code. We are trying to call SQLite functions, which are written in C, but our library is written in JS, and naturally it's impossible to write C code directly into JS, so we used 'ffi-napi' in Node to facilitate this.

For the FFI, we specify the return type, as well as the type of the parameters:
```javascript=
const _lib = ffi.Library('libsqlite3', {
  'sqlite3_open': [ 'int', [ 'string', sqlite3PtrPtr ] ],
  'sqlite3_prepare_v2': [ 'int', [ sqlite3Ptr, 'string', 'int', sqlstatementPtrPtr, 'int' ] ],
  'sqlite3_close': [ 'int', [ sqlite3Ptr ] ],
  'sqlite3_exec': [ 'int', [ sqlite3Ptr, 'string', 'pointer', 'pointer', 'string' ] ],
  'sqlite3_step': ['int',[sqlstatementPtr]],
  'sqlite3_libversion': ['string', []],
    ...
});
```

Now, we can call SQLite functions by just calling them as follows:
```javascript=
rc = _lib.sqlite3_open(filename, this.#ss_db);
```
## Tagged Templates
Tagged Templates are template literals unique to javascript that allow parsing an array of string values quickly. Due to the customization in handling a template literal, we were able to adapt our query binding to also work with more human-readable Template Strings

In the case of the previous example:
`db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);`,
using template strings we can rewrite this as:
````sql`SELECT * FROM users WHERE username = {username} AND password = {password}`;````.
This results in a cleaner more concise experience for users of this library.

All of this functionality was included quite concisely with a simple function:

```javascript =
function sql(strings, ...values) {
    let sql = strings.join("?");
    let params = values;

    return db.query(sql, params);
}
```

This achieves both an injection safeguard and smoother user experience.
