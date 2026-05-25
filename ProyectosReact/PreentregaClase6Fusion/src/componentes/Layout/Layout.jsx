import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children }) {
    return (
        <div className="app">
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    );
} 

const styles = {
    
}

export default Layout;