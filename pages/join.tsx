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
            <strong>All levels of experience welcome!</strong> Join our{" "}
            <a href="/discord" className="link">
              Discord
            </a>{" "}
            to stay up to date! All of our events are open to the public, so
            feel free to join us at any time!{" "}
            {/* Our{" "}
            <strong>membership form</strong> is now open! If you are interested
            in joining some of our projects, Psi Beta Rho, etc. please fill it
            out to officially join ACM Cyber! */}
          </p>

          {/* <button className={styles.membershipForm}>
            <a href="https://www.google.com/a/g.ucla.edu/ServiceLogin?continue=https://docs.google.com/forms/d/e/1FAIpQLSd40YVQqKPlcne_h1NtElVLuFuikdtPirRF8GazpiiAejbnXw/viewform">
              Start-of-quarter Membership Interest Form
            </a>
          </button> */}

          {/* <button className={styles.membershipForm}>
            <a href="https://www.google.com/a/g.ucla.edu/ServiceLogin?continue=https://docs.google.com/forms/d/e/1FAIpQLSfA1vwbVohx1Bpg4KiLnCoVCMMs2KiXBBd9FQu5XUBquaPPkg/viewform">
              Membership Requirement Submission
            </a>
          </button> */}

          <button className={styles.membershipForm}>
            <a href="/discord">Join our Discord Server</a>
          </button>

          <h2>What do I have to do?</h2>
          <p>
            ACM Cyber is an entirely student-run organization and would not
            exist without the contributions from all of our members! If you'd
            like to become an active member of ACM Cyber, complete one of the
            following requirements.
          </p>
          <ul>
            <li>
              <strong>Cyber Academy:</strong> Attend most Cyber Academy workshop
              days and submit one writeup for a challenge you've solved in Cyber
              Academy or PBR by the end of the quarter.
            </li>
            <li>
              <strong>Cyber Lab:</strong> Actively participate in a project with
              Cyber Lab. At the end of the quarter, create a blog post with your
              project group about your work and present your creation to the
              club!
            </li>
            <li>
              <strong>Psi Beta Rho:</strong> Submit one writeup for a challenge
              you've solved or up-solved from a CTF PBR competed in by the end
              of the quarter and attend at least two CTFs on the weekend
              in-person.
            </li>
          </ul>

          <h2>What's in it for me?</h2>
          <ul>
            <li>
              <strong>Community:</strong> Join a community of like-minded peers
              enthusiastic about hacking! Your photo and bio will also be added
              to our{" "}
              <a href="/members" className="link">
                members page
              </a>
              !
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
