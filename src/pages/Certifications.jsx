import certifications from '../data/certificationFormation';
import CertificationCard from './certifications/CertificationCard';

const Certifications = () => {
    return (
        <main>
            <section className="certifications-section" id="certifications">
                <h2 className="section-title">Certifications obtenues avec OpenClassrooms</h2>
                <div className="certifications-container">
                    {certifications.map(certification => (
                        <CertificationCard key={certification.id} certification={certification} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Certifications;
