
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic=UseAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                navigate('/')
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName

                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res)
                        navigate('/')
                    })
            })

    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;