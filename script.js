function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
function showToast(t){var e=document.getElementById('toast');e.textContent=t;e.style.display='block';setTimeout(function(){e.style.display='none'},2500)}
function copyIp(){var ip=document.getElementById('serverIp').innerText;navigator.clipboard.writeText(ip).then(function(){showToast('✅ آی‌پی کپی شد! توی ماینکرفت وارد شو')})}
function openLogin(){document.getElementById('loginModal').classList.add('show')}
function closeLogin(){document.getElementById('loginModal').classList.remove('show')}
function switchTab(w){
document.getElementById('tabLogin').classList.toggle('active',w==='login');
document.getElementById('tabRegister').classList.toggle('active',w==='register');
document.getElementById('formLogin').style.display=w==='login'?'block':'none';
document.getElementById('formRegister').style.display=w==='register'?'block':'none';
}
function doRegister(){
var u=document.getElementById('regUser').value.trim();
var p=document.getElementById('regPass').value;
var p2=document.getElementById('regPass2').value;
var m=document.getElementById('loginMsg');
if(u.length<3){m.textContent='❌ یوزرنیم باید حداقل ۳ حرف باشد';return}
if(p.length<4){m.textContent='❌ رمز باید حداقل ۴ کاراکتر باشد';return}
if(p!==p2){m.textContent='❌ رمزها با هم match نیست';return}
localStorage.setItem('ultramine_'+u,p);
m.textContent='✅ اکانت '+u+' ساخته شد! حالا وارد شو';
switchTab('login');
showToast('ثبت‌نام موفق! خوش اومدی '+u);
}
function doLogin(){
var u=document.getElementById('loginUser').value.trim();
var p=document.getElementById('loginPass').value;
var m=document.getElementById('loginMsg');
var saved=localStorage.getItem('ultramine_'+u);
if(saved && saved===p){m.textContent='✅ خوش برگشتی '+u+'!';showToast('ورود موفق!');setTimeout(closeLogin,1200)}
else{m.textContent='❌ یوزرنیم یا رمز اشتباه است'}
}
function buyRank(rank){
var user=prompt('یوزرنیم ماینکرفت‌ت رو وارد کن تا '+rank+' برات فعال بشه:');
if(!user) return;
var gateway='https://www.zarinpal.com/pg/StartPay/XXXXXX?rank='+rank+'&user='+encodeURIComponent(user);
showToast('در حال انتقال به درگاه برای '+rank+' ...');
setTimeout(function(){window.open(gateway,'_blank')},800);
}
var online=1248;
setInterval(function(){
online+=Math.floor(Math.random()*11)-5;
if(online<900) online=900;
document.getElementById('onlineCount').innerText=online.toLocaleString('en');
},3000);
document.getElementById('loginModal').addEventListener('click',function(e){if(e.target===this) closeLogin()});