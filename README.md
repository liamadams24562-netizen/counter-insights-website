# Counter Insights website

A simple website for Counter Insights, Liam Adams’s data consulting business. The pages are ordinary HTML and CSS. There is nothing to install and no build step.

## Put the site on Netlify

You will need a free [Netlify](https://www.netlify.com) account and this project on GitHub (it already is, if you are reading this there).

1. Go to [netlify.com](https://www.netlify.com) and sign in with GitHub. Approve access if GitHub asks.
2. Choose **Add new site**, then **Import an existing project**.
3. Choose GitHub, then this repository (`counter-insights-website`).
4. Check the build settings before you deploy:
   - **Build command:** leave this empty. Do not type `npm` or anything else.
   - **Publish directory:** `.` (a single dot). That means “the root of the repository”.
   - These settings are also in `netlify.toml`, so Netlify should fill them in for you. If the boxes are blank or wrong, set them as above.
5. Deploy the site. Netlify will give you an address ending in `.netlify.app`. Open it and click through the pages.

The contact form only works on the live Netlify site. Opening the files on your computer will not send a message.

## Turn on email when someone uses the form

1. In Netlify, open your site.
2. Go to **Forms** (it may sit under **Site configuration** or project configuration, depending on the menu).
3. After the first deploy you should see a form named **contact**. If you do not, deploy again and check that `contact.html` is in the root of the repository.
4. Add a **form notification** by email to **liamadams24562@gmail.com**.
5. Netlify sends a confirmation email to that address. Open it and confirm, or the notifications will not arrive.
6. On the live site, send yourself a test message. You should land on the thank-you page, and the message should appear under Forms (and in your inbox once the notification is confirmed).

The form already includes a hidden honeypot field to catch simple spam.

## When you have your web address

The site currently uses this address in a few places:

`https://counter-insights-website.netlify.app`

Netlify may give you a slightly different one. When you know the real address — the `.netlify.app` one, or a domain you connect later — search the project for `counter-insights-website.netlify.app` and replace it everywhere. It appears in:

- `sitemap.xml`
- `robots.txt`
- the `canonical` and Open Graph tags in each HTML page

Then commit and push. Netlify will redeploy.

## Connect a domain later

When you buy a domain:

1. In Netlify, open **Domain management** and choose **Add a domain**.
2. Follow Netlify’s steps to point the domain’s DNS at Netlify. Netlify will also offer a free HTTPS certificate.
3. Replace `https://counter-insights-website.netlify.app` in the files listed above with your real address, including `https://`.

## Changing the words

Each page is an `.html` file in the root of the project. The shared look is in `css/styles.css`. The phone number and email appear on every page (header is the same, and the footer repeats them), so if either changes, update every page.

There are no prices on the site on purpose. Packages describe what is included, then invite people to ask for a quote.

The brochure file is `assets/counter-insights-brochure.pdf`. Replace that file if you update the brochure, and keep the same name so the download links still work.

Fonts are Fira Sans (the same typeface as the brochure), self-hosted under `fonts/`. The licence is `fonts/OFL.txt`.
