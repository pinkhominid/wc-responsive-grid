/**
 * wc-responsive-grid
 * pinkhominid
 * MIT Licensed
 *
 * CSS Vars and defaults
 * --wc-responsive-grid-gap: 2rem;
 * --wc-responsive-grid-r1-min-ht: auto;
 * --wc-responsive-grid-r1-max-ht: 300px;
 * --wc-responsive-grid-r2-min-ht: 300px;
 * --wc-responsive-grid-r2-max-ht: auto;
 * default breaks = {sm: 384, md: 576, lg: 768, xl: 960};
 */

import { LitElement, html, css } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import 'wc-responsive-container';

class ResponsiveGridElement extends LitElement {
  static get properties() {
    return {
      breaks: String,
      smTmpl: { type: String, attribute: 'sm-tmpl' },
      mdTmpl: { type: String, attribute: 'md-tmpl' },
      lgTmpl: { type: String, attribute: 'lg-tmpl' },
      xlTmpl: { type: String, attribute: 'xl-tmpl' },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        /* min-height is ideal here so it will fill it's container but grow beyond if needed,
           unfortunately it doesn't work as you'd expect in Chromium and Safari; using height */
        height: 100%;
      }
      :host[hidden] {
        display: none;
      }
      wc-responsive-container {
        box-sizing: border-box;
        display: grid;
        /* Chromium mis-calcs min-height: 100% when grid-gap is used; overshoots by the gap size */
        min-height: 100%;
        grid-gap: var(--wc-responsive-grid-gap, 2rem);
      }
      wc-responsive-container.sm[sm-tmpl~="r2"],
      wc-responsive-container.md[md-tmpl~="r2"],
      wc-responsive-container.lg[lg-tmpl~="r2"],
      wc-responsive-container.xl[xl-tmpl~="r2"] {
        grid-template-rows:
          minmax(
            var(--wc-responsive-grid-r1-min-ht, auto),
            var(--wc-responsive-grid-r1-max-ht, 300px)
          )
          minmax(
            var(--wc-responsive-grid-r2-min-ht, 300px),
            var(--wc-responsive-grid-r2-max-ht, auto)
          );
      }
      wc-responsive-container.sm[sm-tmpl~="c2"],
      wc-responsive-container.md[md-tmpl~="c2"],
      wc-responsive-container.lg[lg-tmpl~="c2"],
      wc-responsive-container.xl[xl-tmpl~="c2"] {
        grid-template-columns: repeat(2, 1fr);
      }
      wc-responsive-container.sm[sm-tmpl~="c3"],
      wc-responsive-container.md[md-tmpl~="c3"],
      wc-responsive-container.lg[lg-tmpl~="c3"],
      wc-responsive-container.xl[xl-tmpl~="c3"] {
        grid-template-columns: repeat(3, 1fr);
      }
      wc-responsive-container ::slotted(*) {
        box-sizing: border-box;
      }
      wc-responsive-container.sm ::slotted([sm-span~="r2"]),
      wc-responsive-container.md > ::slotted([md-span~="r2"]),
      wc-responsive-container.lg > ::slotted([lg-span~="r2"]),
      wc-responsive-container.xl > ::slotted([xl-span~="r2"]) {
        grid-row: span 2;
      }
      wc-responsive-container.sm > ::slotted([sm-span~="c2"]),
      wc-responsive-container.md > ::slotted([md-span~="c2"]),
      wc-responsive-container.lg > ::slotted([lg-span~="c2"]),
      wc-responsive-container.xl > ::slotted([xl-span~="c2"]) {
        grid-column: span 2;
      }
      wc-responsive-container.sm > ::slotted([sm-span~="c3"]),
      wc-responsive-container.md > ::slotted([md-span~="c3"]),
      wc-responsive-container.lg > ::slotted([lg-span~="c3"]),
      wc-responsive-container.xl > ::slotted([xl-span~="c3"]) {
        grid-column: span 3;
      }
    `;
  }

  render() {
    return html`
      <wc-responsive-container
        breaks=${ifDefined(this.breaks)}
        sm-tmpl=${ifDefined(this.smTmpl)}
        md-tmpl=${ifDefined(this.mdTmpl)}
        lg-tmpl=${ifDefined(this.lgTmpl)}
        xl-tmpl=${ifDefined(this.xlTmpl)}
      >
        <slot></slot>
      </wc-responsive-container>
    `;
  }
}

self.customElements.define('wc-responsive-grid', ResponsiveGridElement);
