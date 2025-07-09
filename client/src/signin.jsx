import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      {/* When user is not signed in, show the sign-in page */}
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>

      {/* When user is signed in, show main content */}
      <SignedIn>
        <h1 className="text-black text-3xl font-bold mb-4">Welcome 🎉</h1>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default App;
