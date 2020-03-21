import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderContact(props) {

            return(
                <Card
                  title='Contact Information'>
                    <Text style={{ textAlign: "left" }}>
                        {`121, Clear Water Bay Road\n\nClear Water Bay, Kowloon\nHONG KONG\nTel: +852 1234 5678\nFax: +852 8765 4321\nEmail:confusion@food.net`}
                    </Text>
                </Card>
            );

        }


class Contact extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return(
            <RenderContact />
        );
    }
}

export default Contact;