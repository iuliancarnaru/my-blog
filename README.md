
## Prerequisites
The project requires NodeJS v.4+

To install NodeJS visit [nodejs download page](https://nodejs.org/en/download/) download the appropiate package for your operatin system, click on the downloaded file, open it and follow the installation procees. If you don't know much about it, just click ALL the NEXT and or INSTALL buttons and choose "I agree" when prompted and you should be fine.

## Installation
**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
$ npm i
```
or
```bash
$ npm install
```
## Usage
To run the project in development mode and open a local server that synchronizes across multiple devices use:
```bash
npm start
```
or
```bash
npm run dev
```
To build the project for production use:
```bash
npm run prod
```
To automatically deploy your project to GitHub pages and make it available at https://[your-username].github.io/[your-project-name] use:
```bash
npm run deploy
```
## Style

The project supports both ***embed*** and ***external*** style sheets. You can have none, one or the other, or both of them.

### Single page application style
When you're building a single page app or website, there is no point in having the style sheets loaded from an external file and I'll explain why: the point of loading external style sheets is to allow the browser to cache those files and once you visit another web page of the same website, instead of making another request(s) for the style sheet file(s) to the server and having to download them, if there is no change, the browser will load them from the local drive. In a single page, there is no other page to go to therefore the external file technique doesn't apply.
### Multi page application style
In this scenario you can have either both ***embed*** and external or just external. The most common scenario is to have only one external style sheet file to be loaded and most of the time that's just fine.

If you want to improve your SEO and user experience even further, I strongly recommend to use a combination of both ***embed*** and external. The ***embed*** style sheet should only contain the minimum amount of styles for the initial visible part of the page to render. The rest of the styles can be put in the external CSS file.
