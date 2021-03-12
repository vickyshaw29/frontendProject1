import React from 'react'
import { Switch, Route } from 'react-router-dom'
function MainRouter() {
    return (
        <div>
            <Menu />
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/performanc" component={Performanc} />
                <Route exact path="/engagement" component={Engagement} />
                <Route exact path="" component={UserProfile} />
                <Route exact path="/user/findPeople/:userid" component={FindPeople} />
                <Route exact path="/user/edit/:userid" component={EditProfile} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/post/new/:userid" component={NewPost} />
                {/* Edit post which will be used in the singlePost.js */}
                {/* <Route exact path="/post/edit/:postid" component={EditPost} /> */}
                {/* <Route exact path="/post/:postid" component={SinglePost} /> */}
                
            {/* </Switch> */} */}

        </div>
    )
}

export default MainRouter
