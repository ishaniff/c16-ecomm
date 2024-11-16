// fetch("https://pastebin.com/raw/gwU5dtEy")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function fetchData() {
  const response = await fetch("https://pastebin.com/raw/8cuBgwrK");
  const json = await response.json();
  console.log(json.products);
}
fetchData();
