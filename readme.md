# United Nations - Sustainable Development Goals

> Library by **Nestor Bonilla**

<p align="center">
  <img width="50%" src="https://raw.githubusercontent.com/digitalbonds/un-sdgs/master/src/assets/sdg_icon.svg">
</p>

This project is a library that contains a set of data related to the Sustainable Development Goals of United Nations, ready to be consumed by your application. The properties each goal contains are: number, hexadecimal color, name, and image in vector format for english and spanish languages.

## Prerequisites 
> To make use of the library **United Nations - Sustainable Development Goals** you will need the following:

* NodeJS ([https://nodejs.org/en/](https://nodejs.org/en/))
	> npm install nodejs

## Installation
> To install the library you will need to run the following command:

```console
npm install @digitalbonds/un-sdgs
```

If you want to make use of the json image of each goal, you will need to install a Lottie library. If you're using React you can use:

```console
npm install react-lottie
```

## Usage

```js
import Sdgs from '@digitalbonds/un-sdgs';

let sdgs = Sdgs.listGoals('eng', 'color');
let sdg = Sdgs.getGoal('eng', 'color', 1);
```

## Methods

##### listGoals(language:`String`, color: `String`)
Get a list of the 17 Sustainable Development Goals, where each one will have the following structure:

```js
...
let language = 'eng';   // 'eng', 'spa'
let color = 'color';    // 'color', 'white'

let sdgs = Sdgs.listGoals(language, color);

sdgs = [
    {
        id: 'Integer',
        number: 'Integer',
        name: 'String',
        color: 'String - hexadecimal code',
        json: 'lottie options'
    },...
];
...
```

##### getGoal(language:`String`, color: `String`, number: `Integer`)
Get an object of the Sustainable Development Goal asked, having the following structure:

```js
...
let language = 'eng';   // 'eng', 'spa'
let color = 'color';    // 'color', 'white'
let number = 1;         // 1 ... 17

let sdg = Sdgs.get(language, color, number);

sdg = {
    id: 'Integer',
    number: 'Integer',
    name: 'String',
    color: 'String - hexadecimal code',
    json: 'lottie options'
};
...
```

## Using react-lottie

For use the Sustainable Development Goals icons using react-lottie, you can do it easy:

```js
...
import Lottie from 'react-lottie';
import { listGoals, getGoal } from '@digitalbonds/un-sdgs';

let language = 'eng';   // 'eng', 'spa'
let color = 'color';    // 'color', 'white'
let number = 1;         // 1 ... 17
let height = '100px'    // desired height in px or %

render() {
    return(
        <Lottie
            options={getGoal(language, color, number).json}
            height={height}
        />
    )
}
```

## Conclusions

> ⚠️ This first release, contains the data for two languages: english and spanish. Depending on the adoption of the library more features could be added, like more languages and animations. Thanks to use it.