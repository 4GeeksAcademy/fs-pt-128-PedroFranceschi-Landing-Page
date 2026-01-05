import React from "react";

const Footer = () => {
    return (
        <div class="container-fluid bg-dark">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <p class="col-md-4 mb-0 text-body-secondary">© 2025 PF, Inc</p>
                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-primary">About</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;