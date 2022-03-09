import "./Footer.css"

export default function Footer () {
    return (
        <footer className="bg-dark text-center ">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn-floating m-1 footer__icons" href="#!" role="button"><i className="fab fa-twitter"></i></a>
                    <a className="btn-floating m-1 footer__icons" href="#!" role="button"><i className="fab fa-instagram"></i></a>
                    <a className="btn-floating m-1 footer__icons" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn-floating m-1 footer__icons" href="#!" role="button"><i className="fab fa-github"></i></a>
                </section>
            </div>
        </footer>


    )

}