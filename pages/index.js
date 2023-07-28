import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, Insights,Tokenomics,WhatsNew} from '../sections';
import Head from 'next/head';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Head>
      <title>SpaceBrideHub</title>
      <meta name="description" content="Space Bridge Bot is a decentralized finance (DeFi) protocol designed to bridge your assets across digital space without compromising your privacy!" />
      <meta property="og:title" content="SpaceBridgeHub" />
        <meta
          property="og:description"
          content="Introducing Space Bridge Bot Space Bridge Bot is a decentralized finance (DeFi) protocol designed to bridge your assets across digital space without compromising your privacy!. 🔐💰"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content='/ogimage.jpg' />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
   
    <div className="relative">
      <Insights />
      <Tokenomics/>
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Home;
