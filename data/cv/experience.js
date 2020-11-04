export default [
  {
    title: "PwC (.NET dev)",
    content: `Main work was with Umbraco CMS, server-side rendering, adding and fixing APIs and some work with AngularJS (first version of it). 
    Mostly I fixed bugs and added minor changes (front-end and back-end). 
    The project was a Polish version of PwC-suite. Database – MSSQL.`
  },
  {
    title: "ElifTech (vue + node.js)",
    content: `Main task – creating a plugin client could insert in any website. 
    The purpose of it is to help clients choose a mortgage loan program that fits him the most based on user input if the form. 
    Also pdf have to be generated with all info about current program and sent to user email. 
    Furthermore authentication and admin panel had to be implemented. 
    Used Vue.js for it. Database – PostgreSQL. 
    Backend - Python (Django) which was rewritten to node.js.`
  },
  {
    title: "Freelance",
    content: `Worked mostly with frontend (vue.js).
    <br><br>
    One of the projects was working with Stripe api to manage user cards and payments.`
  },
  {
    title: "Voicenter (node.js + mysql)",
    content: `<p>Had a lot of projects here.</p>
    <p>Big chunk of work was creating and managing procedures and functions in mysql (working with json, aggregation, transactions, generating statuses and error messages) for rest api endpoints. Also generating swagger documentation.</p>
    <hr>
    <h4>Socket.io project.</h4>
    <p>Sending real time data from database to frontend. Additianaly authentication process with existing php api was implemented. Also json structure had to be changed.</p>
    <hr>
    <h4>Fax project.</h4>
    <p>User sends an email and this email is converted to tiff file and send to real fax. After that user receives confirmation email back.</p>
    <p>There was a work with googleScript (to get data form gmail inbox), googleAPI to download message attachments and message content, clamAV linux package to check files on viruses.</p>
    <p>As you can see this process has a lot of steps and takes some time. So multiple workers had to be done and managed (MessageSyncWorker, DownloaderWorker, FaxSenderWorker, EmailConfirmationWorker)</p>
    <hr>
    <h4>SoundFile mini project</h4>
    <p>User sends sound file he can record in vue app or choose on his system. After that this file had to be checked with clamAV for viruses, and be converted to mp3 and ulaw and to 8 bit with bitrate of 8kbps and 1 channel (to reduce file size)</p>
    <hr>
    <h4>Webrtc meeting-manager</h4>
    <p>Implemented managing of sessions, permisions, and keeping sessions alive for Zoom like project. Technologies were used:</p>
    <ul>
    <li>TypeScript (nodejs)</li>
    <li>Janus webrtc server</li>
    <li>Freeswitch</li>
    <li>Rabbitmq/Websocket - Communication channel is provided in .env. (to communicate with janus and freeswitch)</li>
    <li>Redis</li>
    </ul>
    <hr>
    <p>Created a few libraries. So I have experience with jsdoc and npm.</p>
    <hr>
    <p>Had experience working as lead of a few junior devs.</p>
    <hr>
    <p>Interviewing candidates for a job position and creating test tasks for them</p>`
  },
  {
    title: "Panoply.io (react, node.js)",
    content: `<p>Working on tesing anchitecture for react (jest, react-testing library).</p>
    <p>Front-end optimizations like code spliting (lazy loading) and moving project build system from Parcel to Webpack.</p>
    <p>Modifying custom material-ui component library</p>
    <p>Changing circleci configs.</p>
    <p>Adding new endpoints (webhoks) for Shopify</p>`
  },
  {
    title: "My Pet Projects",
    content: `<h4>Docgen</h4>
    <p>The purpose of this project was to quickly generate docs for your rest api.</p>
    <p>Used vue.js on frontend node.js on backend and mongodb as a database.</p>
    <p>Here is the repo: <a href="https://github.com/Repugraf/docgen">Repugraf/docgen</a></p>
    <p>Deployed project here: <a href="https://docgen.work">docgen.work</a></p>
    <hr>
    <h4>Event Awaiter</h4>
    <p>This is the npm package. Created it because I had problem with order of event execution multiple times on backend and frontend.</p>
    <p>Here's the link: <a href="https://www.npmjs.com/package/event-awaiter">event-awaiter</a></p>
    <hr>
    <h4>React Cli</h4>
    <p>Create-react-app is not good enough for me. But configuring webpack every single time is a pain.</p>
    <p>So I decided to cerate my own npm package to suffice my needs</p>
    <p>I was inspired by vue cli so I implemented a similar solution</p>
    <p>Npm link: <a href="https://www.npmjs.com/package/@repugraf/react-cli">@repugraf/react-cli</a></p>`
  }
]