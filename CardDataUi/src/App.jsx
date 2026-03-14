
import './App.css'
import Card from './components/Card'
function App() {
  const users = [
    {
      heading: "Noah Thompson",
      bio: "Product Designer who focuses on simplicity & usability.",
      likes: "72.9K",
      posts: 828,
      views: "342.9K",
      profile_picture: "https://i.pinimg.com/736x/bb/65/bd/bb65bdeab14fcb2e332edcdfae569465.jpg",
      cover_img_url: "https://i.pinimg.com/736x/65/0d/5c/650d5c277301621a5100e247df361e67.jpg"
    },
    {
      heading: "Elena Rodriguez",
      bio: "Digital Artist exploring the intersection of AI and nature.",
      likes: "104.2K",
      posts: 512,
      views: "890.1K",
      profile_picture: "https://i.pinimg.com/736x/99/87/e7/9987e70357be73abff33619edfc6b89e.jpg",
      cover_img_url: "https://i.pinimg.com/736x/0a/72/eb/0a72eb0678b8799016db405c894e9b9a.jpg"
    },
    {
      heading: "Marcus Chen",
      bio: "Tech Lead. Building the future of the decentralized web.",
      likes: "45.0K",
      posts: 1205,
      views: "215.4K",
      profile_picture: "https://i.pinimg.com/1200x/85/3a/5a/853a5a0102da872e193a3743c2450ac4.jpg",
      cover_img_url: "https://i.pinimg.com/1200x/04/18/2c/04182c356032c5d994f300b52481d8b5.jpg"
    },
    {
      heading: "Sarah Jenkins",
      bio: "Travel Photographer capturing the world one frame at a time.",
      likes: "218.7K",
      posts: 342,
      views: "1.2M",
      profile_picture: "https://i.pinimg.com/736x/b2/e3/5f/b2e35f126076e2d6a339b16ed1cffcbb.jpg",
      cover_img_url: "https://i.pinimg.com/1200x/a8/d8/ce/a8d8ce70e31ad15bdba72b7abfc65808.jpg"
    },
    {
      heading: "Liam O'Shea",
      bio: "Motion Designer making things move in smooth 60fps.",
      likes: "12.5K",
      posts: 94,
      views: "88.3K",
      profile_picture: "https://i.pinimg.com/736x/04/bc/7d/04bc7daea5034d67669ce06f645df64a.jpg",
      cover_img_url: "https://i.pinimg.com/1200x/48/71/ef/4871ef1de8bf794ee57633115b723e59.jpg"
    },
    {
      heading: "Aisha Khan",
      bio: "UX Researcher dedicated to inclusive and accessible design.",
      likes: "33.8K",
      posts: 467,
      views: "156.9K",
      profile_picture: "https://i.pinimg.com/736x/74/03/99/7403997d18c9aee040043d7f9cd38435.jpg",
      cover_img_url: "https://i.pinimg.com/736x/d6/a3/45/d6a345fedff35405d218f64ce0560ca0.jpg"
    },
    {
      heading: "David Miller",
      bio: "Full-stack Developer and open-source contributor.",
      likes: "51.2K",
      posts: 1102,
      views: "412.5K",
      profile_picture: "https://i.pinimg.com/736x/14/9f/69/149f699b0e9584f836f3f3ccd54b6859.jpg",
      cover_img_url: "https://i.pinimg.com/736x/16/4b/1c/164b1c35a60dc65d249bd4b7e28d1ea6.jpg"
    },
    {
      heading: "Sofia Rossi",
      bio: "Brand Strategist helping startups find their unique voice.",
      likes: "89.4K",
      posts: 621,
      views: "610.2K",
      profile_picture: "https://i.pinimg.com/736x/74/4b/3b/744b3b3912d3c4bb4fb6bfbdceb5459e.jpg",
      cover_img_url: "https://i.pinimg.com/736x/7d/d5/89/7dd589d6386b8e429ea4bc0b9a52c617.jpg"
    },
    {
      heading: "Jordan Smith",
      bio: "3D Modeler specializing in low-poly environments.",
      likes: "22.1K",
      posts: 158,
      views: "92.4K",
      profile_picture: "https://i.pinimg.com/736x/7f/62/96/7f62969e2ca7b47eeaa404f240339c45.jpg",
      cover_img_url: "https://i.pinimg.com/1200x/ed/06/b3/ed06b3d6bfa43c5a8e19cd40bd1c30f0.jpg"
    },
    {
      heading: "Maya Patel",
      bio: "Illustrator creating whimsical worlds with vibrant colors.",
      likes: "156.3K",
      posts: 743,
      views: "1.1M",
      profile_picture: "https://i.pinimg.com/736x/b5/b7/d2/b5b7d22e63ac966978c02086a098b974.jpg",
      cover_img_url: "https://i.pinimg.com/736x/d6/6b/4b/d66b4b95b684f254e5d6d1a7b3f5139c.jpg"
    }
  ];

  return (
    <>
      <div className='p-10 px-12  bg-black  w-[100%] flex flex-wrap gap-10'>
        {users.map((user) => (
          <Card key={user.heading} user={user} />
        ))}
      </div>
    </>
  )
}

export default App
