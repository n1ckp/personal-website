## Nick's Personal Website

Created using [Next.js](https://nextjs.org/). Deployed using [AWS](https://aws.amazon.com/).

### Local development

```bash
npm i
npm run dev # dev server on port 3000
```

### Deployment

Deployed using AWS via GitHub webhook

-   CI/CD => AWS CodePipeline
-   Source => GitHub
-   Build => AWS CodeBuild
-   Deploy => S3 Bucket
