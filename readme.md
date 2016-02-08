# NodalEdge.com

## Project Information

HTML files in root are generated `*.kit` files using [CodeKit](https://realfavicongenerator.net/). CodeKit is also used for compiling SCSS files. `*.kit` files are used only for making it easier to reuse components like header, footer, testimonials etc. SCSS compilation can be set up directly on your machine. More information on the [SASS website](http://sass-lang.com/install). When the project gets implemented into a CMS or static site generator, you can use the *.kit files to create template parts.

## Folder structure

* `assets/images/` -- layout images used for backgrounds, site logo etc.
* `assets/data/` -- temporary images, logo for quotes etc.
* `assets/fonts/` -- custom or icon fonts included in the project
* `assets/scripts/` -- scripts related to the project
* `assets/stylesheets/scss/` -- original SCSS files, **always edit ** `*.scss` **files** and compile to CSS afterwards. Only style.scss, style-ie.scss and print.scss have to be compiled (the rest of the files are included into style.scss).
* `assets/stylesheets/css/` -- generated `*.css` files from `*.scss` files (this files are overwritten when `*.scss` files are compiled)
* `components/` — small HTML file parts that are used on multiple pages
* `templates/` — specific project pages that include a standard header/footer, other components

## Other information

### Favicons
Favicons and other related images in root are generated using [Favicon generator](https://realfavicongenerator.net/)

### Images
PNG and JPG images are compressed via the [TinyPNG](https://tinypng.com/). 