// ==UserScript==
// @name         Jira focus on issue details
// @namespace    https://lts.lehigh.edu/
// @version      2025-07-29a
// @description  Hide the unnecessary UI widgets when zooming in on a Jira issue
// @author       Maccabee Levine
// @match        https://*.atlassian.net/jira/core/projects/*/issues/*
// @match        https://*.atlassian.net/browse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  var styles = document.createElement('style');
  styles.innerHTML = `

    /* left nav */
    nav#\\:rh\\: {
      display: none;
    }

    /* top nav */
    header#\\:r0\\: {
      display: none;
    }

    /* project top nav (on /issues/ pages */
    header#ak-project-view-navigation {
      display: none;
    }

    /* main content area on individual issue page (browse) */
    div#\\:r30\\: {
      /* no top blank space */
      position: initial;
      /* no bottom blank space */
      height: auto;
    }

    /* main content area on /issues/ pages */
    div#\\:r2g\\: {
      /* no top blank space */
      position: initial;
      /* no bottom blank space */
      height: auto;
    }
    div[data-vc="issue-app-container"] {
      padding-top: 0;
      > div:first-child {
        display: none;
      }
    }


    /* right sidebar: keep but 67% zoom, so normal if the page is at 150% */
    [id="issue.views.issue-details.issue-layout.container-right"] {
      zoom: .67;
    }

`;
  document.head.appendChild(styles);

})();