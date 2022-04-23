/* eslint-disable react/no-danger */
const GoogleAnalytics = (): React.ReactElement => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-60017713-2"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-60017713-2');
    `,
      }}
    />
  </>
);
export default GoogleAnalytics;
