var n=4;
var a = new Array(5); 
a[0]="<img src=puplogo/20110307151341.jpg border=0>" 
	a[1]="<img src=puplogo/20100927164620.jpg border=0>" 
	a[2]="<img src=puplogo/20100104102215.jpg border=0>" 
	a[3]="<img src=puplogo/20100104102144.jpg border=0>" 
	a[4]="<img src=puplogo/20100104101606.jpg border=0>" 
	
function foo(){
  
      window.name=Math.floor(Math.random()*5); 
      document.write(a[window.name]);
  
}
foo();
