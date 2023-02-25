import Link from "next/link";
import Image from "next/image";

import navbar from "@/styles/Navbar.module.css"
import {useState} from "react";

export default function Navbar() {
    const [loggedin, loggedInState] = useState(false);
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${navbar.layout}`}>
                <div className="container-fluid px-5">
                    <Link className="navbar-brand" href="/">
                        <Image
                            src="/logo.svg"
                            alt="Quiz-leh Logo"
                            width={70}
                            height={35}
                            priority
                        />
                    </Link>
                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/manage">Library</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/play">Play</Link>
                                </li>
                            </ul>
                        <div className="ms-auto">
                            {!loggedin ? <ProfileTab/> : <SignInTab/>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

function ProfileTab() {
    return (
        <>
            <div>
                <Link className="d-flex flex-row" href="/profile">
                    <Image src="/profile.svg" alt="profile" className="rounded-circle border border-dark" width={30} height={30}/>
                    <div className="ms-2 mt-1 text-black-50">
                        Name
                    </div>
                </Link>
            </div>
        </>
    )
}

function SignInTab() {
    return (
        <>
            <div className="hstack gap-3">
                <button className="btn btn-outline-primary">
                  <Link href="/auth/login">Login</Link>
                </button>
                <button className="btn btn-outline-primary">
                    <Link href="/auth/register">Sign Up</Link>
                </button>
            </div>
        </>
    )
}