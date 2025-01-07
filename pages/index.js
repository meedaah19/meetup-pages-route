import Head from 'next/head';

import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props){
    return (
        <Fragment>
            <Head>
                   <title>React Meetups</title>
                   <meta name='description' content='Browse a huge list of highly active React meetups!'/>
            </Head>
        <MeetupList meetups={props.meetups}/>
        </Fragment>
)
}

// export async function getServerSideProps() {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://meedaah19:Y89,!Yj&ZecD^2+@cluster0.jvvyu.mongodb.net/?retryWrites=true&w=majority&appName=meetups');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const meetups = await meetupsCollection.find().toArray();

        client.close();

    return {
        props: {
            meetups: meetups.map(meetups => ({
                title: meetups.title,
                address: meetups.address,
                image: meetups.image,
                id: meetups._id.toString()
            }))
        },
        revalidate : 1
    };
}

export default HomePage;