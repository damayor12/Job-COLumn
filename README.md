# Job COLumn

**Job COLumn** is a job board that considers the cost of living.

## Demo and Screenshots

Watch the demo [here](https://youtu.be/C0Esqn_uidY).

### Desktop, Dark Mode

<img
  src='./screenshots/desktop-dark/01%20-%20Welcome.png'
  alt='Desktop, Dark Mode, Welcome Page'
/>
<img
  src='./screenshots/desktop-dark/02%20-%20Jobs.png'
  alt='Desktop, Dark Mode, Jobs Page'
/>
<img
  src='./screenshots/desktop-dark/03%20-%20Filtered%20Jobs.png'
  alt='Desktop, Dark Mode, Jobs Page Filtered'
/>
<img
  src='./screenshots/desktop-dark/04%20-%20Job%20Details.png'
  alt='Desktop, Dark Mode, Job Details Dialog'
/>

### Mobile, Light Mode

<img
  src='./screenshots/mobile-light/01%20-%20Welcome.png'
  alt='Mobile, Light Mode, Welcome Page'
  width='384'
/>
<img
  src='./screenshots/mobile-light/02%20-%20Jobs.png'
  alt='Mobile, Light Mode, Jobs Page'
  width='384'
/>
<img
  src='./screenshots/mobile-light/03%20-%20Filtered%20Jobs.png'
  alt='Mobile, Light Mode, Jobs Page Filtered'
  width='384'
/>
<img
  src='./screenshots/mobile-light/04%20-%20Job%20Details.png'
  alt='Mobile, Light Mode, Job Details Dialog'
  width='384'
/>

## Table of Contents

- [Demo and Screenshots](#demo-and-screenshots)
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
cd ../server
npm i
```

- Create your `.env` file in the `client` folder as below.

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=<Your_API_Key>
```

- Similarly for the 'server' folder

```bash
HOST_NAME=127.0.0.1
PORT_NUMBER=3001

DB_NAME=<Your_database_name>
DB_USERNAME=<Your_database_username>
DB_PASSWORD=<Your_database_password>
```

- Run the server in a terminal.

```bash
npm run startServer
```

- Populate your database with jobs from the [Reed API](https://www.reed.co.uk/developers/jobseeker).
- Run the client in another terminal (should automatically open to http://localhost:3000/)

```bash
npm run startClient
```

## Usage

This site was created with the [Create React App](https://github.com/facebook/create-react-app).

## Contact

Creator: [Omar Zubaidi](https://github.com/OmarZubaidi/)

Project Link: [on GitHub](https://github.com/OmarZubaidi/Job-COLumn/)

## Acknowledgements

- [Reed](https://www.reed.co.uk/)
- [Numbeo](https://www.numbeo.com/cost-of-living/)