import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border-2 flex flex-col gap-5 max-w-[400px] border-gray-500 rounded-xl p-5">
        <h1 className="text-3xl font-semibold">Sign Up</h1>
        <p className="text-sm text-gray-600">
          Sign up for a free account to start tracking your nutrition
        </p>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border-2 rounded-md"
          />
          <button className="bg-green-500 text-white hover:bg-green-700 rounded-lg p-2 sm:px-4 sm:py-2">
            Sign Up
          </button>
          <p>
            {" "}
            Already have an account?
            <Link href="/auth/signin">
              <span className="text-blue-500 hover:underline"> SignIn</span>
            </Link>
          </p>
        </form>
        <p className="text-center text-sm text-gray-500">
          By signing up, you agree to our{" "}
          <Link href="/terms">
            <span className="text-blue-500 hover:underline">
              Terms of Service
            </span>
          </Link>{" "}
          and{" "}
          <Link href="/privacy">
            <span className="text-blue-500 hover:underline">
              Privacy Policy
            </span>
          </Link>
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm text-gray-500">-- or --</p>
          <div className="flex flex-row items-center gap-4 shadow-md bg-white rounded-xl p-2 cursor-pointer">
              <IconBrandGoogle className="text-black w-8 h-8" />
              <p className="text-center text-sm text-gray-500">
                Sign up with Google
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
