# CHANGELOG

## 2.0.1
* Wrapped and css in layers to make it easier for sub-themes to override css
* Minified flexslider js
* Minified theme css
* Removed fontawesome temporarily
* Refactored to use Bootstrap, FontAwesome, and FlexSlider from their respective CDNs
* Added theme setting to toggle FontAwesome CDN inclusion
* FlexSlider CDN is now only loaded if slideshow is enabled
* Organized style.css to make it more readable
* Made the number of slides in the slideshow configurable (1-10) via theme settings
* Refactored slideshow logic to use the configured slide count instead of a constant
* Added AJAX to dynamically refresh slide fieldsets when slide count changes
* Disabled slide count selector unless slideshow is enabled
* Combined padding properties for input fields in CSS for clarity

## 2.0.0
* Upgraded to Bootstrap 5

## 1.0.1
* Added CHANGELOG
* Fixed issue with subtheme configuration being ignored
* Removed support for Drupal 8

@TODO Replace logo and screenshot files

## 1.0.0
* Forked from drupal/d8_blog_theme
* Added Drupal 11 support
* Fixed issue with space in filename