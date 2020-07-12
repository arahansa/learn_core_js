

new 연산자로 Constructor 를 호출하면 instance 가 만들어지는데, 이 instance 의 생략가능한 프로퍼티인 __proto__ 는 Contstructor 의 prototype 을 참조한다!


자바스크립트는 함수에 자동으로 객체인 prototype  프로퍼티를 생성해놓는데 해당 함수를 생성자 함수로서 사용할 경우, 즉 new 연산자와 함께 함수를 호출한 경우, 그로부터 생성된 인스턴스에는 숨겨진 프로퍼티인 __proto__ 가 자동으로 생성되며, 
이 프로퍼티는 생성자 함수의 prototype 프로퍼티를 참조한다.

165p 어떤 데이터의 __proto__ 프로퍼티 내부에 다시 __proto__ 프로퍼티가 연쇄적으로 이어진 것을 프로토타입 체인.
