
var product = JSON.parse(localStorage.getItem('product'));
var totalSum = product.reduce(function(sum,ele,index,arr){
return sum+ Number(ele.price);
}, 0);
var totalItems = product.length;
document.querySelector('h3').innerText = 'Total Quantity : ' + " " + totalItems 
document.querySelector('#price').innerText = "Total Price :"+" "+ '$'+totalSum
   document.querySelector('#check').innerHTML = '';

   product.forEach(function(allitem,index) {
   var box = document.createElement('div');
   box.setAttribute('class','box');

    var img = document.createElement('img');
    img.src = allitem.image_url;

     var name = document.createElement('p');
      name.textContent = allitem.seller_type;

      var heading = document.createElement('h4');
      heading.innerText = allitem.name

      var des = document.createElement('p');
      des.innerText = allitem.description;

      var size = document.createElement('p')
     size.innerText = allitem.Size

      var price = document.createElement('h4');
      price.innerText = `$${allitem.price}`
      var rating = document.createElement("p");
      rating.innerText = "⭐⭐⭐⭐ 4.2 (2134)";

      
      var button = document.createElement('button');
   button.innerText = 'Remove item';
   button.addEventListener('click',function(){
       product.splice(index,1);
       localStorage.setItem('product',JSON.stringify(product));
       window.location.reload()
   });
   box.append(img,name,heading,des,price,size,rating,button);
   document.querySelector('#check').append(box);
    
   });

//    var cartData = JSON.parse(localStorage.getItem('cartData'));
//    document.querySelector('#checkout').innerHTML = " ";
   
//    cartData.forEach(function(allitem,index) {
    
//            var boxx = document.createElement('div');
//            boxx.setAttribute('class','boxx')
//            var img = document.createElement('img');
//            img.src = allitem.image_url;

//            var name = document.createElement('p');
//            name.textContent = allitem.name;

//            var price = document.createElement('price');
//            price.textContent = `$${allitem.price}`;

          
//            var button = document.createElement('button');
//            button.innerText = 'Remove item';
//            button.addEventListener('click', function () {
//             cartData.splice(index, 1);
//                localStorage.setItem('cartData', JSON.stringify(cartData));
//                window.location.reload();
//            });

//            boxx.append(img, name, price, button);

//            document.querySelector('#checkout').append(boxx);

//        });display(cardData)