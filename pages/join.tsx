import CyberSeo from "@/components/CyberSeo";
import styles from "@/styles/Join.module.scss";

export default function Join() {
  return (
    <>
      <CyberSeo title="Join Us" description="Join ACM Cyber at UCLA!" />
      <div className="page">
        <div className="content">
          <h1>Join Us</h1>

          <img
            src="/images/cyber-symposium.png"
            alt="AI x Cyber Symposium Spring 2023."
            className={styles.joinImg}
          />

          <p>
            Want to join UCLA's premier cybersecurity club?{" "}
            <strong>All experiences welcome!</strong> Our membership form opens
            at the start of every quarter. Join our{" "}
            <a href="https://discord.com/invite/j9dgf2q">Discord</a> to stay up
            to date! All of our events are open to the public, so feel free to
            join us at any time!
          </p>

          <h2>What do I have to do?</h2>
          <p>
            ACM Cyber is an entirely student-run organization and would not
            exist without the contributions from all of our members! If you'd
            like to become an active member of ACM Cyber, complete one of the
            following requirements.
          </p>
          <ul>
            <li>
              <strong>Cyber Academy:</strong> Submit one writeup for a challenge
              you've solved by the end of the quarter.
            </li>
            <li>
              <strong>Cyber Lab:</strong> Participate in a project with Cyber
              Lab. At the end of the quarter, create a blog post with your
              project group about your work and present your creation to the
              club!
            </li>
            <li>
              <strong>Psi Beta Rho:</strong> Submit one writeup for a challenge
              you've solved by the end of the quarter and attend at least one
              CTF on the weekend
            </li>
          </ul>

          <h2>What's in it for me?</h2>
          <ul>
            <li>
              <strong>Community:</strong> Join a community of like-minded peers
              enthusiastic about hacking! Your photo and bio will also be added
              to our <a href="/members">members page</a>!
            </li>
            <li>
              <strong>Cyber Pals:</strong> Our mentorship/peer program that
              groups you with members of the club for social & academic support!
            </li>
            <li>
              <strong>Cyber Summer Research Fellowship (CSRF):</strong> Members
              who complete all requirements will be guaranteed a position in
              CSRF, our summer research program, where you work on a security &
              privacy project advised by a mentor!
            </li>
          </ul>
          <br />
        </div>
      </div>
    </>
  );
}
