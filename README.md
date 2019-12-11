# Installation

Clone

```
npm i
npm start
```

# Deployment

Change homepage in package.json
"homepage": "https://'GITHUB USERNAME'.github.io/'GITHUB REPO'"

```
npm run deploy
```

# Don't forget to replace

- [ ] public/favicon.ico
- [ ] public/index.html line 11: meta og:image tag
- [ ] public/index.html line 17: title
- [ ] src/images/background.webp
- [ ] src/components/content/ContentProjects.js all deployed and repo links
- [ ] src/components/Header.js anchor tag link
- [ ] src/components/columns/InfoColumn.js deployed text
- [ ] package.json "homepage" link line 3

public/index.html line 11 and line 17

```

// this is a preview image for linkedin/facebook
// take a screenshot and upload it to imgur
// replace the link or delete the meta tag
<meta property="og:image" content="https://i.imgur.com/gyiI8MQ.png">

...

<title>David Ko Resume</title>
```

src/components/columns/InfoColumn.js line 23

```
<div className="info-item mt-auto pb-5 d-flex flex-column">
  <span>This resume is made with React.js and</span>
  <span>is deployed on Github Pages:</span>
  <span className="mt-3">davidholyko.github.io/resume</span>
</div>
```

### Steps to print

use firefox
find print this in the html. print
