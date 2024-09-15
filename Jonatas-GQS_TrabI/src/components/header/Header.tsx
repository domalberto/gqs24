import BottonHeader from "../bottons/BottonHeader";

export default function Header() {
return (
    <header className="flex justify-between mx-10 items-center">
        <img src="/src/assets/images/logo_domalberto.jpg" alt="Logotipo Faculdade Dom Alberto" className="h-16" />
        <nav>
            <ul className="flex ">
                <li><BottonHeader text="Home"/></li>
                <li><BottonHeader text="Contato"/></li>
            </ul>
        </nav>
    </header>
);
}
