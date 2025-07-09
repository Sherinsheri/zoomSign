import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import Home from './Home';
function Signin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      {/* When user is not signed in, show the sign-in page */}
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>

      {/* When user is signed in, show main content */}
      <SignedIn>
        <Home/>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Signin;
