import { Container } from "lucide-react";

const Navbar = () => {
    return(
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="#"
             className="flex items-center font-bold text-3xl md:text-xl"
            >
                <Container className="mr-2" />
                Cheikh 
                <span className="text-primary"> Dev</span>
            </a>

            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#home"
                       className="btn btn-sm btn-ghost"
                    >
                        Acceuil
                    </a>
                </li>

                <li>
                    <a href="#about"
                       className="btn btn-sm btn-ghost"
                    >
                        A propos
                    </a>
                </li>

                <li>
                    <a href="#experiences"
                       className="btn btn-sm btn-ghost"
                    >
                        Mes expériences
                    </a>
                </li>

                <li>
                    <a href="#projects"
                       className="btn btn-sm btn-ghost"
                    >
                        Mes projets
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Navbar;