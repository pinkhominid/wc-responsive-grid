/**
 * wc-responsive-grid
 * pinkhominid
 * MIT Licensed
 *
 * CSS Vars and defaults
 * --wc-responsive-grid-gap: 2rem;
 * default breaks = {sm: 384, md: 576, lg: 768, xl: 960};
 */

import { LitElement, html, css } from 'lit-element';
import { ResponsiveElementMixin } from 'wc-responsive-container';

class ResponsiveGridElement extends ResponsiveElementMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        display: grid;
        grid-gap: var(--wc-responsive-grid-gap, 2rem);
      }
      :host([hidden]) {
        display: none;
      }
      :host(.sm[sm-tmpl~="c2"]),
      :host(.md[md-tmpl~="c2"]),
      :host(.lg[lg-tmpl~="c2"]),
      :host(.xl[xl-tmpl~="c2"]) {
        grid-template-columns: repeat(2, 1fr);
      }
      :host(.sm[sm-tmpl~="c3"]),
      :host(.md[md-tmpl~="c3"]),
      :host(.lg[lg-tmpl~="c3"]),
      :host(.xl[xl-tmpl~="c3"]) {
        grid-template-columns: repeat(3, 1fr);
      }
      :host(.sm[sm-tmpl~="c4"]),
      :host(.md[md-tmpl~="c4"]),
      :host(.lg[lg-tmpl~="c4"]),
      :host(.xl[xl-tmpl~="c4"]) {
        grid-template-columns: repeat(4, 1fr);
      }
      ::slotted(*) {
        box-sizing: border-box;
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
