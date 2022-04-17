import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <h1 className='text-center my-5'>Enrich your knowledge here</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <img src="https://www.okta.com/sites/default/files/styles/1640w_scaled/public/media/image/2020-10/Authentication_vs_Authorization.png?itok=uBFRCfww" height={400} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Difference between authorization and authentication</h4>
                            <p className="card-text fs-6">Authentication is something that varifies if the user is real or fake. And on the other hand authentication is like a permission. Once an user is verified then permission is given to access different things. This is called authorization</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="https://firebase.google.com/images/social.png" height={400} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h4>
                            <p className="card-text fs-6">I'm using firebase for authentication. Manual authentication is quite difficult whereas firebase make it very easier. That is why I am using firebase for authentication. There are many alternatives of firebase. Among them, okta, passport, keycloak etc are famous. </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg" height={400} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">What other services does firebase provide other than authentication?</h4>
                            <p className="card-text fs-6">Though firebase is porpular for authentication, it offers some other services also. Analytics, hosting, cloud functions, predictions, clud messaging etc are the famous other services of firebase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;