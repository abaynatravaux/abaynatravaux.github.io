document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();var d=new FormData(this);
var t='Bonjour ABAYNA TRAVAUX,\nNom : '+d.get('nom')+'\nTéléphone : '+d.get('tel')+'\nTravaux : '+d.get('type')+'\n\n'+d.get('msg');
window.open('https://wa.me/212657231193?text='+encodeURIComponent(t),'_blank');
});
