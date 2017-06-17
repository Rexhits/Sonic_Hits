import React, { Component } from 'react';
import './App.css';
import musicIcon from './img/music.png';
import soundDesignIcon from './img/soundDesign.png';
import mixerIcon from './img/mixer.png';
import wrenchIcon from './img/wrench.png';

class ServicesPage extends Component {
  render() {
    return (
      <div className="Pages">
        <div className="PageTitle">
          <h1>Services</h1>
        </div>
        <div className="PageContent">
          <table className="ServicesTable">
            <tbody>
              <tr>
                <th>
                  <img className="icon" src={musicIcon} alt="musicIcon" height="64" width="64"></img>
                  Music
                </th>
                <th>
                  <img className="icon" src={soundDesignIcon} alt="soundDesignIcon" height="64" width="64"></img>
                  Sound Design
                </th>
              </tr>
              <tr>
                <td>Our music team consists of two kinds of artists. The <mark>veteran</mark> old-timers with <mark>advanced music degree</mark> who prefer staff paper on the desk and a pencel in their hands, and the <mark>talented</mark> new-schools who sit in front of the screen with their hands on their MIDI controllers. Having both of them in the room gives us the versatility to <mark>compose</mark> and <mark>produce</mark> all kinds of genres from <mark>full orchestras</mark> to <mark>pure electronics</mark>.</td>
                <td>Artists in our sound design team are skillful <mark>mood makers</mark>. Based on the requirement of your project, we can recreate vivid scenes by <mark>field recording</mark>, build up mysterious atmosphere by <mark>sound sculpting</mark>, <mark>Foley</mark> a lively sound if it is hard to record directly, or <mark>synthesize</mark> an unique one from scratch. We have the creativity and experience to always come up with the right sound for you.</td>
              </tr>
              <tr>
                <th>
                  <img className="icon" src={mixerIcon} alt="mixerIcon" height="64" width="64"></img>
                  Recording/Mixing
                </th>
                <th>
                  <img className="icon" src={wrenchIcon} alt="wrenchIcon" height="64" width="64"></img>
                  Interactive Deisgn
                </th>
              </tr>
              <tr>
                <td><mark>Supreme sound quaility</mark> is the foundation of our services. We got the facilities and equipments, and most importantly, the right people to ensure that. Our <mark>experienced</mark> sound director is here to make sure every <mark>detail</mark> is being captured in recording sessions, and our final mixdown will sound great on <mark>any playback device</mark>.</td>
                <td>After the audio assets being created, it is time to construct the actual interactive sonic world. We are fluent with middleware and APIs to integrate it into your project such as <mark>FMOD, Wwise, ADX2</mark> and <mark>Web Audio API</mark>. Beyond that, audio programming languages such as <mark>Max/MSP, Pure Data, SuperCollider</mark> and <mark>Csound</mark> are in our skillsets too. Moreover, some of us are even <mark>developers</mark> ourself, so you could be assured that the communication between us is always effecitve and cheerful.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default ServicesPage;

