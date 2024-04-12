# Changelog

## 2.0.0-beta.2 - 2024-04-12

### Added
- Add improved session-handling for authorization and callback methods, to improve failed sessions in some cases.
- Improve error feedback for feeds preview.

### Fixed
- Fix an error when uninstalling the plugin.
- Fix Facebook photos not returning all photos.
- Update `symfony/property-access` dependency.
- Fix an error when uninstalling.

## 2.0.0-beta.1 - 2024-03-04

### Changed
- Now requires PHP `8.2.0+`.
- Now requires Craft `5.0.0-beta.1+`.

## 1.0.5 - 2024-04-05

### Added
- Add improved session-handling for authorization and callback methods, to improve failed sessions in some cases.
- Improve error feedback for feeds preview.

### Fixed
- Fix an error when uninstalling the plugin.
- Fix Facebook photos not returning all photos.

## 1.0.4 - 2024-02-11

### Fixed
- Fix Facebook source not connecting.

## 1.0.3 - 2023-12-08

### Fixed
- Fix YouTube offline access type.

## 1.0.2 - 2023-09-26

### Added
- Add ability to set `scopes` and `authorizationOptions` for accounts in config files.
- Add current site support to Redirect URI for multi-sites.

## 1.0.1 - 2023-03-05

### Fixed
- Fix incorrect unique index for posts database table.
- Fix an issue when fetching posts when saving, when existing cache data exists.
- Fix an error when creating a source.
- Fix an error when saving a feed with no sources.
- Fix Redirect URI not working correctly for multi-sites.

## 1.0.0 - 2023-02-01

### Added
- Initial release
