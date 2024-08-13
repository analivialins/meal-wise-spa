
import { useState } from 'react';
import useLogin from '../../hooks/authorization/useAuthorization';
import { useDevice } from '../../hooks/useDevice';
import AuthorizationMobile from './layout/mobile'
import AuthorizationWeb from './layout/web';

export default function Authorization() {
    const { isMobile } = useDevice()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate: login, isError, error } = useLogin();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        login({ email, password });
    };

    return (
        <>
        { isMobile ?

            <AuthorizationMobile
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />
            :
            <AuthorizationWeb
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
            />

        }
        </>
    );
}
