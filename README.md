
# mattsouza.dev/

#### Description:
This is a CS50 project. It's intended to showcase skills I've learned during and after the course. Indeed, the foundation of my web development knowledge comes from CS50 but other essential skills for creating this website were acquired later. 

Specifically, CS50 helped me with basic HTML, CSS, and JavaScript. However, I must also give credit to an amazing tutor that was vital for my web development journey:
##### The Net Ninja: <https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg>

With his free youtube tutorials, I furthered my skills in HTML, CSS, and JavaScript. More importantly, I learned with him TypeScript, TailwindCSS, Svelte, SvelteKit, and hosting with Firebase -- all these were used in this project. I recommend all beginners to check out his free courses.

---
#### Set up & Files:
Most files were created automatically by the frameworks of my choice. To set up this project with SvelteKit and Tailwind, I referred to the following documentation:
##### Setting up Tailwind CSS with Sveltkit: <https://tailwindcss.com/docs/guides/sveltekit>

Then I set up Firebase hosting by creating my Firebase Blaze account and running the following commands:
```
npm install firebase
```
```
firebase experiments:enable webframeworks
```
```
firebase init hosting
```
When running these commands, I made sure to configure CI/CD with GitHub Actions.

To finish my project set up, I bought my own domain with CloudFlare and linked it to my Firebase Account.

Finally, these are files that I created and/or modified for my personal website.

**src/routes/+layout.svelte**: Since SvelteKit allows Single-Page Applications, this file will render for every page. So I made sure to include in this file the navbar and background of my website, and I also prepared the space for pages to be rendered.

**src/routes/+page.svelte**: This is the landing page of my website, and where I present myself to the viewer. Here, I attached links to my GitHub, LinkedIn, as well as my CV.

**src/routes/+error.svelte**: I created this page to be shown when the route is non-existant in my website (404). It's much better having a custom error page than the default error page.

**src/routes/stack/+page.svelte**: Here I display icons of all the technologies that I'm acquainted with.

**src/routes/projects/+page.svelte**: It's designed to hold all the projects that I want to showcase in the future.