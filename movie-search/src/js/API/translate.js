import store from "../store";


async function translate(message) {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200503T120715Z.58085cb64a8b2026.632442f6e167a3f17cb48b104a1394583c0e6224&text=${message}&lang=ru-en`;
    const res =  await fetch(url);
    const data = await res.json();
    const translation = data.text;
    store.searchText = translation;
    document.querySelector('.error__text').textContent = `Results for: ${translation}`;
}

export default translate;