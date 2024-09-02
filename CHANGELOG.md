# Changelog

## [Unreleased][unreleased]

- Add node.j 21 and 22, remove 16 and 19 in CI

## [2.0.0-alpha.1][] - 2023-05-27

- Rename `Category` to `Entity`
- Rename `Unit` to `Division`
- Change `email`, `phone` and `fullName` fields

## [1.0.10][] - 2023-04-01

- Drop node.js 14 support, add node.js 20
- Convert package_lock.json to lockfileVersion 2
- Update dependencies

## [1.0.9][] - 2022-06-24

- Hotfix

## [1.0.8][] - 2022-06-24

- Update to metaschema 2.x
- Update dependencies and package maintenance

## [1.0.7][] - 2022-03-17

- Update dependencies and package maintenance

## [1.0.6][] - 2021-09-10

- Add `{ delete: 'cascade' }` and to generate ON DELETE CASCADE
- Update dependencies

## [1.0.5][] - 2021-08-04

- Use relative path to load schemas from node_modules

## [1.0.4][] - 2021-08-02

- Identifier schema is not a Registry, it's a regular entity
- Add default: `now` for datetime fields
- Add Category kinds and default kind
- Fix enum for Permission

## [1.0.3][] - 2021-06-30

- Role linked to Units
- Projection examples

## [1.0.2][] - 2021-05-22

- Improve core schemas
- Add fail on warnings in tests
- Fix warnings (unknown types)

## [1.0.1][] - 2021-05-21

- Fix package files

## [1.0.0][] - 2021-05-20

- Move initial implementation from metasql

[unreleased]: https://github.com/metarhia/metadomain/compare/v1.0.10...HEAD
[1.0.10]: https://github.com/metarhia/metadomain/compare/v1.0.9...v1.0.10
[1.0.9]: https://github.com/metarhia/metadomain/compare/v1.0.8...v1.0.9
[1.0.8]: https://github.com/metarhia/metadomain/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/metarhia/metadomain/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/metarhia/metadomain/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/metarhia/metadomain/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/metarhia/metadomain/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/metarhia/metadomain/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/metarhia/metadomain/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/metarhia/metadomain/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/metarhia/metadomain/compare/v0.0.0...v1.0.0
