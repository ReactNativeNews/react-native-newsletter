"use strict";

function SponsorPage() {
  function renderStats() {
    return React.createElement(
      "div",
      { "class": "rates-container" },
      React.createElement(
        "div",
        { "class": "rate" },
        React.createElement(
          "div",
          { "class": "rate-title" },
          "11.5+ k"
        ),
        React.createElement(
          "div",
          { "class": "rate-subtitle" },
          "SUBSCRIBERS"
        )
      ),
      React.createElement(
        "div",
        { "class": "rate" },
        React.createElement(
          "div",
          { "class": "rate-title" },
          "30%"
        ),
        React.createElement(
          "div",
          { "class": "rate-subtitle" },
          "OPEN RATE"
        )
      ),
      React.createElement(
        "div",
        { "class": "rate" },
        React.createElement(
          "div",
          { "class": "rate-title" },
          "10%"
        ),
        React.createElement(
          "div",
          { "class": "rate-subtitle" },
          "CLICK THRU RATE"
        )
      )
    );
  }

  function renderRequiredInfo() {
    return React.createElement(
      "div",
      { "class": "required-info-container" },
      React.createElement(
        "h3",
        null,
        "Sponsorship Required Information & Assets"
      ),
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "1 Image (1200x900px, png or jpg)"
        ),
        React.createElement(
          "li",
          null,
          "Title (20 words max)"
        ),
        React.createElement(
          "li",
          null,
          "Description (75 words max)"
        ),
        React.createElement(
          "li",
          null,
          "URL Link (will link on image and title)"
        ),
        React.createElement(
          "li",
          null,
          "Content should be tasteful and appropriate"
        ),
        React.createElement(
          "li",
          null,
          "Provide all information one week before sponsored issue date"
        )
      )
    );
  }

  return React.createElement(
    "div",
    { "class": "root" },
    React.createElement(
      "div",
      { "class": "center-wrapper" },
      React.createElement(
        "h2",
        null,
        "Why sponsor the React Native Newsletter?"
      )
    ),
    React.createElement(
      "p",
      null,
      "Sponsoring the newsletter not only gets your company in front of many high quality React Native developers, but it also helps support the continuing curation and editing of the newsletter."
    ),
    renderStats(),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "There are four sponsorships available per issue available on a first-come, first-serve basis."
      ),
      React.createElement(
        "li",
        null,
        "Sponsorships are $250/issue and must be paid for in-full upfront - credit cards and PayPal are payment options."
      ),
      React.createElement(
        "li",
        null,
        "Sponsorships do not have to be consecutive."
      ),
      React.createElement(
        "li",
        null,
        "Desired dates must be listed at time of purchase and approved by Infinite Red."
      )
    ),
    React.createElement("br", null),
    React.createElement(
      "div",
      { "class": "center-wrapper" },
      React.createElement(
        "h2",
        null,
        "Example Sponsorship"
      ),
      React.createElement("img", { "class": "sponsor-image", src: "../img/sponsor-demo.png" })
    ),
    React.createElement(
      "div",
      { "class": "center-wrapper" },
      React.createElement(
        "h2",
        null,
        "Complete this Form to Sponsor the Newsletter"
      )
    ),
    React.createElement(
      "div",
      { "class": "center-wrapper" },
      React.createElement(
        "iframe",
        {
          src: "https://docs.google.com/forms/d/e/1FAIpQLScqz4Wpdkd2hpNsA2isEnGNR311XNEh1HAmPzUXL99BDBzv2Q/viewform?embedded=true",
          width: "640",
          height: "1000",
          frameborder: "0",
          marginheight: "0",
          marginwidth: "0"
        },
        "Loading\u2026"
      )
    ),
    React.createElement("div", { style: { height: 50 } })
  );
}
var domContainer = document.querySelector("#sponsor_page_content");
ReactDOM.render(React.createElement(SponsorPage, null), domContainer);