function soma(n1,n2){
	var res;
	res=n1+n2;
	document.write(res);
}

function dt_txt(){
	var date=new Date();
	var meses=new Array("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago","Set","Out","Nov","Dez");
	var dsem=new Array("Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb");

	document.write(dsem[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear());

}