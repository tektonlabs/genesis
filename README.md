# Genesis
> The skeleton generator tool based on big foundation of Tekton Labs

Every new project we develop needs a solid base to start so in order to meet our goals we
create this tool to standarize project scaffoliding.

![](https://1.bp.blogspot.com/-785ExAu4O5Q/WG5SygJvhbI/AAAAAAAAD_k/K5bSQFaV5yY9S4NE0GsGA0EeOvFrX4pagCLcB/s1600/The-Tree-of-Life.jpg)

## Installation

OS X & Linux:

```sh
yarn global add genesis-generator
```

## Usage example

```sh
genesis empty-folder/
```

## Development setup

Just as simple as
```sh
node src/index.js
```

## Troubleshooting

If your terminal doesn't recognize the 'genesis' command is possible that your yarn bin path is not on the PATH variable. Check or add it appending this line at the end of your ```.bashrc``` file:

```sh
export PATH="$(yarn global bin):$PATH"
```

## Release History

This section is under construction 👷🏽‍♂️👷🏽‍♀️

## Meta

Tekton Labs - [@tektonlabs](https://twitter.com/tektonlabs) – info@tektonlabs.com

Distributed under the MIT license. See ``LICENSE`` for more information.

## Contributing

1. Fork it (<https://github.com/yourname/genesis-generator/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
