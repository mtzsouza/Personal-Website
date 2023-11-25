
## Set up:
To set up with SvelteKit and Tailwind, I referred to the following documentation:
##### Tailwind CSS with Sveltkit: <https://tailwindcss.com/docs/guides/sveltekit>

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
