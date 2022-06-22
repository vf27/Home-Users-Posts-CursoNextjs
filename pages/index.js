import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Title from '../components/title';

export default function Home(){
    return(
        <Layout>
            <Head>
                <title> Aprendamos Nextjs con webtoriales   </title>
                <meta> name = "description" content= "En este curso de webtutoriales aprenderemos sobre Next JS" </meta>
            </Head>
            <Title> Home page </Title>
            <p> Aprendemos NextJS con WebTutoriales</p>
            <style>
            {`
                p  {  
                  color: red;
                }
                p:hover{ 
                    color:darkblue; 
                }
            `}
            </style>
        </Layout>
    )
}