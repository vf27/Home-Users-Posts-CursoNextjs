import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import Title from '../../components/title';

export default function Users(/*{users} */){
    return(
        <Layout>
            <Head>
                <title> Landing page de users   </title>
                <meta> name = "description" content= "En este curso de webtutoriales aprenderemos sobre Next JS" </meta>
            </Head>
            <Title> Users Page </Title>
            <div className = 'grid'>
                {users.map(user=> {
                    return(
                        <Link href ={`/users/[id]`} as={`/users/${user.id}`} key={user.id}>
                        <a className ='card'>
                            <h3> User </h3>
                            <p> Name: {user.name} </p>
                            <p> Email: {user.email} </p>
                        </a>
                        <style jsx>
      {`
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: black;
          text-decoration: none;
          border: 2px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}
      </style>
                        </Link>
                    )
                })}

            </div>
        </Layout>
    )
}
// export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await res.json();
  
//     return {
//       props: {
//         users
//       }
//     }
//   }