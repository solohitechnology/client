// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const [cookies] = useCookies(['jwt']);

//   // Check if the user is authenticated
//   const isAuthenticated = !!cookies.jwt; // Modify this based on your authentication logic

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
