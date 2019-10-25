import React from 'react';
import Story from '../Components/Story';
import HeadingSecondary from '../Components/HeadingSecondary';
import BgVideo from '../Components/BgVideo';


const Stories = props => {

  const data = [
    {
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-8.jpg?alt=media&token=81684add-4aad-47e1-b8af-b57646f6e9d2", 
      name: "Mary Smith",
      header: "I had the best week ever with my family"
    },
     {
      imgSrc: "https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/nat-9.jpg?alt=media&token=c924b164-24f1-49cc-bad6-f27cf9be12ab", 
      name: "Jack Wilson",
      header: "WOW! My life is completely different now"
    }
  ]

  const mp4 ="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/video.mp4?alt=media&token=b8cc8445-86b1-49fa-ac96-143d939f9fc8";
  const webm ="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/video.webm?alt=media&token=ef43d575-06e2-4845-9027-975bb1cb9a27";

 return(
    <section className="section-stories">
    <BgVideo mp4={mp4} webm={webm} />
     <HeadingSecondary text="We make people genuinely happy"/>

        {data.map(story => (
          <div className="row">
              <Story story={story}/>
            </div>
        ))}

        <div className="u-center-text -u-margin-top-huge">
          <a href="#" className="btn-text">Read all stories &rarr;</a>
        </div>
       
    </section>
  )
}

export default Stories;