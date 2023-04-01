# The Minimal Posthaven Theme

The intent of this theme is to exercise most of the major elements of a [Posthaven](https://posthaven.com/) site with minimal template logic and styling. As such it should provide a good starting point for theme development.

## Theme Building Resources

* [Posthaven theme documentation](http://theme-docs.posthaven.com/)
* See the [posthaven_theme](https://github.com/posthaven/posthaven_theme) gem for theme file upload via the API.

## Building Assets

### Install Gems

Install [bundler](http://bundler.io) and run:
```
bundle install
```

### Building SCSS

Build `assets/blog.css`:
```
rake compile
```

Watch `src/blog.scss` and build on update:
```
rake watch
```
