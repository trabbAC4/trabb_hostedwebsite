function main(){
	var a=parseFloat(document.getElementById("firstnum").value)
	var b=parseFloat(document.getElementById("secondnum").value)
	if(document.getElementById("add").checked==true){
		var i=a+b
	}else if(document.getElementById("subtract").checked==true){
		var i=a-b
	}else if(document.getElementById("multiply").checked==true){
		var i=a*b
	}else{
		var i=a/b
	}
	var result=document.getElementById("result")
	result.innerHTML=i
}
function reset(){
	document.getElementById("form").reset()
	var a=document.getElementById("result")
	a.innerHTML=""
}