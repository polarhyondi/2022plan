var AllHealth = {
setBackgroundColor : function(color){
var healthlist=document.querySelectorAll('#health');
var i = 0;
while(i<healthlist.length){healthlist[i].style.backgroundColor=color; i=i+1;}
}
}
var AllStudy = {
setBackgroundColor : function(color){
var studylist=document.querySelectorAll('#study');
var i = 0;
while(i<studylist.length){studylist[i].style.backgroundColor=color; i=i+1;}
}
}
var AllBook = {
setBackgroundColor : function(color){
var booklist=document.querySelectorAll('#book');
var i = 0;
while(i<booklist.length){booklist[i].style.backgroundColor=color; i=i+1;}
}
}
var AllRecord = {
setBackgroundColor : function(color){
var recordlist=document.querySelectorAll('#record');
var i = 0;
while(i<recordlist.length){recordlist[i].style.backgroundColor=color; i=i+1;}
}
}
var AllCulture = {
setBackgroundColor : function(color){
var culturelist=document.querySelectorAll('#culture');
var i = 0;
while(i<culturelist.length){culturelist[i].style.backgroundColor=color; i=i+1;}
}
}
var AllHobby = {
setBackgroundColor : function(color){
var hobbylist=document.querySelectorAll('#hobby');
var i = 0;
while(i<hobbylist.length){hobbylist[i].style.backgroundColor=color; i=i+1;}
}
}
var AllSelfmanagement = {
setBackgroundColor : function(color){
var selfmanagementlist=document.querySelectorAll('#selfmanagement');
var i = 0;
while(i<selfmanagementlist.length){selfmanagementlist[i].style.backgroundColor=color; i=i+1;}
}
}
var AllPeople = {
setBackgroundColor : function(color){
var peoplelist=document.querySelectorAll('#people');
var i = 0;
while(i<peoplelist.length){peoplelist[i].style.backgroundColor=color; i=i+1;}
}
}

function colorchanger(self){
if(self.value === 'rainbow'){
  AllHealth.setBackgroundColor('#FF0000');
  AllStudy.setBackgroundColor('#FF8400');
  AllBook.setBackgroundColor('#FFF500');
  AllRecord.setBackgroundColor('#36FF00');
  AllCulture.setBackgroundColor('#00FFFA');
  AllHobby.setBackgroundColor('#0053FF');
  AllSelfmanagement.setBackgroundColor('#8900FF');
  AllPeople.setBackgroundColor('#FF00E2');
  self.value='pastel';
}else{
  AllHealth.setBackgroundColor('#FF8A8A');
  AllStudy.setBackgroundColor('#FFB38A');
  AllBook.setBackgroundColor('#FFF28A');
  AllRecord.setBackgroundColor('#91FF8A');
  AllCulture.setBackgroundColor('#8AFFF8');
  AllHobby.setBackgroundColor('#8A9CFF');
  AllSelfmanagement.setBackgroundColor('#C48AFF');
  AllPeople.setBackgroundColor('#FF8AFB');
  self.value='rainbow'
}
}
