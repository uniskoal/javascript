
/**
 * * 함수 
 * ? 특정한 목적을 가지고 실행되는 문들의 모음. 
 * ? 매개변수와 코드 블록으로 이루어져 있으며, 필요한 때에 어디서든 호출할 수 있다.
 */

function hello() {
    console.log("Hello World!");
}

hello();

/**
 * * 함수의 장점
 * ? 어디서든지 쉽게 호출할 수 있고, 특정한 기능을 사용할 때마다 일일이 코딩할 필요 없이
 * ? 미리 정의해 자유롭게 꺼내다 쓸 수 있기 때문에, 재사용성 증가에 효과가 있다.
 */

/** 
 * * 함수의 활용
 * ? 자바스크립트에서 함수는 일급 객체로 취급되므로, 값으로써 사용될 수 있다.
 * ? 변수에 인자로 넘길 수도 있고 매개변수로 사용할 수도 있으며, 값을 저장할 수 있는 곳에는
 * ? 함수도 저장할 수 있다. 객체를 효율적으로 생성하는 생성자 함수 또한 "함수"다.
*/

/** 
 * * 함수를 정의하는 방식
 * ? 함수를 정의하는 방식은 3가지가 있다.
 * ! 함수 선언문
 * ! 함수 표현식
 * ! Function 생성자 함수
*/

/** 
 * ! 함수 선언문
 * ? 변수를 선언하듯이 function 함수를 선언하고 정의하는 방식. 정의에는 규칙이 있다.
 * ? 함수명은 절대로 생략할 수 없다.
 * ? 자바스크립트 디버거가 해당 함수를 식별할 수 있는 식별자 사용
 * ? 매개변수가 없더라도 ()를 사용해야 한다.
 * ? 결과값을 반환할 땐 return을 사용.
*/

function Warrior(weapon,hp) {
    this.weapon = weapon;
    this.hp = hp;
    this.equipment = {
        weapon : this.weapon,
        armor : 'cloth armor',
        accessories : {
            equip1 : 'ring',
            equip2 : 'necklace',
        }
    };
    this.character = () => { // ? 매개변수가 없을시 익명함수를 사용할 수 있다.
        console.log(this); // 자신의 정보를 호출 
    }
    this.weaponchange = () => {
        this.equipment.weapon = this.weapon;
    }  
    
}

const player = new Warrior('Wooden Sword','hp');

player.weapon = 'Sword';

player.weaponchange();

player.character();




function objtype(obj) { // ? obj 라는 매개변수를 이용해 특정한 기능을 수행 다른 언어와 달리 타입을 미리 정하지 않는다.
    const objProps = Object.getOwnPropertyNames(obj);

    objProps.forEach((name) => {
        console.log(name + ":" + typeof obj[name]);
    });
}

objtype(player);