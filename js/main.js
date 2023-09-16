fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
         console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });