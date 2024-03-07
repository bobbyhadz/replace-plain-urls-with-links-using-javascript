console.log('bobbyhadz.com');

function replaceUrlsWithLinks(text) {
  const expressionWithHttp =
    /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi;

  const regex = new RegExp(expressionWithHttp);

  return text.replace(regex, "<a href='$1'>$1</a>");
}

const container = document.getElementById('container');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  container.innerHTML = replaceUrlsWithLinks(
    container.innerHTML,
  );
});
