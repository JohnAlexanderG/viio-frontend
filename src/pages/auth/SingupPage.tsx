import { FormEvent } from 'react';
import { useAuthStore } from '../../stores';
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {

  const navigate = useNavigate()

  const singupUser = useAuthStore(state => state.singupUser)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { firstname, lastname, email, password, remember } = event.target as typeof event.target & {
      firstname: { value: string };
      lastname: { value: string };
      email: { value: string };
      password: { value: string };
      remember: { checked: boolean }
    };
    console.log(firstname.value, lastname.value, email.value, password.value, remember.checked);

    try {
      await singupUser(firstname.value, lastname.value, email.value, password.value)
      navigate('/dashboard')
    } catch (error) {
      console.log('Unable to login')
    }
  }


  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Sign up</h1>

      <form onSubmit={onSubmit}>

        <div className="mb-4">
          <label className="block text-gray-600">First name</label>
          <input type="text" name="firstname" autoComplete="off" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Last name</label>
          <input type="text" name="lastname" autoComplete="off" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" name="email" autoComplete="off" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Password</label>
          <input type="password" name="password" autoComplete="off" />
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" name="remember" className="text-blue-500" />
          <label className="text-gray-600 ml-2">Remember Me</label>
        </div>

        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">Forgot Password?</a>
        </div>

        <button type="submit" className="bg-blue-500">Sign up</button>
      </form>
      <div className="mt-6 text-blue-500 text-center">
        <a href="/auth/login" className="hover:underline">Login</a>
      </div>
    </>
  );
};