<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# setProps

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Define non-enumerable read-only properties which expose strided array function meta data.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-meta-data-props
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var setProps = require( '@stdlib/strided-base-meta-data-props' );
```

#### setProps( meta, dtypes, obj, bool )

Defines non-enumerable read-only properties which expose strided array function meta data.

<!-- eslint-disable array-element-newline -->

```javascript
// Define strided array function meta data:
var meta = {
    'nargs': 7,
    'nin': 1,
    'nout': 1
};

// Define the list of strided array data types:
var dtypes = [
    'float64', 'float64'
];

// Define an object/function on which to set the properties:
var obj = {};

// Set the properties:
setProps( meta, dtypes, obj, false );
```

The `meta` data argument should be an `object` with the following properties:

-   **nargs**: total number of arguments (excluding offsets).
-   **nin**: number of input strided arrays.
-   **nout**: number of output strided arrays.

The `bool` argument indicates whether the input object should describe an "ndarray" interface (i.e., an interface supporting `offset` arguments).

<!-- eslint-disable array-element-newline -->

```javascript
// Define strided array function meta data:
var meta = {
    'nargs': 7, // excludes offsets
    'nin': 1,
    'nout': 1
};

// Define the list of strided array data types:
var dtypes = [
    'float64', 'float64'
];

// Define an object/function on which to set the properties:
var obj = {};

// Set the properties:
setProps( meta, dtypes, obj, true );

// Retrieve the total number of arguments:
var nargs = obj.nargs;
// returns 9
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable array-element-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var setProps = require( '@stdlib/strided-base-meta-data-props' );

// Define strided array function meta data:
var meta = {
    'nargs': 7,
    'nin': 1,
    'nout': 1
};

// Define the list of strided array data types:
var types = [
    'float64', 'float64',
    'float32', 'float32',
    'generic', 'generic'
];

// Define an object/function on which to set the properties:
var obj = {};

// Set the properties:
setProps( meta, types, obj, false );

// Retrieve strided array function data...
var nargs = obj.nargs;
// returns 7

var nin = obj.nin;
// returns 1

var nout = obj.nout;
// returns 1

var sigs = obj.types;
// returns [...]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-meta-data-props.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-meta-data-props

[test-image]: https://github.com/stdlib-js/strided-base-meta-data-props/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-meta-data-props/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-meta-data-props/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-meta-data-props?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-meta-data-props.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-meta-data-props/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-meta-data-props/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-meta-data-props/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-meta-data-props/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-meta-data-props/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-meta-data-props/main/LICENSE

</section>

<!-- /.links -->
