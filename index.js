
function fun(){
var object=new XMLHttpRequest();
object.onreadystatechange=function(){
  if(this.readyState==4 && this.status==200){
    var img=document.getElementById("myimg");
    var title=document.getElementById("title");
    var fname=document.getElementById("fname");
      var gender=document.getElementById("gender");
    var lname=document.getElementById("lname");
    var city=document.getElementById("city");
     var state=document.getElementById("state");
    var x=JSON.parse(this.responseText);
    var url=x.results[0].picture.large;
     fname.innerHTML=x.results[0].name.first;
    lname.innerHTML=x.results[0].name.last;
    title.innerHTML=x.results[0].name.title;
    gender.innerHTML=x.results[0].gender;
    city.innerHTML=" city-"+x.results[0].location.city;
    state.innerHTML="("+x.results[0].location.state+")";
    img.src=url;


  }
}
object.open('GET','https://randomuser.me/api',true);
object.send();
}
function request(){
  var warning=document.getElementById("warning");
  warning.innerHTML="Sign up for send request";

}
function signin(){
  var loginlink=document.getElementById("loginlink");

  if(loginlink.innerHTML=="login"){
  var logintext=document.getElementById("warning");
  logintext.innerHTML="Login";
  var logindes=document.getElementById("logindes");
  logindes.innerHTML="login to findsome";
  var repeat=document.getElementById("repeat").style.display="none";
  var repeat1=document.getElementById("repeat1").style.display="none";
  var signupbtn=document.getElementById("signupbtn");
  signupbtn.innerHTML="Login";
  var loginlink=document.getElementById("loginlink");
  loginlink.innerHTML="signup";
   
  }
  else{
    var logintext=document.getElementById("warning");
  logintext.innerHTML="Sign up";
  var logindes=document.getElementById("logindes");
  logindes.innerHTML="signup to findsome";
  var repeat=document.getElementById("repeat").style.display="";
  var repeat1=document.getElementById("repeat1").style.display="";
  var signupbtn=document.getElementById("signupbtn");
  signupbtn.innerHTML="Signup";
  var loginlink=document.getElementById("loginlink");
  loginlink.innerHTML="login";
     

  }
  


}

  function goBack() {
    window.history.back();
  }
  
