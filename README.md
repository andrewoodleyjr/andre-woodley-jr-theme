# Woodley Posthaven Theme

The Woodley Posthaven Theme offers a minimalist design with a static homepage that features two sections for an individual's bio and recognition. This mobile-responsive theme includes light and dark mode toggles for user preference (using JavaScript). It is built upon the Minimal Post Haven Theme with added styling and template options.

## Theme Building Resources

* [Posthaven theme documentation](http://theme-docs.posthaven.com/)
* For theme file upload via the API, see the [posthaven_theme](https://github.com/posthaven/posthaven_theme) gem.

## Building Assets

### Installing Gems

Install [bundler](http://bundler.io) and run the following command:
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

### Extended Options

Extended options are YAML reference configurations. They include:

- **Title**: Appears on the top-left side of the homepage within the header.
- **Tagline**: Displays below the Title on the top-left side of the homepage within the header.
- **Contact**: Located on the bottom-left side of the page within the footer.
- **Headline**: Displays in large text at the center of the homepage.
- **Sub-headline**: Appears below the Headline at the center of the homepage.
- **Recognition text**: Highlights the text in the recognition section.
- **Recognition Items (Important)**: Text field to showcase items in the recognition section. Use "|" to separate rewards and "*" to separate the Title and Description. The character limit is 450 characters; exceeding this may result in a memory error.

  Example 1 (One Item): `Title1*Description1`
  
  Example 2 (Multiple Items): `Title1*Description1|Title2*Description2`

- **Dark Color**: Primary text color (#hex) for the site.
- **Light Color**: Primary background color (#hex) for the site.