import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://worldwildschooling.com/wp-content/uploads/2024/05/Strasbourg_Givaga_AdobeStock_320312981.webp',
        address: 'Some address 5, 12345 some city',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHM-nFyOzP6TTEko_53C2IkAWxDvu50u_JRowmHW0wDnpdQ9fJwTwv8UZbFWOQYsPXCg&usqp=CAU',
        address: 'Some address 5, 12345 some city',
        description: 'This is a second meetup!'
    },
    {
        id: 'm3',
        title: 'A third Meetup',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaHC98TrDDjaOQk_hGWa1Imv1B2RwgYzBPg&s',
        address: 'Some address 5, 12345 some city',
        description: 'This is a third meetup!'
    },
];

function HomePage(props){
    return <MeetupList meetups={props.meetups}/>
}

// export async function getServerSideProps() {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate : 1
    };
}

export default HomePage;