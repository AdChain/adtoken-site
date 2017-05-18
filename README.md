# adtoken site

> [https://adtoken.com](https://adtoken.com)

## Install

```bash
brew install hugo
```

## Development

Run server

```bash
$ hugo server
```

Stylesheet

`static/css/styles.css`

Scripts

`static/js`

Assets

`static/assets`

## Build

```bash
$ hugo
```

## S3 sync

```bash
$ aws s3 sync ./public s3://adtoken.com --acl=public-read --profile=metax --region=us-west-2
```

Make sure to invalidate AWS CloudFront cache after deployment

https://console.aws.amazon.com/cloudfront/home?region=us-west-2#distribution-settings:E3MTBLBQ6FT84K

```bash
aws cloudfront create-invalidation --distribution-id E28OQWP5J96YQH --paths /index.html /assets/* /* --profile=metax
```

Using NPM scripts

```
npm run deploy
npm run invalidate-cache
```

Deploy to staging

```
npm run deploy-staging
```

## Resources

- [hugo](https://gohugo.io/)
