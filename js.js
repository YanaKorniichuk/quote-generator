function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let quoteInstructions = document.querySelector("#quote-instructions");
  let apiKey = "b34226b304tb91d11415bf1aef0ee4bo";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}`;
  let context =
    "You are very knowledgeable AI Assistant that knows a lot of quotes of successfull people, your task is to give short quote about topic from the user instructions";
  let prompt = `generate the quote about ${quoteInstructions.value}`;

  axios.get(apiURL).then(displayQuote);
}

let quoteForm = document.querySelector("#quote-form");
quoteForm.addEventListener("submit", generateQuote);
