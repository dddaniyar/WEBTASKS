document.querySelector("#addStudent").addEventListener('click',function(){
  var bool = 'true'

  var Name = document.querySelector("#name").value
  var Surname = document.querySelector("#surname").value
  var faculty = document.querySelector("#faculty").value


  if (Name === '') {
    document.querySelector("#name").classList.add("error")
    bool='false'
  }
  else{
    document.querySelector("#name").classList.remove("error")
  }
  if (Surname === '') {
    document.querySelector("#surname").classList.add("error")
    bool = 'false'
  }
  else{
    document.querySelector("#surname").classList.remove("error")
  }
  if (faculty == -1) {
    document.querySelector("#faculty").classList.add("error")
    bool='false'
  } else {
    document.querySelector("#faculty").classList.remove("error")
  }
  if (bool =='true') {
    var table = document.querySelector("#students")
    table.innerHTML+="<tr><td>"+document.querySelector("#name").value+"</td><td>"+document.querySelector("#surname").value+"</td><td><strong>"+document.querySelector("#faculty").value+"</strong></td></tr>"

    document.querySelector("#name").value=""
    document.querySelector("#surname").value=""
    document.querySelector("#faculty").value=""
}
});
