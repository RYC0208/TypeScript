// function add(a: number, b: number): number {
//   return a + b;
// }
// const sum: number = add(1, 2);
// console.log(sum);

// interface User {
//   name: string;
//   age: number;
// }

// interface Validation {
//   isValid: boolean;
// }

// const testCase2: User & Validation = {
//   name: "jisu",
//   age: 30,
//   isValid: true,
// };

// let arrA: readonly number[] = [1, 2, 3, 4];
// let arrB: ReadonlyArray<number> = [2, 4, 6, 8];

// arrA.push("a");

// function printAnything<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// printAnything<string>(["a", "b", "c"]); // <string>을 써주지 않아도 타입 추론이 가능
// printAnything<number>([1, 2, 3]); // <number>를 써주지 않아도 타입 추론이 가능

