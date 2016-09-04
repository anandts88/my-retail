# myRetail

myRetail is a rapidly growing company with HQ in Richmond, VA and over 200 stores across the east coast. The company’s annual revenue last year was $5 billion and growing at the rate of 10% year over year. myRetail sells general merchandise products, including a fast growing fresh grocery segment. The stores average 80,000 sq. ft. in size and carry around 20,000 products. myRetail wants to provide a multi-channel experience for its customers online.


myRetail is comparing solution options for the online grocery store, do the following.

* Show the add to cart button only if the item is available online, purchasingChannelCode equals 0 or 1.
* Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0 or 2.
* Carousel to scroll through the images.

## Demo

For live demo goto [DEMO](https://anandts88.github.io/my-retail/).

## Technologies

* Ember mirage is used for faking item.json response.
* Ember data is used for xhr request.
* Ember qunit acceptance test cases are implemented and available under `/tests/acceptance` directory. To run test cases start your local ember server and [http://localhost:4200/tests](http://localhost:4200/tests).
* Javascript code quality is maintained using ESLint.
* HBS code quality is maintained using Template Lint.
* Implemented using ES6 coding standard.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

After running production build, deploy files in `dist` directory to your webserver or appserver.
Currently it is available for demo in github page. [DEMO](https://anandts88.github.io/my-retail/)
