import CyberSeo from "@/components/CyberSeo";

export default function Join() {
  return (
    <>
      <CyberSeo title="Join Us" description="Join ACM Cyber at UCLA!" />
      <div className="page">
        <div className="content">
          <h1>Join Us</h1>

          <h2>Membership Requirements</h2>
          <p>
            ACM Cyber is an entirely student-run organization and would not
            exist without the contributions from all of our officers and
            members! If you'd like to become an active member of ACM Cyber (and
            get your photo on this website), complete one of the following
            requirements.
            <br />
            <br />
            <b>Cyber Lab:</b>
            <br />
            Participate in a project with Cyber Lab. At the end of the quarter,
            create a blog post with your project group about your work and
            present your creation to the club!
            <br />
            <b>Cyber Academy:</b>
            <br /> Submit one writeup for a challenge you've solved by the end
            of the quarter.
            <br />
            <b>PBR:</b>
            <br /> Submit one writeup for a challenge you've solved by the end
            of the quarter and attend at least one CTF on the weekend
          </p>
        </div>
      </div>
    </>
  );
}
