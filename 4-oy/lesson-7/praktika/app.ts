// interface IUser {
//     name: string;
//     pass:string;
// }

// const user:Readonly<IUser> = {
//     name: "John",
//     pass: "123456"
// }
// user.name = "user";
// user.pass = "123456";

// interface IReact {
//     width?: number;
//     height?: number;
// }

// const react1: IReact = { width: 100 };
// const react2: Required<IReact> = { width: 100 };

// interface IReact {
//   width: number;
//   height: number;
// }
// // const react1: IReact = { width: 100 };
// const react2: Partial<IReact> = { width: 100,height: 100 };

// type WWWConfig =Record<"port" | "domin",string|number>
// let config: WWWConfig={
//     port:8080,
//     domin:"http://localhost:8080"
// }

// type WWWConfig1 =Portial<Record<"port" | "domin",string|number>>
// let config1: WWWConfig={
//     port:8080,
//     domin:"http://localhost:8080"
// }

//dekaratorlaar