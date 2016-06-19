function searchIndexOf(arr,searchElement){
for(var i=0;i<arr.length;i++){
	if (arr[i]==searchElement){
		return i;
		break;
		}
	}
	return -1;
}

function searchLastIndexOf(arr,searchElement){
for (var i=arr.length-1;i>=0;i--){
	if (arr[i]==searchElement){
		return i;
		break;
		}
	}
	return -1;
}

function reverse1(arr){
	var result=[];
	for (var i=arr.length-1;i>=0;i--)
		result[arr.length-i-1]=arr[i];
	for(var i=0;i<result.length;i++)
		document.write(result[i] + ' ');
}

var a=[1,2,3,7,4,35,24,78,7,3];
document.write("Source array:<br>")
for (var i = 0; i < a.length; i++) {
	document.write(a[i] + ' ');
}

var inputvalue1=prompt('Input value: ');
var element1=searchIndexOf(a,inputvalue1);
(element1!=-1)?document.write("<br>Index: "+element1):document.write("<br> Element is not found.");

var inputvalue2=prompt('Input value: ');
var element2=searchLastIndexOf(a,inputvalue2);
(element2!=-1)?document.write("<br>Index: "+element2):document.write("<br> Element is not found.");

document.write("<br>Reverse array:<br>")
reverse1(a);


