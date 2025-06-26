// ==UserScript==
// @name         Jira focus on issue details
// @namespace    https://lts.lehigh.edu/
// @version      2025-06-26
// @description  Hide the unnecessary UI widgets when zooming in on a Jira issue
// @author       Maccabee Levine
// @match        https://*.atlassian.net/jira/core/projects/*/issues/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  var styles = document.createElement('style');
  styles.innerHTML = `

    /* left nav */
    .css-1btht9s {
      display: block;

      > ._kqswh2mm._1pbyg9ti._14c1glyw {
        display: none;
      }
    }

    /* top nav */
    #ak-jira-naviation {
      display: none;
    }
    ._154i14em {
      top: 0 !important;
    }

    /* project nav */
    #ak-main-content {
      width: 100%;
      height: 100%;

      > span > div {
        padding-top: 0;

        > div:nth-child(1) {
          display: none;
        }
      }
    }
    div[data-layout-container='true'] {
      display: block;
    }
    #ak-project-view-navigation {
      display: none;
    }

    /* right sidebar: keep but 67% zoom, so normal if the page is at 150% */
    [id="issue.views.issue-details.issue-layout.container-right"] {
      zoom: .67;
    }

    /* bottom blank space */
    #ak-project-view-navigation + div {
      height: 100%;

      > div {
        height: 100%;
      }
    }

`;
  document.head.appendChild(styles);
  document.getElementById('ak-jira-navigation').style.display = 'none';

})();