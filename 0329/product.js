//product.js
//객체 방식
var product={
    name: 'Sonata',
    price: 2000000,
    toString: function(){
        console.log('%s의 가격은 %d입니다. ',
        this.name, this.price);
    }
};
//불러오는 쪽이 값입력 불가능
module.exports=product;
//module은 생략 불가능