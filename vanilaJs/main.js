const searchInput = document.querySelector('.SearchInput__input')
const suggestionUl = document.querySelector('.Suggestion ul')
searchInput.addEventListener('input', async () => {
  console.log(searchInput.value)
    const result = await axios.get(`https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${searchInput.value}`)
    console.log(result)
    const suggestionUlLi = document.querySelectorAll(".Suggestion ul li")
    suggestionUlLi.forEach(el => {
      el.remove()
    })
     const liEls = result.data.map(el => {
        const liEl = document.createElement('li')
        liEl.innerText=el
        return liEl
    });
    console.log(liEls)
    suggestionUl.append(...liEls)

})  