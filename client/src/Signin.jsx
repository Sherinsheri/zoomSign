import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import Home from './Home';
import { darkTheme } from './components/clerkTheme';
function Signin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      {/* When user is not signed in, show the sign-in page */}
      <SignedOut>
        <SignIn routing="hash" appearanse={darkTheme} />
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
