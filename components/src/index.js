import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail author="Sam" comment="Nice work!" date="Today at 2 PM" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author="Jane" comment="What the hell did you do?" date="Today at 11 AM" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Fluffy" comment="I like it" date="Yesterday at 5 PM" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Tom" comment="Good Job!" date="Yesterday at 4 PM" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

if(module.hot){
    module.hot.accept();
}