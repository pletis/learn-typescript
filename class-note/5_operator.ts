// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

var seho: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value == 'number'){
        value.toLocaleString();
    }
    else if (typeof value == "string") {
      value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage("hello");
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// <유니온 타입>
// 인터페이스 두개를 연결 했을때 공통된 속성만 접근 가능하다
// 두개 타입의 교집합
// function askSomeone(someone: Developer | Person) {
//     someone.name
//     // someone.skill
//     // someone.age
// }
// askSomeone({ name: '디벨로터', skill: '웹 개발'});
// askSomeone({ name: "캡틴", age: 100 });

// <인터섹션 타입>
// 두개 타입의 합집합
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill
    someone.age
}
askSomeone({ name: '박동현', skill: '웹 개발', age: 26});


// var seho: string | number | boolean;
// var capt: string & number & boolean;
