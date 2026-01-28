import React from 'react';
import '../App.css';
import microsoft from '../images/certifs/microsoft.png'
import LinuxDevOps from '../images/certifs/LinuxDevOps.png'
import UxDesignLogo from '../images/certifs/UxDesignLogo.jpg'
import cyberSecurity from '../images/certifs/cyberSecurity.jpg'
import OracleCert2 from '../images/certifs/OracleCert2.png'

function Certifications() {

    /* add certifications here */

    const certifications = [
       
        {
            link: "https://drive.google.com/file/d/1c54KdfYfaB5xlFCs7Q1eHsOU7Fd_dd5Y/view?usp=sharing",
            certImgSrc: LinuxDevOps,
            certImgAlt: "Introduction to shell scripting for DevOps",
            certImgTitle: "Introduction to shell scripting for DevOps"
        },
        {
            link: "https://drive.google.com/file/d/18d4BLbYbSK-oMAE5eMdqghkKUEP_c8mm/view?usp=sharing",
            certImgSrc: UxDesignLogo,
            certImgAlt: "Foundations of User Experience (UX) Design",
            certImgTitle: "Foundations of User Experience (UX) Design"
        },
        {
            link: "https://drive.google.com/file/d/17wtAZeAAc-kScnZKy6ZT6ESROqyOWMm6/view?usp=sharing",
            certImgSrc: cyberSecurity,
            certImgAlt: "Cybersecurity Awareness",
            certImgTitle: "Cybersecurity Awareness"
        },
        {
            link: "https://drive.google.com/file/d/1La52X0l684sjALInh2KsZQpfeowNpjon/view?usp=sharing",
            certImgSrc: microsoft,
            certImgAlt: "Coding for Employment Africa",
            certImgTitle: "Coding for Employment Africa"
        },
        {
            link: "https://drive.google.com/file/d/17lZdtNn9RDwBzafafi_Czy0z_BPyGWcR/view?usp=sharing",
            certImgSrc: OracleCert2,
            certImgAlt: "Oracle-PDTP training",
            certImgTitle: "Oracle-PDTP training"
        }
    ]

    return (
        <section id="certifications" className="container">
            <h2>Certifications</h2>
            <div id="image-certifs">
                {certifications.map((certification, id) => (
                <div className='certifs' key={id}>
                    <a href={certification.link} target="_blank" rel="noreferrer" title={certification.certImgTitle}>
                        <img height="150px" width="150px" src={certification.certImgSrc} alt={certification.certImgAlt} />
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;