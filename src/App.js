import AuthProvider from "./AuthProvider";
import LoginButton from "./LoginButton";
import Profile from "./Profile";


function App() {
  return (
  
<AuthProvider>
  
  <LoginButton/>
  <Profile/>
  
</AuthProvider>
  );
}

export default App;
