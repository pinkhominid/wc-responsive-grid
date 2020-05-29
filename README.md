# wc-responsive-grid

Web component to simplify responsive content area layout using CSS Grid.

[Container query](https://wicg.github.io/container-queries/) behavior provided by [wc-responsive-container](https://www.npmjs.com/package/wc-responsive-container).

## Install

```js
npm i wc-responsive-grid
```

## Example

```html
<style>
  :root {
    --wc-responsive-grid-gap: 2rem;
  }
  article {
    width: 85%;
    height: 85vh;
    margin: 50px auto;
  }
  section {
    background-color: lightgray;
    outline: 3px dotted tomato;
    padding: var(--wc-responsive-grid-gap);
  }
  wc-responsive-grid {
    padding: var(--wc-responsive-grid-gap, 2rem);
    outline: 3px dotted skyblue;
  }
</style>
<script type="module">
  // Using es-dev-server or your favorite bundler...
  import 'wc-responsive-grid';

  // ...or Snowpack
  // import '/web_modules/wc-responsive-grid.js';

  // ...or Import Maps
  // See example/index.html
</script>
<body>
  <article>
    <wc-responsive-grid lg-tmpl="r2 c2" breaks='{"sm": 300, "md": 500, "lg": 700, "xl": 900}'>
      <section lg-span="r2 c1">
        1
      </section>
      <section lg-span="r2 c1">
        2
      </section>
    </wc-responsive-grid>
  </article>
  <article>
    <wc-responsive-grid lg-tmpl="r2 c2" breaks='{"sm": 300, "md": 500, "lg": 700, "xl": 900}'>
      <section lg-span="r1 c1">
        1
      </section>
      <section lg-span="r1 c1">
        2
      </section>
      <section lg-span="r1 c1">
        3
      </section>
      <section lg-span="r1 c1">
        4
      </section>
    </wc-responsive-grid>
  </article>
  <article>
    <wc-responsive-grid lg-tmpl="r2 c3" breaks='{"sm": 300, "md": 500, "lg": 700, "xl": 900}'>
      <section lg-span="r1 c1">
        1
      </section>
      <section lg-span="r2 c2">
        2
      </section>
      <section lg-span="r1 c1">
        3
      </section>
    </wc-responsive-grid>
  </article>
  <article>
    <wc-responsive-grid lg-tmpl="r2 c3" breaks='{"sm": 300, "md": 500, "lg": 700, "xl": 900}'>
      <section lg-span="r1 c1">
        1
      </section>
      <section lg-span="r1 c2">
        2
      </section>
      <section lg-span="r1 c2">
        3
      </section>
      <section lg-span="r1 c1">
        4
      </section>
    </wc-responsive-grid>
  </article>
  <article>
    <wc-responsive-grid xl-tmpl="r2 c3" breaks='{"sm": 300, "md": 500, "lg": 700, "xl": 900}'>
      <section xl-span="r1 c1">
        1
      </section>
      <section xl-span="r1 c1">
        2
      </section>
      <section xl-span="r1 c1">
        3
      </section>
      <section xl-span="r1 c2">
        4
      </section>
      <section xl-span="r1 c1">
        5
      </section>
    </wc-responsive-grid>
  </article>
</body>
```

## Run Example

```sh
git clone git@github.com:pinkhominid/wc-responsive-grid.git
cd wc-responsive-grid
npm i
npm start
```
