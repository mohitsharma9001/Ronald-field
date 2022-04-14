let dataArr = JSON.parse(localStorage.getItem('data'));
let bagArr = JSON.parse(localStorage.getItem('bag')) || [];
let container = document.querySelector('.best-container')
function displayData (data) {
    container.innerHTML=null;
    data.map(function (ele){
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src=ele.image_url;
        let title = document.createElement('p');
        title.innerText= ele.name;
        let desc = document.createElement('p');
        desc.innerText= ele.description;
        let price = document.createElement('p')
        price.innerText= `$${ele.price}`;
        let rp = document.createElement('p')
        rp.innerText = "Retail Price";
        let rating = document.createElement('p')
        
        rating.innerText = "⭐⭐⭐⭐ 4.2 (2134)";
        let btn = document.createElement('button');
        btn.innerText = "ADD TO BAG";
        btn.addEventListener('click',function(){
            bagFn(ele)
        });

        div.append(img,title,desc,price,rp,rating,btn);
        container.append(div);
    })
}
displayData(dataArr)
function bagFn(ele){
    bagArr.push(ele);
    localStorage.setItem('bag',JSON.stringify(bagArr));
}