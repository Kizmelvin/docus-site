// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:


 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  overviewSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: ["index"],
    },
  ],
  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorial",
      items: ["tutorial/tutorial"],
    },
  ],
  referenceSidebar: [
    {
      type: "category",
      label: "Reference",
      items: ["api-reference"],
    },
  ],
};

export default sidebars;
