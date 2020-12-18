
/**
 * * 동적 타이핑 언어인 자바스크립트
 * ? 동적 타입이라는 건 값이 할당될 때 엔진에 의해 타입이 결정되는 것을 의미한다.
 * ? 또한 값이 연산될 때도 여러 개의 타입이 있을 경우, 하나의 타입으로 일치시키려고 하기 때문에
 * ? 어떤 값이 할당되는 지에 대해 모든 경우를 알고 있지 않는 한 예측하기가 어려울 수 있다.
 */

function sum(a,b) {
    return a + b;
}

/** 
 * ? 단순한 더하기 함수를 만들었다 할 지라도, 매개변수의 정해진 타입이 없기 때문에
 * ? 모든 타입의 값이 들어갈 수 있습니다.
*/

sum('x','y'); // 'xy'

/** 
 * ? + 연산자는 수를 더하는 연산자 이기도 하지만 문자열 연결 연산자로써도 사용된다.
 * ? 만약 피연산자에 문자열이 하나라도 들어갈 경우, 문자열 연결 연산자로 작동해
 * ? 나머지 피연산자가 문자열로 강제 변환될 수 있다.
 * ? 타입 체킹은 이와 같이 개발자의 의도와는 다르게 자바스크립트 엔진이 작동하는 것을 방지하기 위해
 * ? 사전에 체크를 해줘야 한다. 
*/

/**
 * * typeof
 * ? 연산자 부분에서도 알아봤듯이 타입을 알아보는 연산자로 사용된다.
 * ? 피연산자의 데이터 타입을 문자열로 반환한다.
 */

const type = ['',1,NaN,[],{},function () {},true,undefined,null,];

for( data of type ) {
    console.log(typeof data);
}

/**
 * ? 위에 코드에는 null을 object로 반환하는데 이게 설계적 오류라고 한다. 그래서
 * ? null 같은 경우에는 === 를 쓰자. 
 * ? 또한 객체의 종류 구분없이 object라고만 하기 때문에 원시값을 제외하곤
 * ? 제대로 구분할 수 없다는 단점이 있다. 
 * ! 이번에는 세세하게 구분하고 타입을 체크하는걸 공부해볼 것이다.
 */


 /**
  * * Object 객체를 이용한 타입의 반환
  * ? 자바스크립트 내장 객체인 Object 프로퍼티를 사용하면 손쉽게 객체의 타입을 정확하게
  * ? 반환할 수 있다.
  */

/** 
 * ? Object.prototype.toString() 
 * ? toString()은 대상값을 문자열로 변환하고 객체를 나타내는 값또한 문자열로 반환한다.
*/

var num = 1; 

var str = num.toString(); 

console.log(typeof str);

/** 
 * ? 문자열을 반환하는 것으로 if 같은 조건문에 사용할 수 있다.
*/

/** 
 * * Function.prototype.call 메서드
 * ? 모든 데이터 타입 값의 타입을 정확하게 알아낼 수 있다.
*/

Object.prototype.toString.call(undefined); // [object undefined]
Object.prototype.toString.call(Math); // [object Math]
Object.prototype.toString.call(null); // [object null]
Object.prototype.toString.call({}); // [object Object]
Object.prototype.toString.call(document); // [object HTMLDocument] 

/** 
 * ? call을 통해 타입의 값을 toString으로 문자열로 반환했다. 이를 통해
 * ? 타입 변환에 대한 대비를 할 수 있다.
*/




