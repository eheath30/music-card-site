import React, {createContext, useState} from 'react';


    const artistsData = [
      {
        id: 1,
        artistimage: "https://www.dailynews.com/wp-content/uploads/2020/03/LDN-L-INTHEEND-0313-02-1.jpg?w=620",
        name: "Linkin Park",
        genre: "pop-rock",

        description: `Linkin Park is an American rock band from Agoura Hills, California. The band's current lineup comprises vocalist/rhythm guitarist/keyboardist Mike Shinoda, lead guitarist Brad Delson, bassist Dave Farrell, DJ/turntablist Joe Hahn and drummer Rob Bourdon.`,

        songs: [
          {name: "In the end", releasedate: "2001", songurl: "https://www.youtube.com/watch?v=eVTXPUF4Oz4&ab_channel=LinkinPark", albumimage: "https://www.factinate.com/wp-content/uploads/2017/07/In-the-End.jpg"}
          ,
          {name: "Numb", releasedate: "2003", songurl: "https://www.youtube.com/watch?v=kXYiU_JCYtU", albumimage: "https://images.genius.com/96b71b235c8bd246a46d75deba3ac149.1000x960x1.jpg"},
          {name: "Talking To Myself", releasedate: "2017", songurl: "https://www.youtube.com/watch?v=lvs68OKOquM", albumimage: "https://ligadoamusica.com.br/wp-content/uploads/2017/12/Talking-To-Myself-Linkin-Park-clipe-1024x683.jpg"}
        ],
      },

      {
        id: 2,
        artistimage: "https://www.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2018/05/03/donald-glover.jpg",
        name: "Donald Glover",
        genre: "rap",

        description: `Donald McKinley Glover Jr., also known by his stage name Childish Gambino, is an American actor, singer, rapper, writer, comedian, director, and producer.`,

        songs: [
          {name: "Redbone", releasedate: "2015", songurl: "https://www.youtube.com/watch?v=ezbsbkqoRrs", albumimage: "https://hiphop-n-more.com/wp-content/uploads/2017/06/maino-redbone-remix.jpg"}
          ,
          {name: "This is America", releasedate: "2018", songurl: "https://www.youtube.com/watch?v=VYOjWnS4cMY", albumimage: "https://upload.wikimedia.org/wikipedia/en/6/62/This_Is_America_%28single_cover%29_2018.jpg"}
        ],
      },
      {
        id: 3,
        artistimage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Axwell_Ingrosso_Live.png",
        name: "Axwell & Ingrosso",
        genre: "Electro house",

        description: `Axwell & Ingrosso (stylised as Axwell Λ Ingrosso) is a Swedish DJ duo consisting of Swedish House Mafia members Axwell and Sebastian Ingrosso. They made their debut performance at the 2014 Governors Ball Music Festival in New York City in June.`,

        songs: [
          {name: "On My Way", releasedate: "2015", songurl: "https://www.youtube.com/watch?v=opxhEVjNvdk", albumimage: "https://upload.wikimedia.org/wikipedia/en/5/56/On_My_Way_Axwell_Ingrosso.jpg"}
          ,
          {name: "Sun is Shining", releasedate: "2014", songurl: "https://www.youtube.com/watch?v=nbXgHAzUWB0", albumimage: "https://i.ytimg.com/vi/9w-VOLsaDLE/maxresdefault.jpg"}
        ],
      },
      {
        id: 4,
        artistimage: "https://www.gannett-cdn.com/presto/2019/08/02/PDTN/870e01ae-9339-48a1-af27-578f794ad7f2-sheeran-ed.jpg?crop=3634,2045,x0,y168&width=3200&height=1680&fit=bounds",
        name: "Ed Sheeran",
        genre: "Pop",

        description: `Edward Christopher Sheeran MBE (born 17 February 1991) is an English singer-songwriter. Born in Halifax, West Yorkshire and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project. He signed with Asylum Records the same year.`,

        songs: [
          {name: "Sing", releasedate: "2014", songurl: "https://www.youtube.com/watch?v=tlYcUqEPN58", albumimage: "https://i.pinimg.com/originals/53/19/dc/5319dcccb6484d79056c403691e7893b.jpg"}
          ,
          {name: "You Need Me, I Don't Need You", releasedate: "2010", songurl: "https://www.youtube.com/watch?v=ZXvzzTICvJs", albumimage: "https://images.genius.com/267c9068d6767e6db3e5d15a69c5e62e.600x600x1.jpg"}
        ],
      },
    ];

    export const ArtistContext = createContext();

    export const ArtistProvider = (props) => {
        const [artists, setArtists] = useState(artistsData)
        return (
            <ArtistContext.Provider value={[artists, setArtists]}>
                {props.children}
            </ArtistContext.Provider>
        )

    }
