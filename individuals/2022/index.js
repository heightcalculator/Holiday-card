function hideStuff(id) {
  document.getElementById(id).style.display = 'none';
}

const date = new Date();
if((date.getDate() < 25 && date.getMonth() + 1 === 12 ) && date.getYear()+1900 === 2022){
      //hideStuff("everything");
      alert("Sorry, Nothing available yet. Check back on Christmas Day :)")
      }else{
      document.getElementById('everything').style.display = 'block';
      }

   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  console.log("Mobile")
} else {
  console.log("Desktop")
}
   console.log((date.getMonth() + 1)+"/"+date.getDate()+"/"+(date.getYear()+1900))
document.getElementById("reply").onclick=function(){
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href='sms:+1-770-569-3987'
} else {
  window.location.href='mailto:aarush@aarushmagic.com'
}}
document.getElementById("card").onclick=function(){window.location.href='https://www.punchbowl.com/ecards/share/ec096b138fd47eb0d646'};
