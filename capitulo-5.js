function Header() {
    return "<h1>Develop. Preview. Ship.</h1>";
}

function HomePage() {
    return `
        <div>
            ${Header()}
            <p>Construindo interfaces com componentes React.</p>
        </div>
    `;
}

document.getElementById("root").innerHTML = HomePage();