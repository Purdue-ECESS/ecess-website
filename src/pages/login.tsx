import {Button} from "@mui/material";
import Cookies from 'universal-cookie';

export function LoginPage({setUser}) {
    return (
        <div>
            <Button onClick={() => {
                const cookies = new Cookies();
                cookies.set('token', 'Pacman', { path: '/' });
                setUser("token");
            }}>Login</Button>
        </div>
    )
}