import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetupDetails(){
    return (
       <MeetupDetail
                 image = "https://worldwildschooling.com/wp-content/uploads/2024/05/Strasbourg_Givaga_AdobeStock_320312981.webp"
                title = "A first meet up "
                address= "Some Street 5, Some City"
                description= "The meetup description"
       />
    )
}

export async function getStaticPaths() {
    return{
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: "https://worldwildschooling.com/wp-content/uploads/2024/05/Strasbourg_Givaga_AdobeStock_320312981.webp",
                id: meetupId,
                title: "A first meet up ",
                address: "Some Street 5, Some City", 
                description: "The meetup description",
            },
        },
    };
}

export default MeetupDetails;