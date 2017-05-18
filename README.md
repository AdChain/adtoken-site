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

Using NPM scripts

```
npm run deploy
```

Deploy to staging

```
npm run deploy-staging
```

## Resources

- [hugo](https://gohugo.io/)
