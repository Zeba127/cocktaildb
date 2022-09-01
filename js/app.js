const loadcocks = async ()=>{
    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
}
loadcocks()