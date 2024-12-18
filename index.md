# Auto-Right is a web component that provides the current date


## Why does this exist?

In a word: convenience. On a static site the copyright date usually only gets updated at build time. This web component aims to allow for progressive enhancement of the copyright date.

## Contributions welcome?
Yup! As needs arise I'll be working on the component and any issues submitted but community contributions are welcome.

# How to use

Technically this web component can be used anywhere the current year needs to be loaded or progressively enhanced.
You can put the current year or a server-side code snippet in between <auto-right>. Please be aware the web component will replace anything you put in between the tags with the current year.

`
<p>Copyright ®<auto-right>{% year %}</auto-right></p>
<!-- At build time the year variable is generated from the server and is 
later progressively enhanced to guarantee the latest year -->
<!-- Nunjucks example ⬆️ -->

<p>Copyright ®<auto-right>2022</auto-right></p>
<!-- Regular HTML ⬆️ -->

`