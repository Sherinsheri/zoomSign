import { SignUp, SignedOut, SignedIn, UserButton } from '@clerk/clerk-react';
import Home from './Home';
import { darkT } from './components/clerkTheme.jsx';

function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SignedOut>
        <SignUp appearance={{
            variables: darkT.variables,
            elements: darkT.elements,
          }}
          signInUrl="/"
           />
      </SignedOut>

      <SignedIn>
        <Home />
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default Signup;
