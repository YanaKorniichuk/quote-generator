function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: ["generating the quote"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);
