"use strict"

function SponsorPage() {
  function renderStats() {
    return (
      <div class="rates-container">
        <div class="rate">
          <div class="rate-title">11.5+ k</div>
          <div class="rate-subtitle">SUBSCRIBERS</div>
        </div>
        <div class="rate">
          <div class="rate-title">30%</div>
          <div class="rate-subtitle">OPEN RATE</div>
        </div>
        <div class="rate">
          <div class="rate-title">10%</div>
          <div class="rate-subtitle">CLICK THRU RATE</div>
        </div>
      </div>
    )
  }

  function renderRequiredInfo() {
    return (
      <div class="required-info-container">
        <h3>Sponsorship Required Information & Assets</h3>
        <ul>
          <li>1 Image (1200x900px, png or jpg)</li>
          <li>Title (20 words max)</li>
          <li>Description (75 words max)</li>
          <li>URL Link (will link on image and title)</li>
          <li>Content should be tasteful and appropriate</li>
          <li>Provide all information one week before sponsorship issue</li>
        </ul>
      </div>
    )
  }

  return (
    <div class="root">
      <div class="center-wrapper">
        <h2>Why sponsor the React Native Newsletter?</h2>
      </div>
      <p>
        Sponsoring the newsletter not only gets your company in front of many high quality React Native developers, but it also helps
        support the continuing curation and editing of the newsletter.
      </p>
      {renderStats()}
      <ul>
        <li>There are four sponsorships available per issue available on a first-come, first-serve basis.</li>
        <li>Sponsorships must be paid for in full upfront, are non-refundable, and non-transferrable.</li>
        <li>Sponsorships do not have to be consecutive - desired dates must be listed at time of purchase and approved by Infinite Red.</li>
      </ul>
      <br />
      <div class="center-wrapper">
        <h2>Example Sponsorship</h2>
        <img class="sponsor-image" src="../img/sponsor-demo.png" />
      </div>
      {renderRequiredInfo()}
      <p>
        <a href="mailto:frank@infinite.red?subject=React%20Native%20Newsletter%20Sponsorship">Email us</a> with any questions or to inquire
        about a sponsorship.
      </p>
    </div>
  )
}
let domContainer = document.querySelector("#sponsor_page_content")
ReactDOM.render(<SponsorPage />, domContainer)
