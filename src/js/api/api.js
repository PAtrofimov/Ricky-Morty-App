
export const getData = url => {
  console.log(`https://rickandmortyapi.com/api/${url}`);
    return fetch( `https://rickandmortyapi.com/api/${url}`).then(res => {
      if(!res.ok) {
        return;
      }
      
      return res.json();
    })
  }