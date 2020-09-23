<h1 align="left">
  C4 Drawss
  <img align="right" height="28px" src="https://avatars0.githubusercontent.com/u/44036562?s=200&v=4"/>
</h1>

> Serverless backend for [C4 Draw application](https://github.com/c4draw/c4drawing).

<p align="center">
  <a href="#maintainers">Maintainers</a> •
  <a href="#stack">Stack</a> •
  <a href="#installation">Installation</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#run-the-project">Run the project</a> •
  <a href="#tests">Tests</a> •
</p>

## Maintainers

**Team Github**: [@C4Draw/team](https://github.com/orgs/c4draw/people)

## Stack

- Version >= `12.x.x` of Node.
- [Github Actions CI/CD](https://github.com/features/actions)
- [Serverless framework](https://www.serverless.com/)
- NPM

## Endpoints Documentation

This project has all its endpoints documented in **Postman** as a **shared collection**. If you want to see the documentation on the **swagger**.

To get a copy of its endpoints, just click the buttons below:

<p align="center">
  <a href="https://app.getpostman.com/run-collection/8a8c9ec45e6171fb77aa">
    <img src="https://run.pstmn.io/button.svg">
  </a>
  <a href="https://app.swaggerhub.com/apis/thalees/c4-draw/1.0.0">
    <img width="100" height="30" src="https://miro.medium.com/max/1380/1*aKVg84SP5oPV9fwOnbl6yQ.png">
  </a>
</p>

## Installation

### Installing global dependencies

To install serverless framework, run:
```
npm install -g serverless
```
### Installing local dependencies

- Clone this [repository](https://github.com/thalees/c4drawless/)
- Go to the `cd c4drawless` project directory
- Install the dependencies:

```sh
  npm install
```
- Config credentials:

```sh
  sls config credentials --provider aws --key {AWS_ACCESS_KEY_ID} --secret {AWS_SECRET_ACCESS_KEY}
```
- Finally, deploy the application:
```
  sls deploy
```
- Have fun! :tada:

## Architecture

**_Diagram_**

[WIP]

- The application is served using `AWS`
- The implantation is carried out via `Serverless framework`

## Tests

To run lambdas tests, run the following command:

```sh
  sls invoke test
```
---

> Team [@c4drawless/team](https://github.com/orgs/c4draw/people) &nbsp;&middot;&nbsp;
