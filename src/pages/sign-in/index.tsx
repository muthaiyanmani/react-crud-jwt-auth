import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../api/sign-in/signIn";

import { useUser } from "../../services/user.context";

export default function SignInComponent() {
  const { mutate } = useSignIn();
  const navigate = useNavigate();
  const user = useUser();
  useEffect(() => {
    if (
      user?.userState?.user &&
      Object.getOwnPropertyNames(user.userState.user).length !== 0
    )
      navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => mutate(values),
  });

  return (
    <>
      <div className="h-screen px-4 bg-white text-slate-900 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center h-full max-w-8xl md:px-10 lg:flex-row justify-evenly">
          <div>
            <div className="w-full max-w-md px-8 py-4 space-y-8 rounded-lg bg-slate-800 md:px-16 md:py-12">
              <div>
                <h2 className="mt-6 text-2xl font-medium text-center text-white">
                  Sign in to your account
                </h2>
              </div>
              <br />
              <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="relative block w-full h-10 px-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none lg:w-80 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <br />
                  <div>
                    <input
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      className="relative block w-full h-10 px-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center"></div>

                  <div className="text-sm">
                    <button
                      onClick={() => alert("Contact Administrator")}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
