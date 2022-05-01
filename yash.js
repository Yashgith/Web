const searchmovies=()=>{

    const filter = document.getElementById('search').value.toUpperCase();
    
    const ul=document.getElementById('myul');
    
    const li= ul.getElementsByTagName('li');
    
    for(var i=0;i<li.length;i++)
    {
        let a=li[i].getElementsByTagName('a')[0];
        const textvalue= a.textContent||a.innerHTML;
    
        if(textvalue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display='';
        }
        else{
            li[i].style.display='none';
        }
    }
    }


    var btn=document.getElementById('submit')
    btn.addEventListener('click',function(e){
      e.preventDefault()
      var name=document.getElementById('name').value;
      var email=document.getElementById('email').value;
      var phno=document.getElementById('phno').value;
      var body ='name :'+name+'<br/> email:'+email+'<br/> phone:'+phno;
      
      Email.send({
      Host : "smtp.gmail.com",
      Username : "yashshelar1122@gmail.com",
      Password : "fxjxzbejqswozbqq",
      To : 'yashshelar1122@gmail.com',
      From : email,
      Subject : "Sign up",
      Body : body+"You successfully Sign up in our Movie Mania Website."
  }).then(
      message=>{
          alert("Successful")
          if(message=='OK'){
              window.location.replace("yash.html")
          }
  
          else{
              console.error(message)
          }
      }
  );
    })