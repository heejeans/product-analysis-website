export default function NavBar(items){
    return `
    <nav>
            <ul>
                <li><a href="#${items[0]}">Instagram</a></li>
                <li><a href="#${items[1]}">Snapchat</a></li>
                <li><a href="#${items[2]}">Compare and Contrast</a></li>
                <li><a href="#${items[3]}">Conclusion</a></li>
            </ul>
        </nav>`
}