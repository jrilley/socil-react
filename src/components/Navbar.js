import style from './../styles/Navbar.module.css';

console.log(style);

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.links}>
                <a href="#" className={style.active}>Profile</a>
            </div>
            <div className={style.links}>
                <a href="#">Messages</a>
            </div>
            <div className={style.links}>
                <a href="#">News</a>
            </div>
            <div className={style.links}>
                <a href="#">Music</a>
            </div>
            <div className={style.links}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;