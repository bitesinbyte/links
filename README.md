![CodeQL](https://github.com/bitesinbyte/links/actions/workflows/codeql.yml/badge.svg?branch=main)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/bitesinbyte/links/badge)](https://securityscorecards.dev/viewer/?uri=github.com/bitesinbyte/links)
# Links

Simple and easy to use links organiser for your social media accounts

## Configuration

There are two configuraiton file

1. [`config.json`](https://github.com/bitesinbyte/links/blob/main/data/config.json)

```json
{
  "mainImageSource": "Main Image Path",
  "mainImageAlt": "Main Image Alt",
  "brandName": "Brand Name",
  "description": "A short description",
  "socialLinks": {
    "instagram": "instagram link",
    "linkedin": "",
    "blog": "",
    "web": "",
    "github": "",
    "facebook": "",
    "snapchat": "",
    "tiktok": "",
    "twitter": "",
    "youtube": ""
  }
}
```

2. [`links.json`](https://github.com/bitesinbyte/links/blob/main/data/links.json)

```json
{
  "blog": [
    {
      "title": "Medium",
      "link": "link"
    },
    {
      "title": "Bites in byte - Blog",
      "link": "link"
    }
  ],
  "instagram": [],
  "linkedin": [],
  "web": [],
  "github": [],
  "facebook": [],
  "snapchat": [],
  "tiktok": [],
  "twitter": [],
  "youtube": []
}
```

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

clone the repository, run the following command:

```bash
git clone https://github.com/bitesinbyte/links.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## License

Licensed under the [MIT license](https://github.com/bitesinbyte/links/blob/main/LICENSE).
