
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1598626170455029";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/*


 <div id="fb-root"></div>



 <div class="fb-like"
data-share="true"
data-width="450"
data-show-faces="true">
    </div>

    <div class="fb-login-button"
data-max-rows="1"
data-size="xlarge"
data-show-faces="false"
data-auto-logout-link="true">
    </div>

    <div id="status"></div>
    */