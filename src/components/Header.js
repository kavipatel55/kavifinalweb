import "./component.css";
function Header(){
    const logoSpanStyle = {
        color: "red",
        fontSize: "4rem",
    };
    const logo ={
        fontSize:"4rem"
    }
    return (
        <div className="logo">
            <h5 className="logo">Prime<span className="logo-span">Picks</span></h5>
        </div>
        
    );
}
export default Header;

