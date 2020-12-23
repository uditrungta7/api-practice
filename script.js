console.log("hello")

function getData(){
// Make a request for a user with a given ID
axios.get('https://reqres.in/api/users')
  .then(function (response) {
    // handle success
    console.log(response);
    var i=0;
    for(i=0;i<response.data.data.length;i++) {
    document.getElementById('class1').innerHTML+= `<h1>${response.data.data[i].email}</h1>`
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}
  
 