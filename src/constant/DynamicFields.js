export const data = 
  [
  {
    field: {
      fieldId: "1",
      label: "UserName",
      value: "Akshay",
      dataType: "text",
      disable: false,
      errorMsg: "",
      optionsExist: false,
      options: null,
      hideOrShow: true,
    },
  },
  {
    field: {
      fieldId: "2",
      label: "Education",
      value: "12th",
      dataType: "select",
      disable: false,
      errorMsg: "",
      optionsExist: true,
      options: [
        {
          id: 1,
          response: "12th",
        },
        {
          id: 2,
          response: "10th",
        },
        {
          id: 3,
          response: "Bachelor's Degree",
        },
      ],
      hideOrShow: true,
    },
  },
  {
    field: {
      fieldId: "3",
      label: "Gender",
      value: "Male",
      dataType: "radio",
      disable: false,
      errorMsg: "",
      optionsExist: true,
      options: [
        {
          id: 1,
          response: "Male",
        },
        {
          id: 2,
          response: "Female",
        },
        {
          id: 3,
          response: "Others",
        },
      ],
      hideOrShow: true,
    },
  },
  {
    field: {
      fieldId: "1",
      label: "Others Gender Detail",
      value: "",
      dataType: "text",
      disable: false,
      errorMsg: "",
      optionsExist: false,
      options: null,
      hideOrShow: false,
    },
  },
]

// export const data = {
//   login: [
//     {
//       type: "text",
//       name: "name",
//       placeholder: "Full Name",
//       value: "",
//       validations: [
//         {
//           type: "minLength",
//           value: 3,
//           message: "Min. 3 characters",
//         },
//         {
//           type: "required",
//           message: "Full Name is required",
//         },
//       ],
//     },
//     {
//       type: "email",
//       name: "email",
//       placeholder: "E-mail",
//       value: "",
//       validations: [
//         {
//           type: "required",
//           message: "Email is required",
//         },
//         {
//           type: "email",
//           message: "Email no valid",
//         },
//       ],
//     },
//     {
//       type: "password",
//       name: "password",
//       placeholder: "Password",
//       value: "",
//       validations: [
//         {
//           type: "required",
//           message: "Password is required",
//         },
//       ],
//     },
//     {
//       type: "select",
//       name: "rol",
//       label: "Select an option: ",
//       value: "",
//       options: [
//         {
//           value: "admin",
//           desc: "Admin",
//         },
//         {
//           value: "user",
//           desc: "User",
//         },
//         {
//           value: "super-admin",
//           desc: "Super Admin",
//         },
//       ],
//       validations: [
//         {
//           type: "required",
//           message: "Rol is required",
//         },
//       ],
//     },
//     {
//       type: "radio",
//       name: "gender",
//       label: "Gender: ",
//       value: "male",
//       options: [
//         {
//           value: "male",
//           desc: "male",
//         },
//         {
//           value: "female",
//           desc: "female",
//         },
//         {
//           value: "other",
//           desc: "Other",
//         },
//       ],
//       validations: [
//         {
//           type: "required",
//           message: "Gender is required",
//         },
//       ],
//     },
//     {
//       type: "checkbox",
//       name: "terms",
//       typeValue: "boolean",
//       label: "Terms and Conditions",
//       value: false,
//       validations: [
//         {
//           type: "isTrue",
//           message: "Accept the terms!",
//         },
//       ],
//     },
//   ],
// };
