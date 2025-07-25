import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import Home from './Home';
import { darkT } from './components/clerkTheme.jsx';


function Signin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      {/* When user is not signed in, show the sign-in page */}
      <SignedOut>
        <SignIn appearance={{
            variables: darkT.variables,
            elements: darkT.elements,
          }}
          signUpUrl="/signup"
           />
      </SignedOut>

      {/* When user is signed in, show main content */}
      <SignedIn>
        <Home/>
        
      </SignedIn>
    </div>
  );
}

export default Signin;
