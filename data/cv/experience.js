export default [
  {
    title: "PwC",
    content: `<p>
    Main work was with <strong>Umbraco</strong> CMS (.Net), server-side rendering,
    adding and fixing APIs (C#) and some work with <strong>AngularJS</strong> (first version of it).
    </p>
    <p>
    Mostly I fixed bugs and added minor changes (front-end and back-end). 
    The project was a Polish version of PwC-suite.
    </p>
    <p>
      Tech Stack: <strong>C#, js, jquery, MSSQL, AngularJS</strong><br>
      Deployment - <strong>Azure</strong> services<br>
      Tracking - <strong>Azure DevOps</strong>
    </p>`
  },
  {
    title: "ElifTech",
    content: `<p>Main task – creating a plugin (frontend app) client could insert in any website.</p> 
    <p>
      The purpose of it is to help clients choose a mortgage loan program that
      fits him the most based on user input in the form.
    </p>
    <p>Also pdf have to be generated with all info about current program and sent to user email.</p> 
    <p>Furthermore authentication and admin panel had to be implemented/maintained.</p>
    <p>
      Tech Stack: <strong>Vue.js, PostgreSQL, Python (Django)</strong><br>
      Deployment - <strong>DigitalOcean</strong> vps instance (Droplet)<br>
      Tracking - <strong>GitHub, Trello</strong>
    </p>`
  },
  {
    title: "Freelance",
    content: `<p>Worked mostly with frontend.</p>
    <ul>
      <li>Working with Stripe api to manage user cards and payments.</li>
      <li>Working with <strong>Electron</strong> and adding features to existing project (photo gallery)</li>
    </ul>`
  },
  {
    title: "Voicenter",
    content: `<p>Had a lot of projects here.</p>
    <p>
      Big chunk of work was creating and managing procedures and functions in <strong>MySQL</strong>
      (working with json, aggregation, transactions, generating statuses and error messages)
      for rest api endpoints. Also generating <strong>swagger</strong> documentation.
      As a backend language <strong>Node.js</strong> was used.
    </p>
    <p>
      For most of the projects <strong>Bitbucket</strong> and <strong>Jira</strong> was used to track them.<br>
      All of them were deployed on company servers (they have their own data center).
    </p>

    <hr>

    <h4>Socket.io project.</h4>
    <p>
      Sending real time data from database to frontend.
      Additionally authentication process with existing php api was implemented.
      Also json structure had to be changed.
    </p>
    <p>Tech Stack: <strong>Node.js, Socket.io, MySQL, Redis</strong></p>

    <hr>

    <h4>Fax project.</h4>
    <p>
      User sends an email and this email is converted to tiff file and send to real fax.
      After that user receives confirmation email back.
    </p>
    <p>
      There was a work with <strong>googleScript</strong> (to get data form gmail inbox),
      <strong>googleAPI</strong> to download message attachments and message content, then files were checked viruses.
      After that <strong>FreeSwitch</strong> was used to send actual fax.
    </p>
    <p>
      As you can see this process has a lot of steps and takes some time.
      So multiple workers had to be done and managed
      (MessageSyncWorker, DownloaderWorker, FaxSenderWorker, EmailConfirmationWorker)
    </p>
    <p>Tech Stack: <strong>Node.js, MySQL, GoogleScript, Google SDK, ClamAV, FreeSwitch</strong></p>

    <hr>

    <h4>SoundFile mini project</h4>
    <p>
      User sends sound file he can record in vue app or choose on his system.
      After that this file had to be checked for viruses,
      and be converted to mp3 and ulaw and to 8 bit with bitrate of 8kbps and 1 channel
      (to reduce file size)
    </p>
    <p>Tech Stack: <strong>Node.js, MySQL, ClamAV, SoX</strong></p>

    <hr>

    <h4>Webrtc meeting-manager</h4>
    <p>
      Implemented managing of sessions, permissions, and keeping sessions alive for <strong>Zoom</strong> like project.
      Technologies were used:
    </p>
    <ul>
    <li>TypeScript (nodejs)</li>
    <li>Janus webrtc server</li>
    <li>Freeswitch</li>
    <li>Rabbitmq/Websocket - Communication channel is provided in .env. (to communicate with janus and freeswitch)</li>
    <li>Redis</li>
    </ul>

    <hr>

    <p>
      Created a few libraries and published then on <strong>npm</strong>.
      Used <strong>jsdoc</strong> to type and annotate them.
    </p>

    <hr>

    <p>Had experience working as lead of a few junior devs.</p>

    <hr>

    <p>Interviewing candidates for a job position and creating test tasks for them</p>`
  },
  {
    title: "Panoply.io",
    content: `
    <p>This company offers central cloud database.</p>
    <p>
      You put any data there
      (json, csv, google sheets, sql or no sql database link, etc.)
      and it will convert this data into relational data, then will put it into data warehouse.
      After that you could query this data with sql or use it in other apis.
    </p>
    <p>Here is some of the work I did for this company:</p>
    <ul>
    <li>Defining testing architecture for <strong>react</strong> (<strong>jest, react-testing library</strong>).</li>
    <li>Front-end optimizations like code splitting (lazy loading)
      and moving project build system from <strong>Parcel</strong> to <strong>Webpack</strong>.
    </li>
    <li>Modifying custom <strong>material-ui</strong> component library</li>
    <li>Changing <strong>CircleCI</strong> configs, optimizing <strong>dockerfile</strong>.</li>
    <li>Adding new endpoints and optimizing existing ones</li>
    <li>Implementing new designs for old pages/components</li>
    <li>Working with <strong>BigQuery</strong> API for monitoring and managing quota</li>
    <li>Working with <strong>Stripe</strong> API and it's webhooks</li>
    <li>Fixing security vulnerabilities (sql injections, unintended joins, ability to decrypt encrypted data)</li>
    <li>Attending meetings about planning, designing and architecture of the software</li>
    <li>Code reviews of PRs from team members</li>
    </ul>
    <p>
      Tech Stack - <strong>React, Node.js, PostgreSQL, MongoDB, Docker</strong><br>
      Deployment - <strong>AWS (EKS)</strong><br>
      Tracking - <strong>Jira</strong>
    </p>`
  },
  {
    title: "Itera, Sector Alarm",
    content: `
      <p>Itera is a Norwegian company that's providing outsourcing services for Norwegian customers (<b>Sector Alarm</b> in this case).</p>
      <p>Main task here is to develop an app for sales reps to sell home security equipment.</p>
      <p>The app was developed from scratch so there was a requirement to help team and architect with the architecture of the app and the backend.</p>
      <p>
        My part of a job was frontend apps. 
        Created a few different apps and shared npm component library for them which was deployed on Azure Artifacts Storage.
      </p>
      <p>
        Tech Stack - <strong>React (with redux), Rollup (for shared library), TypeScript, .Net (C#), MSSQL</strong><br>
        Deployment - <strong>Azure</strong><br>
        Tracking - <strong>Azure DevOps, Jira</strong>
      </p>
    `
  },
  {
    title: "My Pet Projects",
    content: `<h4>Docgen</h4>
    <p>The purpose of this project is to quickly generate docs for your rest api.</p>
    <p>
      Tech Stack: <strong>Node.js, Vue.js, MongoDB</strong><br>
      Deployment - <strong>DigitalOcean</strong>
    </p>
    <p>Here is the repo: <a href="https://github.com/Repugraf/docgen">Repugraf/docgen</a></p>
    <p>Deployed project is here: <a href="https://docgen.work">docgen.work</a></p>

    <hr>

    <h4>Event Awaiter</h4>
    <p>I've created this library because I had problem with order of event execution multiple times on backend and frontend.</p>
    <p>Npm: <a href="https://www.npmjs.com/package/event-awaiter">event-awaiter</a></p>

    <hr>

    <h4>React Cli</h4>
    <p>Create-react-app is not good enough for me. But configuring webpack every single time is a pain.</p>
    <p>So I decided to cerate my own npm package to suffice my needs</p>
    <p>I was inspired by vue cli so I implemented a similar solution</p>
    <p>Npm: <a href="https://www.npmjs.com/package/@repugraf/react-cli">@repugraf/react-cli</a></p>

    <hr>

    <h4>Store</h4>
    <p>
      I've used redux for some time in react apps. It's good enough but it requires some boilerplate.
      Main issue is a need to implement the reducers, which are useless in my opinion.
    </p>
    <p>This library fixes this issue. It's very minimalistic and easy to use. No setup is required.</p>
    <p>Npm: <a href="https://www.npmjs.com/package/@repugraf/store">@repugraf/store</a></p>`
  }
]
