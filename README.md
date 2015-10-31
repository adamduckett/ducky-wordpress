# ducky-wordpress
A custom WordPress theme boilerplate using Gulp and Sass.

## Getting Started

After installing WordPress locally `cd` into its theme directory with:

    $ cd your-local-wordpress/wp-content/themes

You can now do:

    $ git clone https://github.com/adamduckett/ducky-wordpress.git your-theme-folder
    $ cd your-theme-folder
    $ rm -rf .git/
    $ git init
    $ npm install
    $ gulp

What we're doing here is cloning Ducky WordPress into the `theme` folder, creating a fresh instance of Git, installing our Gulp dependencies and running our default Gulp task which compiles our Sass and watches for changes.
