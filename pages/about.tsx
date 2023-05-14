import Head from "next/head";

type DataProps = {
  data: Record<string, any>;
};

export default function About({ data }: DataProps) {
  return (
    <div className="page">
      <Head>
        <title>About | ACM Cyber at UCLA</title>
      </Head>
      <h1>About</h1>

      <h2>Who Are We</h2>
      <p>
        We are a group of hackers, CTFers and developers passionate about
        cybersecurity. We break things for fun and work to improve our skills in
        a variety of disciplines, whether it be rev, pwn, crypto, or something
        entirely different. We aim to nurture the love of cybersecurity in the
        students at UCLA.
      </p>
    </div>
  );
}
