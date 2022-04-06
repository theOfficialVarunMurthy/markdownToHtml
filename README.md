# markdownToHtml

## Description

A basic markdown to HTML converter

## Pre Requisites
* [NodeJS v16](https://nodejs.org/en/download/)
* [Nest CLI (optional)](https://docs.nestjs.com/#installation)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Author

- [Varun Murthy](varun.vmurthy@gmail.com)


## API

This is a application that allows users to convert static markdown files and markdown input strings to equivalent HTML output. On startup the application will run on the default port `localhost:3000`.

1. `GET /` - returns the application name **Markdown to HTML converter**
1. `GET /html/filename.md` - will return the HTML equivalent of the `filename.md` if it exists in `/resources`, otherwise return a 500 error.
1. `POST /html/text` - with body containing the string equivalent of the markdown file will return the HTML equivalent

example curl command for 3
```
curl --location --request POST 'http://localhost:3000/html/text' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 [Heading](http://www.google.com)\n###### h6 Heading\n# Lorem ipsum \n[Lorem ipsum dolor sit amet](https://loremipsum.io/), consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
}'
```

will return
```
<h1>h1 Heading</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 <a href='http://www.google.com'>Heading</a></h5>
<h6>h6 Heading</h6>
<h1>Lorem ipsum </h1>
<p><a href='https://loremipsum.io/'>Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
ut</p>
```

## Resources

We have some [example markdown resources](repo/blob/main/resources/resources.md) that you can use to test and play with the application.


## Formatting Specifics

Markdown is a fairly rich specification; for this project a only a small subset has been implemented. Given below is the formatting that has been implemented:

| Markdown                               | HTML                                              |
| -------------------------------------- | ------------------------------------------------- |
| `# Heading 1`                          | `<h1>Heading 1</h1>`                              | 
| `## Heading 2`                         | `<h2>Heading 2</h2>`                              | 
| `...`                                  | `...`                                             | 
| `###### Heading 6`                     | `<h6>Heading 6</h6>`                              | 
| `Unformatted text`                     | `<p>Unformatted text</p>`                         | 
| `[Link text](https://www.example.com)` | `<a href="https://www.example.com">Link text</a>` | 
| `Blank line`                           | `Ignored`                                         | 
