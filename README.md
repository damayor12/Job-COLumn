# Job COLumn

**Job COLumn** is a job board that considers the cost of living.

## Screenshots

<!-- Insert screenshots here -->

## Table of Contents

- [Screenshots](#screenshots)
- [Table of Contents](#table-of-contents)
- [About the Site](#about-the-site)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the Site

**Job COLumn** is a job board that considers the cost of living.

It compares the minimum salary in a listed job with your current salary! Magic!

It doesn't display jobs that don't list a salary nor any jobs outside of a set list of the larger cities in the UK.

Of all the jobs that do have salaries, it will show you which jobs will give you a better quality of life in terms of purchasing power.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

You need to have installed:

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- The latest LTS version of Node (I used v17.4.0)

```bash
npm install npm@latest -g
```

- A [Reed](https://www.reed.co.uk/) account and [API key](https://www.reed.co.uk/developers/jobseeker).

### Installation

- Clone the repo

```bash
git clone https://github.com/OmarZubaidi/Job-COLumn.git
```

- Install NPM packages

```bash
npm i
cd client
npm i
```

- Create your `.env` file in the `client` folder as below.

```bash
API_KEY=<Your_API_Key>
```

- Run the project (should automatically open to http://localhost:3000/)

```bash
npm start
```

## Usage

This site was created with the [Create React App](https://github.com/facebook/create-react-app).

## Contact

Creator: [Omar Zubaidi](https://github.com/OmarZubaidi/)

Project Link: [on GitHub](https://github.com/OmarZubaidi/Job-COLumn/)

## Acknowledgements

- [Reed](https://www.reed.co.uk/)
- [Numbeo](https://www.numbeo.com/cost-of-living/)