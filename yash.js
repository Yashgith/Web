const searchmovies = ()=>{

    let filter= document.getElementById('search').value.toUpperCase();

    let ul= document.getElementById('myul');

    let li= ul.getElementsByTagName('li');

    for(var i=0;i<li.length;i++)
 {
     let a=li[i].getElementsByTagName('a')[0];

     let textvalue= a.textContent || a.innerHTML;

     if(textvalue.toUpperCase().indexOf(filter) > -1){
         li[i].style.display='';
     }
     else{
         li[i].style.display='none';
     }
 }
 }

 