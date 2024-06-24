var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/664815b0981b6c564771fe97/1hu4p9ep4';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

window.addEventListener('devicemotion', function(event) {
  var acceleration = event.accelerationIncludingGravity;
  var threshold = 50; // Sesuaikan threshold dengan kebutuhan Anda

  var totalAcceleration = Math.sqrt(
    Math.pow(acceleration.x, 2) +
    Math.pow(acceleration.y, 2) +
    Math.pow(acceleration.z, 2)
  );

  if (totalAcceleration > threshold) {
    swal({
      title: "Perangkat digoyangkan dengan kencang!",
      icon: "warning",
      text: "Apakah website mengalami error? jika ada masalah terkait perangkat anda silahkan hubungi kami via email support@weply.my.id. \n\nJangan khawatir! ini hanya peringatan system apabila perangkat anda mengalami error yang mungkin disebabkan oleh website.",
      buttons: true
    });
  }
});

function showAlert() {
        swal({
      title: "Free Domain!",
      icon: "warning",      
      text: "Gratis domain .my.id setiap pembelian website hosting apapun selama minimal 12 bulan.",
      buttons: true
    });
        };
        
function visitBasic() {
        window.location.href = "/cart/index.html?item=Website+Hosting+Basic+(1 Bln)&harga=10.000"
        };
function visitStandart() {
        window.location.href = "/cart/index.html?item=Website+Hosting+Standart+(1 Bln)&harga=35.000"
        };
function visitSuper() {
        window.location.href = "/cart/index.html?item=Website+Hosting+Super+(1 Bln)&harga=50.000"
        };
function visitCloudBasic() {
        window.location.href = "/cart/index.html?item=Cloud+Hosting+Basic+(1 Bln)&harga=80.000"
        };
function visitCloudStandart() {
        window.location.href = "/cart/index.html?item=Cloud+Hosting+Standart+(1 Bln)&harga=230.000"
        };
function visitCloudSuper() {
        window.location.href = "/cart/index.html?item=Cloud+Hosting+Super+(1 Bln)&harga=485.000"
        };
function visitEmailBasic() {
        window.location.href = "/cart/index.html?item=Email+Hosting+Basic+(1 Bln)&harga=50.000"
        };
function visitEmailStandart() {
        window.location.href = "/cart/index.html?item=Email+Hosting+Standart+(1 Bln)&harga=125.000"
        };
function visitEmailSuper() {
        window.location.href = "/cart/index.html?item=Email+Hosting+Super+(1 Bln)&harga=250.000"
        };
function visitVpsBasic() {
        window.location.href = "/cart/index.html?item=Vps+Cloud+Basic+(1 Bln)&harga=99.000"
        };
function visitVpsStandart() {
        window.location.href = "/cart/index.html?item=Vps+Cloud+Standart+(1 Bln)&harga=129.000"
        };
function visitVpsSuper() {
        window.location.href = "/cart/index.html?item=Vps+Cloud+Super+(1 Bln)&harga=149.000"
        };
function visitVpsExtra() {
        window.location.href = "/cart/index.html?item=Vps+Cloud+Extra+(1 Bln)&harga=179.000"
        };
function visitVpsBisnis() {
        window.location.href = "/cart/index.html?item=Vps+Cloud+Bisnis+(1 Bln)&harga=199.000"
        };
function visitLogoBasic() {
        window.location.href = "/cart/index.html?item=Logo+Basic&harga=149.000"
        };
function visitLogoStandart() {
        window.location.href = "/cart/index.html?item=Logo+Standart&harga=299.000"
        };
function visitLogoSuper() {
        window.location.href = "/cart/index.html?item=Logo+Super&harga=449.000"
        };
function visitSosmedBasic() {
        window.location.href = "/cart/index.html?item=Kelola+Sosmed+Basic+(1 Bln)&harga=699.000"
        };
function visitSosmedStandart() {
        window.location.href = "/cart/index.html?item=Kelola+Sosmed+Standart+(1 Bln)&harga=1.349.000"
        };
function visitSosmedSuper() {
        window.location.href = "/cart/index.html?item=Kelola+Sosmed+Super&harga=2.499.000"
        };
function visitSosmedExtra() {
        window.location.href = "/cart/index.html?item=Kelola+Sosmed+Extra&harga=4.799.000"
        };
function visitSosmedVip() {
        window.location.href = "/cart/index.html?item=Kelola+Sosmed+VIP&harga=12.799.000"
        };
function visitSosmedAkhir() {
        window.location.href = "/cart/index.html?item=Kelola+Sosmed+Akhir&harga=34.849.000"
}