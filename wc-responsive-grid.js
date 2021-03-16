/**
 * wc-responsive-grid
 * pinkhominid
 * MIT Licensed
 *
 * CSS Vars and defaults
 * --wc-responsive-grid-gap: 2rem;
 * --wc-responsive-grid-col-size: minmax(0, 1fr);
 * default breaks = {sm: 384, md: 576, lg: 768, xl: 960};
 */

import { LitElement, html, css } from 'lit-element';
import { ResponsiveElementMixin } from 'wc-responsive-container';

class ResponsiveGridElement extends ResponsiveElementMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        /* Prevent grid blowout via min 0 (https://css-tricks.com/preventing-a-grid-blowout/) */
        --wc-responsive-grid-col-size: minmax(0, 1fr);

        display: grid;
        grid-gap: var(--wc-responsive-grid-gap, 2rem);
        grid-template-columns: var(--wc-responsive-grid-col-size);
      }
      :host([hidden]) {
        display: none;
      }
      * {
        box-sizing: border-box;
      }
      :host(.sm[sm-tmpl~="c2"]),
      :host(.md[md-tmpl~="c2"]),
      :host(.lg[lg-tmpl~="c2"]),
      :host(.xl[xl-tmpl~="c2"]) {
        grid-template-columns: repeat(2, var(--wc-responsive-grid-col-size));
      }
      :host(.sm[sm-tmpl~="c3"]),
      :host(.md[md-tmpl~="c3"]),
      :host(.lg[lg-tmpl~="c3"]),
      :host(.xl[xl-tmpl~="c3"]) {
        grid-template-columns: repeat(3, var(--wc-responsive-grid-col-size));
      }
      :host(.sm[sm-tmpl~="c4"]),
      :host(.md[md-tmpl~="c4"]),
      :host(.lg[lg-tmpl~="c4"]),
      :host(.xl[xl-tmpl~="c4"]) {
        grid-template-columns: repeat(4, var(--wc-responsive-grid-col-size));
      }
      :host(.sm) ::slotted([sm-span~="r2"]),
      :host(.md) > ::slotted([md-span~="r2"]),
      :host(.lg) > ::slotted([lg-span~="r2"]),
      :host(.xl) > ::slotted([xl-span~="r2"]) {
        grid-row: span 2;
      }
      :host(.sm) > ::slotted([sm-span~="c2"]),
      :host(.md) > ::slotted([md-span~="c2"]),
      :host(.lg) > ::slotted([lg-span~="c2"]),
      :host(.xl) > ::slotted([xl-span~="c2"]) {
        grid-column: span 2;
      }
      :host(.sm) > ::slotted([sm-span~="c3"]),
      :host(.md) > ::slotted([md-span~="c3"]),
      :host(.lg) > ::slotted([lg-span~="c3"]),
      :host(.xl) > ::slotted([xl-span~="c3"]) {
        grid-column: span 3;
      }
      :host(.sm) > ::slotted([sm-span~="c4"]),
      :host(.md) > ::slotted([md-span~="c4"]),
      :host(.lg) > ::slotted([lg-span~="c4"]),
      :host(.xl) > ::slotted([xl-span~="c4"]) {
        grid-column: span 4;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

self.customElements.define('wc-responsive-grid', ResponsiveGridElement);
