import Header from "../components/Header";
import Footer from "../components/Footer";



function Home() {
    const poneys = [
        {
          id: 1,
          name: "Red Pegase",
          color: "red",
          age: 2,
          image: <img src="https://www.photos-animaux.com/data/photos/635/6344/x634379.jpg" alt="" />,
          isMagic: true,
        },
        {
          id: 2,
          name: "Blue Mentol",
          color: "blue",
          age: 3,
          image: <img src="https://c.wallhere.com/photos/cd/54/Rainbow_Dash_My_Little_Pony_rainbows_blue_orange_sky_clouds_wings-114980.jpg!d" alt="" />,
          isMagic: false,
        }, 
        {
          id: 3,
          name: "Green Horney",
          color: "green",
          age: 4,
          image: <img src="https://th.bing.com/th/id/R.d6cf94939e38d6c79fa57bf7e4f96335?rik=rFJy8HeaWw%2fWPA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-9griSfpuLE0%2fTe89HFJRxlI%2fAAAAAAAAAAo%2f7qL5F5f-oj8%2fs1600%2fcheval%2bvert.jpg&ehk=9k3zUbBBqOtXrl8ujycemCMzkZFCzQhtG9VXBilt6jQ%3d&risl=&pid=ImgRaw&r=0" alt="" />,
          isMagic: true,
        },
        {
          id: 4,
          name: "Yellow Bee",
          color: "yellow",
          age: 5,
          image: <img src="https://yellowpony.fr/app/uploads/2021/04/yp-opengraph-fb.jpg" alt="" />,
          isMagic: false,
        },
        {
          id: 5,
          name: "Purple Bitch",
          color: "purple",
          age: 6,
          image: <img src="https://i.pinimg.com/736x/10/79/bc/1079bcf5545d603d5650c2dc0c39f1c8--mini-pony-my-little-pony.jpg" alt="" />,
          isMagic: true,
        },
        {
          id: 6,
          name: "Pink Lady",
          color: "pink",
          age: 7,
          image: <img src="https://th.bing.com/th/id/OIP.704yVt39WLf9TftHi_hn0AHaE8?pid=ImgDet&rs=1" alt="" />,
          isMagic: false,
        },
        {
          id: 7,
          name: "Black Mamba",
          color: "black",
          age: 8,
          image: <img src="https://th.bing.com/th/id/R.29041552f5eee8d05f0577f548caafbb?rik=nXe0hMUtgYUPyA&riu=http%3a%2f%2fwww.shetland-de-cabue.net%2fimages%2fmedia_photo_1_17.jpg&ehk=0gPNY1y6Wyl23Tj%2bhOL3SKWCT9TRxaJ8%2fgvlVZEidj4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />,
          isMagic: true,
        },
        {
          id: 8,
          name: "White Spirit",
          color: "white",
          age: 9,
          image: <img src="https://th.bing.com/th/id/R.13219c3b0d8077d4d209add76f6e9ff5?rik=j%2bFVeLGY%2b2r3IA&riu=http%3a%2f%2fwww.shadyacres.dk%2fBilleder+Hjemmeside%2fBrightlyn%2fBrightlyn+043.jpg&ehk=IM87jXF7QqU0swZEke6bshVPkQUBl0M0MhogMOG9Vy4%3d&risl=&pid=ImgRaw&r=0" alt="" />,
          isMagic: false,
        },
        {
          id: 9,
          name: "Brown Don",
          color: "brown",
          age: 10,
          image: <img src="https://www.thesprucepets.com/thmb/0m5jDx_GZpEqjvkurhV_1iuAgWs=/3865x2576/filters:no_upscale():max_bytes(150000):strip_icc()/minature-shetland-pony-on-a-pasture-bavaria-germany-europe-533676600-58483b2b5f9b5851e5df1177.jpg" alt="" />,
          isMagic: true,
        },
        {
          id: 10,
          name: "Grey Goose",
          color: "grey",
          age: 11,
          image: <img src="https://colorgenetics.info/sites/default/files/Grey%20Pony%20Sideshot%20-%20Copy%20-%20Copy_0.JPG" alt="" />,
          isMagic: false,
        },
      ];
      
      const poneysIsMagic = poneys.filter((things)=>{
        return (
            things.isMagic===true
        )
    });

    const fivePoneys = poneysIsMagic.slice(-5);

return (
    <>
      <Header />
      <main>

        <section>
        {fivePoneys.map((poneys) => {
                return (
                    <article>
                        <h2>{poneys.name}</h2>
                        <div>{poneys.image}</div>
                        <p>{poneys.age} ans</p>
                        <p> {poneys.color} color</p>
                    </article>
                )
            })}
        </section>




      </main>
      <Footer />
    </>
  );
}

export default Home;