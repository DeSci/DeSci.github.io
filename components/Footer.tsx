const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-row responsive-width">
          <div className="footer-column">
            <div className="footer-heading">Community</div>
            <span><a className="footer-link" href="https://github.com/DeSci" target="_blank">GitHub</a></span>
            <span><a className="footer-link" href="https://twitter.com/DeSciPub" target="_blank">Twitter</a></span>
            <span><a className="footer-link" href="https://discord.gg/mgTdFFPvVN" target="_blank">Discord</a></span>
            <span><a className="footer-link" href="https://www.reddit.com/r/DeSci/" target="_blank">Reddit</a></span>
          </div>
          <div className="footer-column">
            <div className="footer-heading">About</div>
            <span><a className="footer-link" href="mailto:contact@desci.pub">contact@desci.pub</a></span>
          </div>
          <div id="mc_embed_signup">
            <form
              action="https://pub.us6.list-manage.com/subscribe/post?u=8ae81421b428c2c2da7d54b35&amp;id=39674b9682"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <div className="footer-heading">Newsletter</div>
                <div className="mc-field-group">
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                  <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                </div>
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_8ae81421b428c2c2da7d54b35_39674b9682" tabIndex={-1} />
                </div>
                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
