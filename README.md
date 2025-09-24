# Clean Blog Theme

Clean Blog Theme is a clean blogger theme forked from https://git.drupalcode.org/project/d8_blog_theme.

## CDN Usage

As of version 2.0.1, this theme loads Bootstrap 5, FontAwesome, and FlexSlider from their official CDNs for improved performance and easier updates. Local copies of these libraries are no longer used by default.

- **Bootstrap 5**: Loaded from jsdelivr CDN.
- **FontAwesome**: Loaded from cdnjs CDN. You can enable or disable FontAwesome via the theme settings UI.
- **FlexSlider**: Loaded from cdnjs CDN. FlexSlider is only loaded if the slideshow is enabled in theme settings.

## Installation

1. Install the theme as you would normally install a Drupal theme.
2. Go to Appearance and set Clean Blog Theme as your default theme.

## Configuration

The theme includes several configurable regions:
- Header
- Secondary menu
- Breadcrumb
- Highlighted
- Home Highlight 1, 2, and 3
- Content Top
- Help
- Content
- First and Second Sidebar
- Footer first, second, third, fourth, and fifth

### Theme Settings

- **FontAwesome**: Enable or disable loading FontAwesome from CDN in the theme settings.
- **Slideshow**: Enable or disable the homepage slideshow. FlexSlider will only be loaded if this is enabled.

## Features

- Responsive design
- Bootstrap 5 integration via CDN
- FontAwesome via CDN (toggleable)
- FlexSlider via CDN (conditional)
- Clean and minimal blog layout
- Customizable regions

## Requirements

- Drupal 9, 10, or 11
- Base theme: classy

For detailed information about the Bootstrap 5 upgrade, including limitations, future improvements, and testing guidance, please see the [BOOTSTRAP5-UPGRADE.md](BOOTSTRAP5-UPGRADE.md) file.