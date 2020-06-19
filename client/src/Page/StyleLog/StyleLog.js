import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Typical from 'react-typical';
import firebase from 'firebase';

import StyleLogCard from '../../Component/StyleLogCard/StyleLogCard';
import StyleLogPostModal from '../../Component/StyleLogPostModal/StyleLogPostModal';

import mask from '../../Asset/mask.jpg';

import './StyleLog.scss';

const API_URL="http://localhost:8080";

class StyleLog extends React.Component {
    state={
        logs: [],
        like: [],
    }

    componentDidMount () {
        axios
            .get(`${API_URL}/log/log`)
            .then(response => {          
                this.setState({
                    logs: response.data
                })
            })            
            .catch(err => {
                console.log(err)
            })
    }

    postNewlog = (e) =>{
        e.preventDefault();
        console.log(e)
        if ( !e.target.title.value) {
            alert ('please fill in the blanks');
            e.preventDefault();
        } else {
            axios
                .post(`${API_URL}/log/log`, {
                    "id": uuidv4(),
                    "author": firebase.auth().currentUser.displayName,
                    "userImage" : firebase.auth().currentUser.photoURL,
                    "title" : e.target.title.value,
                    "date" : Date.now(),
                    "image" : mask,
                })
                .then(res=> {
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
                e.target.reset();
        }
    }

    likeHandle = (e) => {
        axios
            .put(`${API_URL}/log/log/`, {
                // "likes" : this.props.logs.likes++
            })
            .then(res=> {
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render () {
        return (
            <main className="stylelog">
                <div className="stylelog--inner">

                    <Typical 
                        loop={Infinity}
                        wrapper="h2"
                        className="stylelog__title"
                        steps={[
                            1500,
                            'join #stylelog',
                            2000,
                            'share your trends',
                            2000,
                            '#OOTD',
                            2000
                        ]}
                    />

                    <div className="stylelog__log">
                        {this.state.logs.map((content) =>{
                            return <StyleLogCard 
                                key={content.id}
                                id={content.id}
                                title={content.title}
                                image={content.image}
                                date={content.date}
                                author={content.author}
                                userImage={content.userImage}
                                likes = {content.likes}
                                outer={content.outer}
                                outerlink={content.outerlink}
                                top={content.top}
                                toplink={content.toplink}
                                pants={content.pants}
                                pantslink={content.pantslink}
                                dress={content.dress}
                                dresslink={content.dresslink}
                                skirt={content.skirt}
                                skirtlink={content.skirtlink}
                                shoes={content.shoes}
                                shoeslink={content.shoeslink}
                                bag={content.bag}
                                baglink={content.baglink}
                                // comments={content.comments.commentName}
                                // likeHandle={this.likeHandle}
                            />
                        }).reverse()}
                    </div>

                    <StyleLogPostModal 
                        postNewlog={this.postNewlog}
                    />
                </div>
                
            </main>
        )
    }
}

export default StyleLog;